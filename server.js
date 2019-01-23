'use strict'

let express = require('express')
let path = require('path')
let app = express()
let bodyParser = require('body-parser')
let cfg = require('./app/Config')
let Routes = require('./app/Routes')
let port = cfg.APP_PORT || 4000

app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api', Routes)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:${port}`)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    next()
})

app.get('/', (req, res) => res.sendfile('./public/index.html'))

app.listen(port, _ => console.log(`App listening on port http://localhost:${port}`))