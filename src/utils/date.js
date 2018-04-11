import { isDate, isPlainObject, padStart, reduce, memoize } from 'lodash'

export const isLeapYear = memoize(
  year => (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0
)

export const getMonthDays = memoize(
  (year, month) => {
    month = Number(month)
    return (
      month === 2 ? (isLeapYear(year) ? 29 : 28) :
        [4, 6, 9, 11].indexOf(month) >= 0 ? 30 :
          31
    )
  },
  (year, month) => `${year}.${month}`
)

export const extract = memoize(
  date => ({
    y: date.getFullYear(), // 年
    m: date.getMonth() + 1, // 月
    d: date.getDate(), // 日
    h: date.getHours(), // 时
    i: date.getMinutes(), // 分
    s: date.getSeconds(), // 秒
    l: date.getMilliseconds() // 毫秒
  }),
  date => date.getTime()
)

export function format(date, template) {
  const patterns = (
    isDate(date) ? extract(date) : // Date 对象
      isPlainObject(date) ? date : // 普通对象
        extract(new Date(date)) // 可被 new Date() 解析的值
  )
  return reduce(patterns, (template, value, pattern) => {
    value = String(value)
    return template.replace(new RegExp(`(${pattern}+)`, 'g'), $0 => {
      const n = $0.length
      return (
        pattern === 'l' || n === 1 ? value : // 毫秒或n为1: 直接返回
          pattern === 'y' ? value.substr(4 - n) : // 年: 截取后n(n>1)位
            padStart(value, n, 0) // 否则: 前填充0到n位
      )
    })
  }, template)
}
