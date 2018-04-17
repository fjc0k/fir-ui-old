<template>
  <p v-show="DemoBox" :class="$style.box">
    <f-hairline all>
      <div :class="$style.demo">
        <component :is="DemoBox" v-if="DemoBox" />
        <slot v-else />
      </div>
      <f-divider align="left" padding="0" width="100%" :class="$style.title">
        {{ title }}
      </f-divider>
      <div v-html="desc" :class="$style.desc" />
      <f-divider align="left" padding="0" width="100%" :class="$style.title">
        代码
      </f-divider>
      <div v-html="code" :class="$style.code" />
    </f-hairline>
  </p>
</template>

<script>
function extractVue(vue) {
  let options = {}
  let template = null

  // find options
  const script = vue.match(/<script>(.+?)<\/script>/s)
  if (script && script[1]) {
    const rawOptions = script[1].replace('export default', '')
    eval(`options = ${rawOptions}`)
  }

  // find template
  template = (
    vue
      .trim()
      .replace(/^<template>|<\/template>$/s, '')
      .replace(/(<script>|<styles>).+?(<\/script>|<\/styles>)/gs, '')
      .trim()
  )

  return { options, template }
}

export default {
  inheritAttrs: false,

  data: () => ({
    code: null,
    component: null,
    title: null,
    desc: null
  }),

  computed: {
    DemoBox() {
      return this.component && Object.assign(
        this.component.template ? { template: this.component.template } : {},
        this.component.options ? this.component.options : {},
      )
    }
  },

  mounted() {
    const $ = selector => this.$el.querySelector(selector)
    this.code = $('pre').outerHTML
    this.component = extractVue($('pre').innerText.trim())
    this.title = $('.custom-block-title').innerText.trim()
    $('.custom-block').removeChild(
      $('.custom-block-title')
    )
    this.desc = $('.custom-block').innerHTML
  }
}
</script>

<style module>
.demo {
  padding: 2rem 1.4rem;
}

.title {
  color: inherit;
}

.desc {
  padding: .2rem 1.6rem;
  font-size: .9em;
}

.code :global(pre[class*="language-"]) {
  border-radius: 0;
}
</style>