# ali-cdn-url [![Build Status](https://travis-ci.org/klouskingsley/ali-cdn-url.svg?branch=master)](https://travis-ci.org/klouskingsley/ali-cdn-url)

> 获取阿里云cdn请求地址 [阿里云cdn调用方式](https://help.aliyun.com/document_detail/27149.html?spm=5176.doc27148.6.615.NxLUYf)


## Install

```
$ npm install ali-cdn-url
```

## usage

```js
const getRequestUrl = require('ali-cdn-url')
const pubArgs = {
    SignatureVersion: '1.0',
    Format: 'JSON',
    Timestamp: '2015-08-06T02:19:46Z',
    AccessKeyId: 'testid',
    SignatureMethod: 'HMAC-SHA1',
    Version: '2014-11-11',
    SignatureNonce: '9b7a44b0-3be1-11e5-8c73-08002700c460',
    AccessKeySecret: 'testsecret'
}

const otherArgs = {
    Action: 'DescribeCdnService'
}

const url = getRequestUrl(pubArgs, otherArgs)
// 得到cdn调用地址
```

## api

#### .getRequestUrl(*pubArgs*, *otherArgs*)

##### pubArgs

Type: `Object`

Default: `none`

调用cdn时的公共参数，包括`AccessKeyId`和`AccessKeySecret`当参数

##### otherArgs

Type: `Object`

Default: `none`

调用cdn时不同接口特有的参数，其中`Action`是必须的

## License

MIT © [klouskingsley](http://blog.harrytse.com)
