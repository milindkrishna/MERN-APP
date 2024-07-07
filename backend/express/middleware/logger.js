const color = require('colors')

const logger = (req, res, next) => {
    const color = {
        GET : 'green',
        POST : 'blue',
        PUT: 'yellow',
        DELETE: 'red'
    }

    const methodColor = color[req.method] || white
    console.log(`
    ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    [methodColor])
    next()
}

module.exports = logger