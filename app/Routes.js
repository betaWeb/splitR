const express = require('express')
const Router = express.Router()
const Splitter = require('../src/Splitter')

Router.route('/split').post(async (req, res, next) => {
    let {input, output, start, duration} = req.body

    try {
        let splitter = new Splitter(input, output, start, duration)
        const file = await splitter.process()
        res.json({file})
    } catch (e) {
        next(`Error on splitting video - ${e.msg} (code ${e.code})`)
    }
})

module.exports = Router