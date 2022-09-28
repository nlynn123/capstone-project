const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getPlants
} = require('./controller')

app.get('/getPlants', getPlants)

app.listen(2323, () => console.log('Please turn to page 2323'))

