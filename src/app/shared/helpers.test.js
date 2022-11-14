/* eslint-disable no-undef */
import { dateFormat, millisToTime } from './helpers'

describe('Helpers', () => {
  const millis = 1471300214792
  const timeFromMillis = '22:30:14'

  const isoDate = '2014-11-03T19:38:34.203Z'
  const date = '3/10/2014'

  test('millisToTime returns correct values', () => {
    const tryMillisToTime = millisToTime(millis)
    expect(tryMillisToTime).toStrictEqual(timeFromMillis)
  })

  test('dateFormat returns correct values', () => {
    const tryDate = dateFormat(isoDate)
    expect(tryDate).toStrictEqual(date)
  })
})
