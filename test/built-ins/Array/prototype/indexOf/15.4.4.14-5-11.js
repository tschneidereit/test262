// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-11
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a number (value
    is negative number)
---*/

        var targetObj = {};

assert.sameValue([0, targetObj, 2].indexOf(targetObj, -1), -1, '[0, targetObj, 2].indexOf(targetObj, -1)');
assert.sameValue([0, 1, targetObj].indexOf(targetObj, -1), 2, '[0, 1, targetObj].indexOf(targetObj, -1)');
