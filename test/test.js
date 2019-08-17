var expect = require('chai').expect
// var server = require('../server');
var assert = require('assert')

describe('test', function() {
  it('run test on travis',function() {
    assert.equal('App running on port 3000','App running on port 3000');
  });
});

// var assert = require('assert');
// describe('Basic Mocha String Test', function () {
//  it('should return number of charachters in a string', function () {
//         assert.equal("Hello".length, 4);
//     });
//  it('should return first charachter of the string', function () {
//         assert.equal("Hello".charAt(0), 'H');
//     });
// });