console.log('Starting the ExpressJS Server')

const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const path = require('path')
const user = require('./routes/user')
const logger = require('./middleware/logger')

const app = express()

const PORT = process.env.PORT || 7000

// ejs configuration
app.set('view engine', 'ejs')
app.set('views', 'views') // - folder name 

// body parser middleware (post)
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// logger middleware
app.use(logger)

// console.log(__dirname, __filename)

// routes
app.use('/api/user', user)

app.get('/', (req, res) => {
    res.render('index',{
        title: 'Welcome ejs',
        message: 'Hi this is milind from ejs',
        people: ['Milind','Raj','Soumili']
    })
})

// app.get('/about', (req, res) => {
    // res.send({message : 'Hi This is about server'}) 
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
// })

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`Server listening to PORT ${PORT}`)
});