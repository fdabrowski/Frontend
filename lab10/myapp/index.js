const express = require('express')
const app = express()

var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.post('/person', (req, res) => res.send('person'))