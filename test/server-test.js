var server = require(__dirname + '/server-ex');
var chai = require('chai');
var chaiHTTP = require('chai-http');

chai.use(chaiHTTP);
var expect = chai.expect;
var request = chai.request;
var port = 'localhost:3000';

describe('testing functionality of the server', function() {

  it('should GET', (done) => {
    request(port)
      .get('/test')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('GET testing');
        done();
      });
  });

  it('should POST', (done) => {
    request(port)
      .post('/test')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('POST testing');
        done();
      });
  });

  it('should PATCH', (done) => {
    request(port)
      .delete('/test')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('PATCH test');
        done();
      });
  });

  it('should DELETE', (done) => {
    request(port)
      .delete('/test')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('DELETE test');
        done();
      });
  });

  it('should respond a 404 error to GET requests at unknown routes', (done) => {
    request(port)
      .get('/404')
      .end((err, res) => {
        // expect(err).to.eql(null);
        expect(res).to.have.status(404);
        expect(res.body.msg).to.eql('Page not found');
        done();
      });
  });
});
