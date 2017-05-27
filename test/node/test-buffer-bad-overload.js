define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
'use strict';
var Buffer = require('buffer/../').Buffer;


var assert = require('assert');

assert.doesNotThrow(function() {
  Buffer.allocUnsafe(10);
});

assert.throws(function() {
  Buffer.from(10, 'hex');
});

assert.doesNotThrow(function() {
  Buffer.from('deadbeaf', 'hex');
});


return module.exports;});
