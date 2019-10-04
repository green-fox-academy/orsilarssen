import * as test from 'tape';
import { Apple } from './apples';

test('1st test', t => {
  let apple = new Apple();

  let actual = apple.getApple();
  let expected = 'apple';

  t.equal(actual, expected);
  t.end();
});

import * as test2 from 'tape';
import { NumberOperations } from './sum';

test('2nd test', t => {
  let adding = new NumberOperations();

  let actual = adding.sum(5,6);
  let expected = 11;

  t.equal(actual, expected);
  t.end();

  let adding2 = new NumberOperations();

  let actual2 = adding2.sum2([]);
  let expected2 = [];

  t.equal(actual, expected);
  t.end();
});

import * as test2 from 'tape';
import { NumberOperations } from './sum';

test('2.1nd test', t => {
  let adding2 = new NumberOperations();

  let actual2 = adding2.sum2([]);
  let expected2 = [];

  t.equal(actual2, expected2);
  t.end();
});