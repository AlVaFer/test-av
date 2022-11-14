/**
 * @method dateFormat
 * @param {Date} - Date in ISO format
 * @returns {String} - Date in format DD/MM/YYYY
 */
export function dateFormat (isoDate) {
  const date = new Date(isoDate)
  return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
}

/**
 * @method millisToTime
 * @param {String} - Time in milliseconds
 * @returns {String} - Time in format HH:MM:SS
 */
export function millisToTime (millis) {
  return new Date(millis).toISOString().slice(11, 19)
}
