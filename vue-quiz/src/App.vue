<template>
    <div id="app">
        <div class="well">
            <h1 class="text-center text-danger">Answer The Questions</h1>
        </div>

        <div class="col-sm-8 col-sm-offset-2">
            <transition name="flip" mode="out-in">
                <component :is="selectedComponent"
                           @correct="selectedComponent = 'Result' "
                           @nextQuestion="selectedComponent = 'Question'"></component>

            </transition>
        </div>
    </div>

</template>

<script>
    import Question from './Question.vue';
    import Result from './Result.vue';

    export default {
        components: {Question, Result},
        data () {
            return {
                selectedComponent: 'Question',
            }
        },
        methods: {},
    }
</script>

<style>
    .flip-enter {

    }

    .flip-enter-active {
        animation: flip-in 0.5s ease-out forwards;
    }

    .flip-leave {

    }

    .flip-leave-active {
        animation: flip-out 0.5s ease-out forwards;
    }

    @keyframes flip-in {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes flip-out {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {

    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }


</style>
