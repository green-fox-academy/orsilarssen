import * as test2 from 'tape';
import { NumberOperations } from './sum';

test('2.1nd test', t => {
  let adding2 = new NumberOperations();

  let actual2 = adding2.sum2([]);
  let expected2 = [];

  t.equal(actual2, expected2);
  t.end();
});