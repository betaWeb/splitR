const ffmpeg = require('ffmpeg')

class Splitter {

    constructor(input, output = '/tmp', start = 0, duration = 1) {
        if (!input) throw new Error('[Err] Splitter.constructor - input file must be defined !')
        this.input = input
        this.output = output
        this.start = start
        this.duration = duration
    }

    process() {
        return new Promise((resolve, reject) => {
            try {
                const process = new ffmpeg(this.input)
                process.then(video => {
                    video
                        .setVideoStartTime(this.start)
                        .setVideoDuration(this.duration)
                        .save(this.output, (error, file) => {
                            if (error) reject(error)
                            else resolve(file)
                        })
                }, reject)
            } catch (e) {
                reject(e)
            }
        })
    }

}

module.exports = Splitter