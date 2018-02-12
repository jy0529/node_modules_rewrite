var defaultComparator = function (a, b) {
  return a - b;
}

module.exports = function (arr, comparator) {
  comparator = comparator || defaultComparator;

  for (var i = 1, length = arr.length;i < length;i++) {
    if (comparator(arr[i-1], arr[i]) > 0) {
      return false;
    }
  }

  return true;
}