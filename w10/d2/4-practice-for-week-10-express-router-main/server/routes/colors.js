const express = require('express');
const colorsRouter = express.Router()

colorsRouter.use((req,res,next) => {
    console.log('hello :)')
    next()
})

colorsRouter.get('/', (req, res) => {
    res.json("GET /colors")
})

colorsRouter.get('/:name', (req, res) => {
    res.json('GET /colors/${}')
})

module.exports = colorsRouter