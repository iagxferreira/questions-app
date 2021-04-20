const express = require('express')

const app = express()

const { server } = require('./config')

const router = require('./routes')

app.use(express.json())

app.use(router);

app.listen( server.port, () => console.log(`API Running on ${server.port}`))
