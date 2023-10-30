module.exports = function (userConfig, identifier) {
  if (userConfig.newConvert) {
    return 'https://chromewebstore.google.com/detail/' + identifier;
  }
  return 'https://chrome.google.com/webstore/detail/' + identifier;
};
