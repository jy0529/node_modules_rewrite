'use strict';

var should = require('should');
var slice = require('./');

describe('array-slice', function() {
    it('should throw an error if the arr is not an array:', function () {
        (function () {
            slice();
        }).should.throw('array-slice expects an array as the first argument.');
    })
});

