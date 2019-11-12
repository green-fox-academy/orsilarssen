'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  request(app)
    .get('/groot')
    .query({ message: "lol"})
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      let message = {
        received: "lol",
        translated: "I am Groot!"
      };
      t.error(err, 'No error');
      t.deepEqual(res.body, message, 'Correct message');
      t.end();
    });
});

test('groot endpoint', (t) => {
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(404)
    .end(function (err, res) {
      let message = {"error": "I am Groot!"};
      t.error(err, 'No error');
      t.deepEqual(res.body, message, 'correct set error message');
      t.end();
    });
});
