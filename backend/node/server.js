import dotenv from 'dotenv'
dotenv.config()

import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

const port = process.env.PORT || 5000

// get current path
const __filename = url.fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

console.log(__dirname, __filename)

const server = http.createServer(async(req,res) => {
    // res.writeHead(200, { 'Content-Type' : 'text/html' })
    // console.log(req.url)
    // console.log(req.method)
    // res.end('<h1>Hello World</h1>')

    try {
        if(req.method === 'GET') {
            let filepath;

            if(req.url === '/') {
                filepath = path.join(__dirname,'public','index.html')
            } else if (req.url === '/about') {
                filepath = path.join(__dirname,'public','about.html')
            } else {
                throw new Error('Not Found')
            }

            const data = await fs.readFile(filepath)
            res.setHeader('Content-Type','text/html')
            res.write(data)
            res.end()

        } else {
            throw new Error('Method Not Allowed')
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type' : 'text/html' })
        res.end('<h1>Server Error</h1>')
    }
})

server.listen(port, () => {
    console.log(`server listening to PORT ${port}`)
})