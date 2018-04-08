import CSSModules from 'vue-css-modules'
import { adjustZIndex, toggleVisibility } from '@/mixins'
import styles from './popup.styl'

const PLACEMENTS = ['center', 'top', 'right', 'bottom', 'left']

export default {
  name: 'f-popup',

  mixins: [
    CSSModules(styles),
    adjustZIndex(5000),
    toggleVisibility(false, true)
  ],

  props: {
    placement: {
      type: String,
      default: PLACEMENTS[0],
      validator: value => PLACEMENTS.indexOf(value) >= 0
    },
    transition: String,
    mask: {
      type: [Boolean, String],
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnMaskClick: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    localTransition() {
      return this.transition || (
        this.placement === 'center' ?
          'f--fade' :
          'f--slide-from-' + this.placement
      )
    }
  },

  mounted() {
    const el = this.$el
    if (el.parentNode) {
      el.parentNode.replaceChild(
        document.createComment(''),
        el
      )
      document.body.appendChild(el)
    }
  },

  methods: {
    handleMaskClick(e) {
      if (!this.closeOnMaskClick || e.target !== e.currentTarget) return

      this.hide()
    },
    onVisibleChange(visible) {
      if (!this.lockScroll) return

      const bodyElement = document.body
      const scrollingElement = (
        document.scrollingElement ||
        (
          document.documentElement.scrollTop ?
            document.documentElement :
            document.body
        )
      )

      if (visible) {
        this.scrollTop = scrollingElement.scrollTop
        bodyElement.classList.add(styles.fix)
        bodyElement.style.top = -this.scrollTop + 'px'
      } else {
        bodyElement.classList.remove(styles.fix)
        scrollingElement.scrollTop = this.scrollTop
      }
    }
  },

  render(h) {
    return h('div', [
      h('transition', {
        attrs: {
          appear: true,
          name: 'f--fade'
        }
      }, [
        h('div', {
          styleName: '@popup $placement',
          style: {
            zIndex: this.localZIndex,
            backgroundColor: this.mask,
            display: this.localVisible || 'none'
          },
          on: {
            click: this.handleMaskClick
          }
        }, [
          h('transition', {
            attrs: {
              appear: true,
              name: this.localTransition
            }
          }, this.$slots.default)
        ])
      ])
    ])
  }
}
