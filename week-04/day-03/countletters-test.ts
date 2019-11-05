'use strict';

import * as test from 'tape';
import { letterCount } from './countletters';

test('testing letterCount()', t => {

  const str1: string = JSON.stringify(letterCount('aabbddcc'))
  const actual = str1;
  const expected = '{"a":2,"b":2,"c":2,"d":2}';

  t.equal(actual, expected);
  t.end();
});