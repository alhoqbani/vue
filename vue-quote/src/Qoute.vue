<template>
    <div class="col-sm-3">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        methods: {
            deleteThis: function (event) {
                this.$emit('deleteThis', event)
            }
        }

    }

</script>
<style scoped>
    div {
        border: 2px solid grey;
        background-color: lightcyan;
        box-shadow: 10px 10px 5px #888888;
        min-height: 100px;
        margin: 25px auto;
        padding: 10px;
        cursor: pointer;

    }
</style>