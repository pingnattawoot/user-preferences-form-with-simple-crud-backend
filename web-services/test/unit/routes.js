const proxyquire = require('proxyquire');
// const sinon = require('sinon');
const supertest = require('supertest');
const { expect } = require('chai');
const express = require('express');

describe('/api routes', () => {
  let app;
  let routes;
  let request;

  beforeEach(() => {
    app = express();
    request = supertest(app);
    routes = proxyquire('../../app/routes.js', {});
    routes.apiRoutes(app);
  });

  it('should respond with a 200', (done) => {
    request
      .get('/api')
      .expect('Content-Type', /json/)
      .expect(400, (err, res) => {
        expect(res.body).to.deep.equal({
          message: 'api!',
        });
        done();
      });
  });
});
