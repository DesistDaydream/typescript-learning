// modified based on [node.js AES/ECB/PKCS5Padding 与其他语言的加密解密通用](http://yijiebuyi.com/blog/13e2ae33082ac12ba4946b033be04bb5.html)
import crypto from "crypto"

class Crypto {
  /**
   * 加解密必须使用同一套 key 和 iv
   * @param  {String} algorithm 算法名称，比如 `aes-128-ecb`
   * @param  {String} key       秘钥
   * @param  {String} iv        initialization vector，默认空字符串
   */
  constructor(algorithm: string, key, iv = "") {
    this.algorithm = algorithm
    this.key = key
    this.iv = iv
  }

  /**
   * 加密算法
   *
   * @param  {String} message         明文
   * @param  {String} messageEncoding 明文编码
   * @param  {String} cipherEncoding  密文编码
   *
   * @return {String} encrypted       密文
   */
  encrypt(message, messageEncoding = "utf8", cipherEncoding = "base64") {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv)
    cipher.setAutoPadding(true)

    let encrypted = cipher.update(message, messageEncoding, cipherEncoding)
    encrypted += cipher.final(cipherEncoding)

    return encrypted
  }

  /**
   * 解密算法
   *
   * @param  {String} encrypted       密文
   * @param  {String} cipherEncoding  密文编码
   * @param  {String} messageEncoding 明文编码
   *
   * @return {String} decrypted       明文
   */
  decrypt(encrypted, cipherEncoding = "base64", messageEncoding = "utf8") {
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv)
    decipher.setAutoPadding(true)

    let decrypted = decipher.update(encrypted, cipherEncoding, messageEncoding)
    decrypted += decipher.final(messageEncoding)

    return decrypted
  }
}

const encryptWithPublicKey = function (toEncrypt: string) {
  var publicKey = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBg
QCkLMhnY5tb9T0KMqq4It/yK7Mv
4jQt39RyrH9yqPcAg0lsFWKTXJdT0/c0P+yX
R1aF2xLOZhl3NA8eZWEF2YoCBJg6
h6QJ6dlMak8r2LDC89QJfq1ZlcA6qfiHzZk
fUbtGqXj3RbzfvKyGUdQHvXp9P/1C
ECZfetRusF4IncOklwIDAQAB
-----END PUBLIC KEY-----`

  var buffer = Buffer.from(toEncrypt, "utf8")
  var encrypted = crypto.publicEncrypt(
    { key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING },
    buffer,
  )
  return encrypted.toString("base64")
}

let key = "QCBY{Ru4~Y7}c,7H"
// let key = "1234567890123456"
let encryptedKey = encryptWithPublicKey(key)

let aes = new Crypto("aes-128-ecb", key)
let msg = `{"keyword":"X","page":"1","game_key":"dgm","game_sub_key":"sc"}`
// let msg = `{"game_key":"dgm","game_sub_key":"sc"}`
let dataEncrypted = aes.encrypt(msg)

console.log(encryptedKey)
console.log("\n")
console.log(dataEncrypted)

let data = `111`

let d = aes.decrypt(data)
console.log(d)
