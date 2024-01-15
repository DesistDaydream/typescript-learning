import { Aes } from "aes"
import { Cbc, Padding } from "block-modes"

const te = new TextEncoder()

const key = te.encode("SuperDuperSecret")
const data = te.encode("DataToBeEncrypted")
const iv = new Uint8Array(16)

// Ciphers have an internal state, you should therefore create
// separate ciphers for encryption and decryption
const cipher = new Cbc(Aes, key, iv, Padding.PKCS7)
const decipher = new Cbc(Aes, key, iv, Padding.PKCS7)

const encrypted = cipher.encrypt(data)
const decrypted = decipher.decrypt(encrypted)

console.log(encrypted)
console.log(decrypted)
