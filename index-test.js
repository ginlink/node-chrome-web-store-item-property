var chromeWebStoreItemProperty = require('./index.js');

// free app
chromeWebStoreItemProperty('pgojnojmmhpofjgdmaebadhbocahppod', {
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
  },
  newConvert: true,
})
  .then(function (value) {
    console.log('[res]:', value);
    // =>
    /**
type: 'website',
title: 'Captcha Solver: Auto bypass captcha',
description: 'Automatically solve reCAPTCHA, hCaptcha, FunCAPTCHA, AWS WAF, and more types on any webpage.',
image: 'https://lh3.googleusercontent.com/GaH01um_-owXvdUjeSDeyS-10GYUrVv9yFu8QfzowA-ZPeaCmXfOqpObxcLSLgL7sXY8Vwdv3UHMvjFiBCJLQwcpdQ=s128-rj-sc0x00ffffff',
url: 'https://chromewebstore.google.com/detail/captcha-solver-auto-bypas/pgojnojmmhpofjgdmaebadhbocahppod',
version: '1.4.2',
id: 'pgojnojmmhpofjgdmaebadhbocahppod'
     */
    /**
'google-site-verification': '6MQ3V3iNTp9Gaek0rQdI1BT1b5HKKsN8_WzyFbu1uWU',
description: 'Automatically solve reCAPTCHA, hCaptcha, FunCAPTCHA, AWS WAF, and more types on any webpage.',
referrer: 'origin',
viewport: 'width=device-width, initial-scale=1.0',
name: 'Captcha Solver: Auto bypass captcha',
url: 'https://chrome.google.com/webstore/detail/captcha-solver-auto-bypas/pgojnojmmhpofjgdmaebadhbocahppod',
image: 'https://lh3.googleusercontent.com/GaH01um_-owXvdUjeSDeyS-10GYUrVv9yFu8QfzowA-ZPeaCmXfOqpObxcLSLgL7sXY8Vwdv3UHMvjFiBCJLQwcpdQ=w128-h128-e365-rj-sc0x00ffffff',
version: '1.4.2',
price: '0',
priceCurrency: 'USD',
interactionCount: { UserDownloads: 10000 },
operatingSystem: 'Chrome',
ratingValue: 4.548387096774194,
ratingCount: 31,
id: 'pgojnojmmhpofjgdmaebadhbocahppod'
     */
  })
  .catch(function (err) {
    console.log('[err]:', err);
  });
