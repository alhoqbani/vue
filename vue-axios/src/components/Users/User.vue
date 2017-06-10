<template>
    <div>
        <h1>Single User Page</h1>
        <ul class="nav nav-tabs">
            <router-link to="/user/1" tag="li" active-class="active"><a>1</a></router-link>
            <router-link to="/user/2" tag="li" active-class="active"><a>2</a></router-link>
            <router-link to="/user/3" tag="li" active-class="active"><a>3</a></router-link>
            <router-link to="/user/4" tag="li" active-class="active"><a>4</a></router-link>
        </ul>


        <hr>

        {{ id }}

    </div>
</template>

<script>
    export default {
        data()  {
            return {
                id: this.$route.params.id
            }
        },
//        watch: {
//            '$route': function (to, from) {
//                console.log(from)
//                this.id = to.params.id
//            }
//        },
        beforeRouteUpdate (to, from, next) {
            this.id = to.params.id;
            next();
        },

        methods: {
            sendToHome() {
                this.$router.push('/')
            }
        }

    }
</script>