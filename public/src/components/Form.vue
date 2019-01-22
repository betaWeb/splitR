<template>
    <div>
        <form @submit.prevent>
            <div class="form-group">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Video input" v-model="input">
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Video output" v-model="outputFileName" aria-describedby="video-output">
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Split start time" v-model="start" aria-describedby="input-start">
                    <div class="input-group-append">
                        <span class="input-group-text" id="input-start">sec.</span>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Split duration" v-model="duration" aria-describedby="input-duration">
                    <div class="input-group-append">
                        <span class="input-group-text" id="input-duration">sec.</span>
                    </div>
                </div>
                <button class="btn btn-primary" @click.prevent="split($event)">Process</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'App',
        data() {
            return {
                input: null,
                output: null,
                start: null,
                duration: null
            }
        },
        methods: {
            async split(e) {
                if (e) e.preventDefault();
                let url = 'http://localhost:4000/api/split';
                let param = {
                    input: this.input,
                    output: this.outputFileName || null,
                    start: this.start || null,
                    duration: this.duration || null
                }
                try {
                    const response = await axios.post(url, param)
                    console.log(response)
                } catch (err) {
                    console.error(err)
                }
            }
        },
        computed: {
            outputFileName() {
                if (!this.input || !this.input.length) return ''
                const parts = this.input.split('/')
                const name = parts.pop()
                return `${parts.join('/')}/output_${name}`
            }
            /*inputExt() {
                if (!this.input) return null
                let parts = this.input.split('.')
                return `.${parts[parts.length - 1]}`
            }*/
        }
    }
</script>