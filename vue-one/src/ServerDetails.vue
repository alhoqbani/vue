<template>
    <div class="server">
        <p>{{ currentServer.status }}</p>
        <button class="btn"
                :class="[currentServer.isRunning ? 'btn-success' : 'btn-danger']"
                @click="turnOffOn"
                v-text="currentServer.isRunning ? 'Turn Off' : 'Turn on'"></button>
    </div>

</template>
<script>
    export default {
        props: ['server'],
        data: function () {
            return {
                currentServer: this.server,
                classObject: {}

            }
        },
        methods: {
            turnOffOn() {
                this.currentServer.isRunning ? this.currentServer.isRunning = false : this.currentServer.isRunning = true;
                this.$emit('ServerWasTurnedOffOn', this.currentServer)
            }
        }


    }
</script>

<style>
    .server {
        border: 1px solid red;
        margin: 10px;
        padding: 10px;
        font-size: 20px;
        display: flex;
        justify-content: space-between;

    }
</style>