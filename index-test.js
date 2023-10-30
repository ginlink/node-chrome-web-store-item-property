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
    //{
    //  name: 'Do Not Merge WIP for GitHub',
    //  url: 'https://chrome.google.com/webstore/detail/do-not-merge-wip-for-gith/nimelepbpejjlbmoobocpfnjhihnpked',
    //  image: 'https://ssl.gstatic.com/chrome/webstore/images/thumb.png',
    //  version: '1.0.6',
    //  price: '0',
    //  priceCurrency: 'USD',
    //  interactionCount: {
    //    UserDownloads: 418
    //  },
    //  operatingSystems: 'Chrome',
    //  ratingValue: 4.5,
    //  ratingCount: 2,
    //  id: 'nimelepbpejjlbmoobocpfnjhihnpked'
    //};
  })
  .catch(function (err) {
    console.log('[err]:', err);
  });
