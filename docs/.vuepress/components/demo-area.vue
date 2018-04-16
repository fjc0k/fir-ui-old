<script>
export default {
  functional: true,

  render(h, { data, children }) {
    const Children = [
      h('div', children.filter((_, index) => index % 2 === 0)),
      h('div', children.filter((_, index) => index % 2 === 1))
    ]

    data.staticClass = [
      data.staticClass,
      'db--demo-area'
    ].join(' ')

    return h('div', data, Children)
  }
}
</script>

<style>
.db--demo-area {
  display: flex;
  justify-content: space-between;
}

.db--demo-area > div {
  width: 49%;
}
</style>