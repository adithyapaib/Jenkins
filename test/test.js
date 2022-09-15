const request = require('supertest');
const app = require('../index.js');
describe('GET /ping', function() {
    it('respond with pong', function(done) {
        request(app).get('/ping').expect('{ "message": "pong" }', done);
    });
});