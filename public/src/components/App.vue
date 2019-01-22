<template>
    <div id="app">
        <div class="container">
            <h1 class="text-center">SplitR - Video splitter</h1>
            <div class="row">
                <div class="col-md-12">
                    <Form/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Form from './Form.vue';

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {Form},
    }
</script>
<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>