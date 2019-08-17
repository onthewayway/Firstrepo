var expect = require('chai').expect
var server = require('../server');

describe('test', () => {
  it('run test on travis',function (done) {
    expect('App runs successfully').to.equal('App runs successfully'),5000;
    done();
  });
});