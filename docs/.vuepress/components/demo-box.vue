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
      <div v-html="desc"  :class="$style.desc" />
      <f-divider align="right" padding="0" width="100%">
        代码
      </f-divider>
      <div v-html="code" />
    </f-hairline>
  </p>
</template>

<script>
export default {
  inheritAttrs: false,

  data: () => ({
    code: null,
    pureCode: null,
    title: null,
    desc: null
  }),

  computed: {
    DemoBox() {
      return this.pureCode && { template: this.pureCode }
    }
  },

  mounted() {
    const $ = selector => this.$el.querySelector(selector)
    this.code = $('pre').outerHTML
    this.pureCode = $('pre').innerText.trim()
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
</style>