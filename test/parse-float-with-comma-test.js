'use strict';
var assert = require('power-assert');
var parseFloatWithComma = require('../src/parse-float-with-comma');

describe('parse-float-with-comma', function () {
  context('with comma', function () {
    it('"," is NaN', function () {
      assert(isNaN(parseFloatWithComma(',')));
    });
    it('1,004 equals 1004', function () {
      assert.strictEqual(parseFloatWithComma('1,004'), 1004);
    });
    it('1,000,004 equals 1000004', function () {
      assert.strictEqual(parseFloatWithComma('1,000,004'), 1000004);
    });
    it('1,000,004.1 equals 1000004.1', function () {
      assert.strictEqual(parseFloatWithComma('1,000,004.1'), 1000004.1);
    });
  });
  context('without comma', function () {
    it('"" is NaN', function () {
      assert(isNaN(parseFloatWithComma('')));
    });
    it('1004 is 1004', function () {
      assert.strictEqual(parseFloatWithComma('1004'), 1004);
    });
    it('1,000,004 is 1000004', function () {
      assert.strictEqual(parseFloatWithComma('1000004'), 1000004);
    });
    it('1000004.1 is 1000004.1', function () {
      assert.strictEqual(parseFloatWithComma('1000004.1'), 1000004.1);
    });
  });
});
