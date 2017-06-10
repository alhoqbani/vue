<template>
    <div id="app">
        <div class="container">
            <h1> Welcome This from App.vue </h1>

            <app-header></app-header>
            <router-view name="Header"></router-view>
            <router-view name="Home"></router-view>
            <router-view></router-view>


        </div>
    </div>

</template>

<script>
    import Header from './components/Header.vue';

    export default {
        name: 'app',
        components: {AppHeader: Header},
        data () {
            return {}
        },
        methods: {},
    }
</script>