/**
 * Expose findIndex
 */

module.exports = findIndex

/**
 * findIndex
 */

function findIndex (arr, fn, fromIndex) {
  fromIndex = fromIndex || 0

  for (var i = fromIndex, len = arr.length; i < len; ++i) {
    if (fn(arr[i])) return i
  }

  return -1
}
