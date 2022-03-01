# Demo Echo API

This is a demo API that will echo details of the request, for example - a GET on the browser will return

```
{
  "url": "http://echo.zuplo.io/v1/test?hi=mom",
  "method": "GET",
  "query": {
    "hi": "mom"
  },
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-encoding": "gzip",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "cdn-loop": "cloudflare",
    "cf-connecting-ip": "24.18.54.121",
    "cf-ipcountry": "US",
    "cf-ray": "6e4dfd9bbb806828-SEA",
    "cf-visitor": "{\"scheme\":\"https\"}",
    "forwarded": "for=24.18.54.121;proto=https, for=10.0.0.59",
    "host": "echo-api-main-19ee1e8.d2.zuplo.dev",
    "k-proxy-request": "activator",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36",
    "x-forwarded-for": "24.18.54.121, 10.0.0.59, 10.0.2.15",
    "x-forwarded-proto": "https",
    "x-request-id": "9540e149-cf35-4874-97e9-80ec4228b219"
  }
}
```
