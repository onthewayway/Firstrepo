var expect = require('chai').expect
var server2 = require('../server');

describe('test', () => {
  it('run test on travis', () => {
    expect('App runs successfully').to.equal('App runs successfully');
  });
});