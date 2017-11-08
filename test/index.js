var aliCdnUrl = require('..').getRequestUrl
var assert = require('assert')
var qs = require('query-string')
var sortObj = require('sort-object')

describe('test', function () {
    it('ali example case', function () {
        var pubArgs = {
            SignatureVersion: '1.0',
            Format: 'JSON',
            Timestamp: '2015-08-06T02:19:46Z',
            AccessKeyId: 'testid',
            SignatureMethod: 'HMAC-SHA1',
            Version: '2014-11-11',
            SignatureNonce: '9b7a44b0-3be1-11e5-8c73-08002700c460',
            AccessKeySecret: 'testsecret'
        }

        var otherArgs = {
            Action: 'DescribeCdnService'
        }

        var aliUrl = aliCdnUrl(pubArgs, otherArgs)
        var url = 'https://cdn.aliyuncs.com/?SignatureVersion=1.0&Format=JSON&Timestamp=2015-08-06T02%3A19%3A46Z&AccessKeyId=testid&SignatureMethod=HMAC-SHA1&Version=2014-11-11&Signature=KkkQOf0ymKf4yVZLggy6kYiwgFs%3D&Action=DescribeCdnService&SignatureNonce=9b7a44b0-3be1-11e5-8c73-08002700c460'
        var sortUrl = 'https://cdn.aliyuncs.com/?' + qs.stringify(sortObj(qs.parse(url.split('?').pop())))
        assert.equal(aliUrl, sortUrl)
    })
})
