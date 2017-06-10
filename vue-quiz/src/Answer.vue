<template>
    <div class="col-sm-6">
        <div class="answer" @click="sendAnswer">
            {{ answer.answer }}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['getchoice'],
        data: function () {
            return {
                answer: this.getchoice,
            };
        },
        methods: {
            sendAnswer: function () {
                this.$emit('answerWasChosen', this.answer)
            }
        }
    }
</script>

<style>
    .answer {
        background-color: #c4f7ff;
        min-height: 100px;
        min-width: 150px;
        margin: 30px 30px;
        padding: 10px;
        text-align: center;
        cursor: pointer;
    }
    .answer:hover {
        transform: scale(1.1);
    }
</style>