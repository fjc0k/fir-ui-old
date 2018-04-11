const firDateFormatter = require('..')

test('传入 Date 实例和模板并正确格式化', () => {
  const NOW = new Date()
  expect(
    firDateFormatter(NOW, 'yy年m月ddd日 h时ii分ss秒l毫秒')
  ).toBe(
    `${String(NOW.getFullYear()).slice(-2)}年` +
    `${NOW.getMonth() + 1}月` +
    `${('00' + NOW.getDate()).slice(-3)}日 ` +
    `${NOW.getHours()}时` +
    `${('0' + NOW.getMinutes()).slice(-2)}分` +
    `${('0' + NOW.getSeconds()).slice(-2)}秒` +
    `${NOW.getMilliseconds()}毫秒`
  )
})

test('传入可被 new Date 解析的字符串和模板并正确格式化', () => {
  const STR = '2018-5-3 9:08:34'
  expect(
    firDateFormatter(STR, 'yy年m月ddd日 h时ii分ss秒')
  ).toBe(
    '18年5月003日 9时08分34秒'
  )
})

test('传入自定义对象和模板并正确格式化', () => {
  const CUSTOM = {
    y: 1995,
    m: 99,
    d: 1,
    x: 0
  }
  expect(
    firDateFormatter(CUSTOM, 'yyy-m-mm-dd-xxxx')
  ).toBe(
    '995-99-99-01-0000'
  )
})
