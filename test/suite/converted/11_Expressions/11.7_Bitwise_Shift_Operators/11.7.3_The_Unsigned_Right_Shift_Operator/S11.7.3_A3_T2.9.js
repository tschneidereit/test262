// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x >>> y returns ToNumber(x) >>> ToNumber(y)
 *
 * @section 11.7.3
 * @path 11_Expressions/11.7_Bitwise_Shift_Operators/11.7.3_The_Unsigned_Right_Shift_Operator/S11.7.3_A3_T2.9.js
 * @description Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Null
 */

//CHECK#1
if (true >>> null !== 1) {
  $ERROR('#1: true >>> null === 1. Actual: ' + (true >>> null));
}

//CHECK#2
if (null >>> true !== 0) {
  $ERROR('#2: null >>> true === 0. Actual: ' + (null >>> true));
}

//CHECK#3
if (new Boolean(true) >>> null !== 1) {
  $ERROR('#3: new Boolean(true) >>> null === 1. Actual: ' + (new Boolean(true) >>> null));
}

//CHECK#4
if (null >>> new Boolean(true) !== 0) {
  $ERROR('#4: null >>> new Boolean(true) === 0. Actual: ' + (null >>> new Boolean(true)));
}
