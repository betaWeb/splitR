<template>
    <div id="app">
        <div class="container">
            <h1 class="header text-center">
                <span class="title">Split<strong>R</strong></span>
                <img src="img/film-editing.png" class="logo img-fluid" alt="SplitR - Video splitter">
            </h1>
            <div class="row">
                <div class="col-md-8 offset-md-2">
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
    .header {
        margin: 2rem 0 2rem 1rem;
    }
    .title {
        vertical-align: middle;
    }
    .logo {
        margin-left: .334rem;
        height: 80px;
        vertical-align: middle;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>