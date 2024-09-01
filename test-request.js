const request = require('request');

// const url =
//   'https://chromewebstore.google.com/detail/censor-tracker---proxy-fo/gaidoampbkcknofoejhnhbhbhhifgdop'; // 替换为你想要请求的 URL
const url =
  'https://chromewebstore.google.com/detail/censor-tracker-â-proxy-fo/gaidoampbkcknofoejhnhbhbhhifgdop'; // 替换为你想要请求的 URL
// const url =
//   'https://chromewebstore.google.com/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom'; // 替换为你想要请求的 URL

// https://chromewebstore.google.com/detail/adblock-%E2%80%94-block-ads-acros/gighmmpiobklfepjocnamgkkbiglidom?hl=en&gl=US
// https://chromewebstore.google.com/detail/adblock-%E2%80%93-block-ads-acros/gighmmpiobklfepjocnamgkkbiglidom

// %E6%8B%A6%E6%88%AA%E6%95%B4%E4%B8%AA%E7%BD%91%E7%BB%9C%E7%9A%84%E5%B9%BF%E5%91%8A

// 定义一个正则表达式，匹配所有非字母数字和一些特定的URL允许字符
const specialCharRegex = /[^a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+/g;

request(
  {
    url: url,
    method: 'GET',
    followRedirect: false, // 禁用自动重定向
  },
  (error, response, body) => {
    if (error) {
      console.error('请求错误:', error);
      return;
    }

    // 检查响应状态码
    if (response.statusCode >= 300 && response.statusCode < 400) {
      let location = response.headers.location; // 获取重定向地址
      const buffer = Buffer.from(location, 'binary');
      const correctedString = buffer.toString('utf8');
      console.log('[correctedString]:', correctedString);
      console.log('[encode]:', encodeURI(correctedString));

      console.log('重定向地址:', location);
    } else {
      console.log('请求成功，状态码:', response.statusCode);
    }
  }
);
