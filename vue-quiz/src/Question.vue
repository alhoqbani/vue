<template>
    <div class="panel panel-info">
        <div class="panel-heading text-center" @click="setQuestion">
            <h4> {{ question }}  </h4>
        </div>
        <div class="panel-body">
            <div class="row">
                <answer v-for="choice in possibleChoices"
                        :key="choice"
                        :getchoice="choice"
                        @answerWasChosen="checkAnswer">
                </answer>
            </div>
        </div>
    </div>
</template>

<script>
    import Answer from './Answer.vue';

    export default {
        components: {Answer},
        data: function () {
            return {
                question: 'Whats is 1 +2 ?',
                possibleChoices: [
                    {answer: 1, correct: false},
                    {answer: 2, correct: false},
                    {answer: 3, correct: true},
                    {answer: 4, correct: false},
                ],
            }
        },
        methods: {
            checkAnswer: function(value) {
                if(value.correct) {
                    this.$emit('correct', value)
                } else {
                    alert('Wrong !! try again')
                }
                console.log(value.correct);
            },
            setQuestion() {
                let firstO =
                    this.question = 123123213;
            }
        }
    }
</script>