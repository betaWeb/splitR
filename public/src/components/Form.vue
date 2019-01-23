<template>
    <div>
        <form @submit.prevent>
            <div class="form-group">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Video input" v-model="input" :disabled="loading">
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Video output" v-model="outputFileName" aria-describedby="video-output" :disabled="loading">
                </div>
                <div class="row">
                    <div class="col">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Start time" v-model="start" aria-describedby="input-start" :disabled="loading">
                            <div class="input-group-append">
                                <span class="input-group-text" id="input-start">sec.</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Duration" v-model="duration" aria-describedby="input-duration" :disabled="loading">
                            <div class="input-group-append">
                                <span class="input-group-text" id="input-duration">sec.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary btn-block" @click.prevent="split($event)" :disabled="loading">
                    <span v-if="loading">Processing...</span>
                    <span v-else>Process</span>
                </button>
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
                duration: null,
                loading: false
            }
        },
        methods: {
            async split(e) {
                if (e) e.preventDefault()
                this.loading = true
                let url = '/api/split'
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
                this.loading = false
            }
        },
        computed: {
            outputFileName() {
                if (!this.input || !this.input.length) return ''
                const parts = this.input.split('/')
                const name = parts.pop()
                return `${parts.join('/')}/output_${name}`
            }
        }
    }
</script>