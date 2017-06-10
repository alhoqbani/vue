<template>
    <div class="panel panel-info">
        <div class="panel-heading text-center">
            <h4> Good </h4>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2 text-center">
                    <h4> Again? </h4>
                    <button class="btn btn-info"  @click="nextQuestion"> Next Questoin </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        methods: {
            nextQuestion: function () {
                this.$emit('nextQuestion')
            }
        }
    }
</script>