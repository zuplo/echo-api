# Demo Echo API

This is a demo API that will echo details of the request, for example - a GET on the browser will return

```
{
  "url": "https://echo.zuplo.io/v1/test?hi=mom",
  "method": "GET",
  "query": {
    "hi": "mom"
  },
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip",
    "accept-language": "en-US,en;q=0.9",
    "connection": "Keep-Alive",
    "dnt": "1",
    "host": "echo.zuplo.io",
    "priority": "u=0, i",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "cross-site",
    "sec-gpc": "1",
    "true-client-ip": "12.1.37.210",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "x-forwarded-proto": "https",
    "x-real-ip": "12.1.37.210",
    "zp-rid": "1aea7546-ad9a-4fc7-a86b-046fb6c05c72"
  }
}
```
