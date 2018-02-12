'use strict';

function dedupe (arr, hasher) {
  hasher = hasher || JSON.stringify

  var lookup = {}
  var res = []

  for(var i = 0, len = arr.length;i < len;i++) {
    var elem = arr[i]
    let hashed = hasher(elem)

    if (!lookup[hashed]) {
      res.push(elem)
      lookup[hashed] = true
    }

  }

  return res
}

module.exports = dedupe