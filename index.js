'use strict';

var HTTPError = require('./src/error').HTTPError;
var InvalidFormatError = require('./src/error').InvalidFormatError;
var convert = require('./src/convert');
var newConvert = require('./src/new-convert');
var get = require('./src/get');
var defaultConfig = get.defaultConfig;

function run(identifier, userConfig) {
  var convertFn = userConfig.newConvert ? newConvert : convert;
  return get(identifier, userConfig).then(convertFn);
}

module.exports = run;
module.exports.run = run;
module.exports.get = get;
module.exports.convert = convert;
module.exports.HTTPError = HTTPError;
module.exports.InvalidFormatError = InvalidFormatError;
module.exports.defaultConfig = defaultConfig;
