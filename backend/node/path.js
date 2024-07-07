import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


console.log(path.basename(__filename))

console.log(path.dirname(__filename))

console.log(path.extname(__filename))

console.log(path.parse(__filename))

// resolve and join is same

// const data = path.join(__dirname, 'dir1', 'dir2', 'path.js')
// console.log(data)

const data = path.resolve(__dirname, 'dir1', 'dir2', 'path.js')
console.log(data)