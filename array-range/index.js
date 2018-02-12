/**
 * @example
 * range(3)       // -> [ 0, 1, 2 ]
 * range(1, 4)    // -> [ 1, 2, 3 ]
 */

 function range (start, end) {
    if (start && typeof end === 'undefined') {
        end = start
        start = 0
    } 

    var len = end - start
    if (len < 0)
        throw new Error('array length must be positive')

    var arr = new Array(len)
    for(var i = 0, c = start;i < len; i++, c++) {
        arr[i] = c
    }

    return arr
 }

 module.exports = range