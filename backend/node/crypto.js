import crypto from 'crypto'

// createhash - for password
// const hash = crypto.createHash('sha256')
// hash.update('password1234')
// console.log(hash.digest('hex'))

// randomBytes = for id's
// crypto.randomBytes(16, (err, buf) => {
//     if(err) throw err
//     console.log(buf.toString('hex'))
// })

// encrypting and decrypting data by using cypheriv

const algo = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algo, key, iv)
let encrypt = cipher.update('Hello this is milind','utf8','hex')
encrypt += cipher.final('hex')
console.log(encrypt)

const decipher = crypto.createDecipheriv(algo, key, iv)
let dencrypt = decipher.update(encrypt,'hex','utf8')
dencrypt += decipher.final('utf8')
console.log(dencrypt)