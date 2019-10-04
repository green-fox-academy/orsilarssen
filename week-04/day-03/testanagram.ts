'use strict'

import * as test from 'tape';
import { Mia } from './anagram';

test('anagram test', t => {
  let anatest = new Mia ();

  let actual2 = anatest.anagram();
  let expected2 = true;

  t.equal(actual2, expected2);
  t.end();
});