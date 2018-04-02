import styles from '@/style.module.styl'

export default {
  beforeCreate() {
    const h = this.$createElement
    this.$createElement = function (...args) {
      if (typeof args[1] === 'object') {
        args[1].style = 'color:red'
      }
      return h.apply(this, args)
    }
  },
  render(h) {
    h('div', {
      styleName: ['button', this.disabled && 'disabled'],
      attrs: {
        'data-role': 'f-button'
      }
    })
  }
}
