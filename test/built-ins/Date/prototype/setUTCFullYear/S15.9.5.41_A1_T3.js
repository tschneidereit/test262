// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setUTCFullYear" has { DontEnum } attributes
es5id: 15.9.5.41_A1_T3
description: Checking DontEnum attribute
---*/

if (Date.prototype.propertyIsEnumerable('setUTCFullYear')) {
  $ERROR('#1: The Date.prototype.setUTCFullYear property has the attribute DontEnum');
}

for(var x in Date.prototype) {
  if(x === "setUTCFullYear") {
    $ERROR('#2: The Date.prototype.setUTCFullYear has the attribute DontEnum');
  }
}
