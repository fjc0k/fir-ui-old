/* eslint max-depth: 0 complexity: 0 */

import { forOwn, isArray, toString } from 'lodash'

export function genFunctionalData() {
  const finalData = {}
  let i = arguments.length
  let staticClass

  while (i--) {
    forOwn(arguments[i], (descriptor, prop, data) => {
      if (!descriptor) return

      switch (prop) {
        // Array merge strategy (array concatenation).
        case 'class':
        case 'style':
        case 'directives':
          if (!isArray(finalData[prop])) {
            finalData[prop] = []
          }
          finalData[prop] = finalData[prop].concat(descriptor)
          break

        // Space delimited string concatenation strategy.
        case 'staticClass':
          staticClass = toString(descriptor).trim()
          if (!finalData[prop]) { // eslint-disable-line
            finalData[prop] = staticClass
          } else {
            finalData[prop] += ` ${staticClass}`
          }
          break

        // Object merge strategy.
        case 'attrs':
        case 'props':
        case 'domProps':
        case 'scopedSlots':
        case 'staticStyle':
        case 'hook':
        case 'transition':
          if (!finalData[prop]) {
            finalData[prop] = {}
          }
          finalData[prop] = { ...descriptor, ...finalData[prop] }
          break

        // Object, the properties of which to merge via array merge strategy (array concatenation).
        // Callback merge strategy merges callbacks to the beginning of the array,
        // so that the last defined callback will be invoked first.
        // This is done since to mimic how Object.assign merging
        // uses the last given value to assign.
        case 'on':
        case 'nativeOn':
          if (!finalData[prop]) {
            finalData[prop] = {}
          }
          forOwn(descriptor, (listener, event) => {
            // Concat function to array of functions if callback present.
            if (finalData[prop][event]) {
              // Insert current iteration data in beginning of merged array.
              finalData[prop][event] = [].concat(
                finalData[prop][event],
                listener
              )
            } else {
              // Straight assign.
              finalData[prop][event] = listener
            }
          })
          break

        // Reassignment strategy.
        default:
          if (!finalData[prop]) {
            finalData[prop] = data[prop]
          }
          break
      }
    })
  }
  return finalData
}

export const VNodeType = {
  type: null,
  vnode: true
}
