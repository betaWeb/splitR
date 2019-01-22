const ffmpeg = require('ffmpeg')

class Splitter {

    constructor(input, output = '/tmp', start = 0, duration = 1) {
        if (!input) throw new Error('[Err] Splitter.constructor - input file must be defined !')
        this.input = input
        this.output = output
        this.start = start
        this.duration = duration
    }

    async process() {
        try {
            const process = new ffmpeg(this.input)
            const video = await process

            video
                .setVideoStartTime(this.start)
                .setVideoDuration(this.duration)
                .save(this.output, (error, file) => {
                    if (error) throw error
                    return file
                })
        } catch (e) {
            throw e
        }
    }

}

module.exports = Splitter