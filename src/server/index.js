import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'

const app = express()
app.use(bodyParser.json())

app.get('/api/v1/ping', (req, res) => res.send('ping'))

export default http.createServer(app)
