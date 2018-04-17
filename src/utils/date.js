import { memoize } from 'lodash'

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
