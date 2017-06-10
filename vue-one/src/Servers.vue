<template>
    <div class="row">
        <h2 class="text-center">Our Running Servers</h2>
        <div class="col-xs-12 col-md-6">
            <h4> Number of running servers: {{runningServers}} </h4>
            <ServerDetails v-for="server in servers"
                           :key="server.id"
                           :server="server"
                           @ServerWasTurnedOffOn="turnOffServer">

            </ServerDetails>

        </div>
        <div class="col-xs-12 col-md-6">
            <h2 class="text-center">Practice Filters And Mixins</h2>
            <fitlers-and-mixins></fitlers-and-mixins>
        </div>
    </div>
</template>
<script>
    import ServerDetails from './ServerDetails.vue';
    import FiltersAndMixins from './FiltersAndMixins.vue';
    export default {
        data: function () {
            return {
                servers: [
                    {id: 1, status: 'Normal', isRunning: true},
                    {id: 2, status: 'Normal', isRunning: true},
                    {id: 3, status: 'Bad', isRunning: true},
                    {id: 4, status: 'Good', isRunning: true},
                    {id: 5, status: 'Normal', isRunning: true},
                    {id: 6, status: 'Critical', isRunning: false},
                ],
            }
        },
        computed: {
            runningServers() {
                return this.servers.filter(function (server) {
                    return server.isRunning;
                }).length;
            }
        },
        components: {
            ServerDetails, 'fitlers-and-mixins': FiltersAndMixins,
        },
        methods: {
            turnOffServer(server) {
                console.log(server)
            }
        }
    }

</script>