<template>
    <div class="row">
        <div class="col-sm-8 text-center">
            <h1> Animation</h1>
            <button class="btn btn-primary" @click=" show = !show "> Show Alert </button>
            <br><br>
            <transition name="fade">
                <div class="alert alert-info" v-show="show"> I'm Alert </div>
            </transition>
            <transition name="slide">
                <div class="alert alert-info" v-show="show"> I'm Alert </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
            }
        }

    }
</script>

<style>
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

    .slide-enter {
        animation: slide-in 1s;
    }

    .slide-enter-active {
    }

    .slide-leave {
        animation: slide-out 1s;
    }

    .slide-leave-active {

    }

    @keyframes slide-in {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }
</style>