var qs = require('query-string')
var sortObj = require('sort-object')
var crypto = require('crypto')

module.exports = getRequestUrl
module.exports.getRequestUrl = getRequestUrl

function getRequestUrl (pubArgs, otherArgs) {
    pubArgs = (typeof pubArgs === 'object' && pubArgs) ? pubArgs : {}
    otherArgs = (typeof otherArgs === 'object' && otherArgs) ? otherArgs : {}

    var Format = pubArgs.Format || 'XML'
    var Version = pubArgs.Version || '2014-11-11'
    var AccessKeyId = pubArgs.AccessKeyId
    var SignatureMethod = pubArgs.SignatureMethod || 'HMAC-SHA1'
    var Timestamp = pubArgs.Timestamp || (new Date).toISOString()
    var SignatureVersion = pubArgs.SignatureVersion || '1.0'
    var SignatureNonce = pubArgs.SignatureNonce || Math.random()
    var AccessKeySecret = pubArgs.AccessKeySecret

    var Method = 'GET'
    var signatureMethod = 'sha1'

    if (!AccessKeyId || !AccessKeySecret) {
        throw TypeError('pubArgs.AccessKeyId and pubArgs.AccessKeySecret is required')
    }

    if (!otherArgs.Action) {
        throw TypeError('otherArgs.Action is required')
    }

    var pubQuerys = {
        Format,
        Version,
        AccessKeyId,
        SignatureMethod,
        Timestamp,
        SignatureVersion,
        SignatureNonce
    }

    var querys = Object.assign({}, pubQuerys, otherArgs)

    var signa = qs.stringify(sortObj(querys), {encode: true})
    var signb = Method + '&' + encodeURIComponent('/') + '&' + encodeURIComponent(signa)
    var signc = crypto.createHmac(signatureMethod, AccessKeySecret + '&').update(signb).digest('base64')
    querys.Signature = signc
    
    var url = 'https://cdn.aliyuncs.com/?' + qs.stringify(querys)

    return url
}
