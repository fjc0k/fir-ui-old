const cache = Object.create(null)

const extract = date => {
  const time = date.getTime()
  if (!cache[time]) {
    cache[time] = {
      y: date.getFullYear(), // 年
      m: date.getMonth() + 1, // 月
      d: date.getDate(), // 日
      h: date.getHours(), // 时
      i: date.getMinutes(), // 分
      s: date.getSeconds(), // 秒
      l: date.getMilliseconds() // 毫秒
    }
  }
  return cache[time]
}

const padStartWithZero = (str, n) => {
  const cacheKey = `${str}.${n}`
  if (!cache[cacheKey]) {
    for (let i = 0, m = n - str.length; i < m; i++) {
      str = '0' + str
    }
    cache[cacheKey] = str
  }
  return cache[cacheKey]
}

export default (date, template) => {
  const patterns = (
    date instanceof Date ? extract(date) :
      date !== null && typeof date === 'object' ? date :
        extract(new Date(date))
  )
  return Object.keys(patterns).reduce((result, pattern) => {
    const value = String(patterns[pattern])
    const len = value.length
    return result.replace(
      new RegExp(`(${pattern}+)`, 'g'),
      $0 => {
        const n = $0.length
        return (
          n === 1 || n === len ? value : // n=1或n=len: 直接返回
            n < len ? value.substr(len - n) : // n<len: 截取后n位
              padStartWithZero(value, n) // n>len: 前填充0到n位
        )
      }
    )
  }, template)
}
