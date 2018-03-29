import { isFunction } from '@/utils/lodash'
import { inBrowser } from '@/utils/env'

const supportTouch = inBrowser && (
  ('ontouchstart' in window) ||
  (window.DocumentTouch && document instanceof window.DocumentTouch)
)

const TOUCH_START = supportTouch ? 'touchstart' : 'mousedown'
const TOUCH_END = supportTouch ? 'touchend' : 'mouseup'
const LAST_VALUE = '__lastvalue__'
const ON_TOUCH_START = '__touchstart__'
const ON_TOUCH_END = '__touchend__'
const TIMER = '__timer__'

const unbind = el => {
  if (el[ON_TOUCH_START]) {
    clearTimeout(el[TIMER])
    el.removeEventListener(TOUCH_START, el[ON_TOUCH_START])
    el.removeEventListener(TOUCH_END, el[ON_TOUCH_END])
  }
}

const bind = (el, { value, arg: duration = 1500 }) => {
  if (!isFunction(value) || value === el[LAST_VALUE]) return

  unbind(el)

  el[ON_TOUCH_START] = e => {
    clearTimeout(el[TIMER])
    value('start', e)
    el[TIMER] = setTimeout(() => {
      e.preventDefault()
      e.stopPropagation()
      value('end', e)
    }, duration)
  }
  el[ON_TOUCH_END] = clearTimeout.bind(null, el[TIMER])

  el.addEventListener(TOUCH_START, el[ON_TOUCH_START])
  el.addEventListener(TOUCH_END, el[ON_TOUCH_END])
}

const update = bind

export default {
  bind,
  update,
  unbind
}
