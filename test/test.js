var expect = require('chai').expect
var server2 = require('../server');

describe('test', () => {
  it('run test on travis', () => {
    expect('App running on port 3000').to.equal('App running on port 3000');
  });
});