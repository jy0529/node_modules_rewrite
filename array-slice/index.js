"use strict"
module.exports = function (arr, start, end) {
    if (!Array.isArray(arr)) {
        throw new Error('array-slice expects an array as the first argument.');
    }
    var len = arr.length || 0;
    var range = [];

    // 需要对start, end作处理, 使它们在合理的范围内
    start = idx(arr, start);
    end = idx(arr, end);

    while(start < end) {
        range.push(arr[start++]);
    }

    return range;
}


function idx(arr, pos) {
    var len = arr.length;
    if (pos < 0) {
        pos = Math.max(len + pos, 0);
    } else {
        pos = Math.min(pos, len);
    }
    return pos;
}