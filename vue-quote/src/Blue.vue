<template>
    <div><h1><slot>Blue</slot></h1></div>
</template>

<script>
    export default {

    }

</script>
<style scoped>
    div {
        border: 2px dashed Blue;
        background-color: lightblue;
        min-height: 100px;
        min-width: 900px;
        margin: 25px auto;
        padding: 10px;
    }
</style>