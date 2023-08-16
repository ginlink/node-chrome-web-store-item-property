var request = require('request');
var Promise = Promise || require('es6-promise').Promise;
var isOk = require('is-ok');

var HTTPError = require('./error').HTTPError;
var buildDetailUrl = require('./build-detail-url');
var mergeConfig = require('./merge-config');
var defaultConfig = {
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
  },
  qs: {
    hl: 'en',
    gl: 'US',
  },
};

function get(identifier, userConfig) {
  return new Promise(function (resolve, reject) {
    var config = mergeConfig(
      buildDetailUrl(identifier),
      defaultConfig,
      userConfig
    );
    request(config, function (error, response, body) {
      if (error) {
        reject(error);
        return;
      }
      if (!isOk(response)) {
        reject(new HTTPError(response.statusCode));
        return;
      }
      resolve(body);
    });
  });
}

module.exports = get;
module.exports.defaultConfig = defaultConfig;
