var expect = require('chai').expect
var server2 = require('../server');

describe('test', () => {
  it('run test on travis', () => {
    expect('App running on port' , server.address().port).to.equal('App running on port' , server.address().port);
  });
});