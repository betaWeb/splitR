const express = require('express')
const Router = express.Router()
const Splitter = require('../src/Splitter')

Router.route('/split').post(async (req, res, next) => {
    let { input, output, start, duration } = req.body

    try {
        let splitter = new Splitter(input, output, start, duration)
        let file = await splitter.process()
        console.log(file)
    } catch (e) {
        return next(new Error('Error on splitting video'))
    }
})

module.exports = Router