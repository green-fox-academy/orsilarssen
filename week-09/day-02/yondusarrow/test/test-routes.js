'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('Yondus arrow endpoint', (t) => {
  request(app)
    .get('/yondu')
    .query({ distance: 100, time: 10})
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      let calculation = {
        distance: 100,
        time: 10,
        speed: 10
      };
      t.error(err, 'No error');
      t.deepEqual(res.body, calculation, 'Correct calculation');
      t.end();
    });
});

test('yondu endpoint left empty', (t) => {
  request(app)
    .get('/yondu')
    .expect('Content-Type', /json/)
    .expect(404)
    .end(function (err, res) {
      let message = {"error": "Please provide distance and time!"};
      t.error(err, 'No error');
      t.deepEqual(res.body, message, 'correct set error message');
      t.end();
    });
});
