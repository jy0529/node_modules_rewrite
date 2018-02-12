var isSorted = require('./')

var arr = [3, 2, 1]

console.log(isSorted(arr))

console.log(isSorted(arr, function (a, b) {
    return b - a;
}))