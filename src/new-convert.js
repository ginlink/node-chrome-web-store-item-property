'use strict';
var InvalidFormatError = require('./error').InvalidFormatError;
var Promise = Promise || require('es6-promise').Promise;
var htmlparser2 = require('htmlparser2');
var DomHandler = htmlparser2.DomHandler;
var Parser = htmlparser2.Parser;
var DomUtils = htmlparser2.DomUtils;

function newConvert(detailHtml) {
  return new Promise(function (resolve, reject) {
    var itemProps = {};
    var options = {};
    var handler = new DomHandler(null, options);
    new Parser(handler, options).end(detailHtml);

    // 解析meta
    DomUtils.getElementsByTagName('meta', handler.dom, true).forEach(function (
      el
    ) {
      var property = DomUtils.getAttributeValue(el, 'property');
      var contentValue = DomUtils.getAttributeValue(el, 'content');

      // 以og:开头的meta标签
      if (property && property.indexOf('og:') === 0) {
        var nameValue = property.replace('og:', '');
        nameValue = nameValue.replace('title', 'name'); // title -> name
        itemProps[nameValue.toLowerCase()] = contentValue;
        return;
      }
    });

    // 解析version
    var regex = /<div[^>]*>([\d.]+)<\/div>/;
    var versionMatch = detailHtml.match(regex);
    var version = null;
    if (versionMatch && versionMatch.length > 1) {
      version = versionMatch[1];
    }
    itemProps['version'] = version;

    handler = null;
    if (Object.keys(itemProps).length === 0) {
      reject(new InvalidFormatError('There is no meta property'));
      return;
    }
    if (
      !Object.prototype.hasOwnProperty.call(itemProps, 'url') ||
      !itemProps['url']
    ) {
      reject(new InvalidFormatError('url in response is required'));
      return;
    }
    var splitUrl = itemProps.url.split('/');
    itemProps['id'] = splitUrl[splitUrl.length - 1];
    resolve(itemProps);
  });
}

module.exports = newConvert;
