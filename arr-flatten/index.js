/**
 * 
 * @example
 * var flatten = require('arr-flatten');
 * flatten(['a', ['b', ['c']], 'd', ['e']]); => ['a', 'b', 'c', 'd', 'e']
 */
function flatten(array, res) {
    var len = array.length;
    for(var i = 0;i < len;i++) {
        Array.isArray(array[i]) ? flatten(array[i], res) : res.push(array[i]);
    }
    return res;
}

module.exports = function (arr) {
    if (!Array.isArray(arr)) {
        throw new Error('flatten expects an array as the argument.');
    }
    return flatten(arr, []);
}