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
  followRedirect: false,
};

function decodeAndEncodeUrl(url) {
  var buffer = Buffer.from(url, 'binary');
  return encodeURI(buffer.toString('utf8'));
}

function get(identifier, userConfig) {
  return new Promise(function (resolve, reject) {
    var config = mergeConfig(
      buildDetailUrl(userConfig, identifier),
      defaultConfig,
      userConfig
    );
    request(config, function (error, response, body) {
      if (error) {
        reject(error);
        return;
      }

      if (response.statusCode === 301 || response.statusCode === 302) {
        // 处理重定向
        var location = response.headers['location'];
        if (location) {
          var correctedLocation = decodeAndEncodeUrl(location);
          // 继续请求修正后的URL
          Object.assign(config, { url: correctedLocation });
          request(config, function (err, res, body) {
            if (err) {
              reject(err);
              return;
            }

            if (!isOk(res)) {
              reject(new HTTPError(res.statusCode));
              return;
            }

            resolve(body);
          });
        } else {
          reject(new HTTPError(response.statusCode));
        }
        return;
      } else if (!isOk(response)) {
        reject(new HTTPError(response.statusCode));
        return;
      }
      resolve(body);
    });
  });
}

module.exports = get;
module.exports.defaultConfig = defaultConfig;
