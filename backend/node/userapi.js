console.log('User api server started')

import dotenv from 'dotenv'
dotenv.config()

import http from 'http'
const port = process.env.PORT

const data = [
    {id: 1, name: 'Milind'},
    {id: 2, name : 'Raj'},
    {id: 3, name : 'Soumili'}
]

// logger middleware

const logger = (req, res, next) => {
    console.log(`${req.method}, ${req.url}`)
    next()
}


const server = http.createServer((req,res) => {
    logger(req, res, () => {
    res.setHeader('Content-Type','application/json')
    
    if(req.url === '/api/user' && req.method === 'GET') {
        res.write(JSON.stringify(data))
    } 
    else if (req.url.match(/\/api\/user\/([0-9]+)/) && req.method === 'GET' ) 
    {
        const id = req.url.split('/')[3]
        const user = data.find((user) => user.id === parseInt(id))
        if(user) {
            res.write(JSON.stringify(user))
        } 
        else {
        res.statusCode = 404
        res.write(JSON.stringify({message : 'User Not Found'}))
        }
    }
    else if (req.url === '/api/user' && req.method === 'POST') {
        let body = ''

        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        
        // Listen for data
        req.on('end', () => {
            const newUser = JSON.parse(body)
            data.push(newUser)
            res.statusCode = 201
            res.write(JSON.stringify(newUser))
            res.end()
        })
    }
    else {
        res.statusCode = 500
        res.write(JSON.stringify({message : 'Route Not Found'}))
    }
    res.end()
    })
});

server.listen(port, () => {
    console.log(`server listening to PORT ${port}`)
})
