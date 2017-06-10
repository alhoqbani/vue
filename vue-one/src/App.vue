<template>
    <div id="app" class="container">
        <animation></animation>
        <servers>
            <ServerDetails></ServerDetails>
        </servers>


    </div>
</template>

<script>
    import Servers from './Servers.vue';
    import Animation from './Animation.vue';

    export default {
        name: 'app',
        data () {
            return {
                name: 'Hamoud Alhoqbani'
            }
        },
        components: {
            Servers, Animation
        }
    }

</script>

<style>

</style>
