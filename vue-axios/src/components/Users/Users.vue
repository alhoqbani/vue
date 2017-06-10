<template>
    <div>
        <h1>Users Page</h1>


        <ul class="list-group">
            <router-link v-for="user in users" :key="user.id"
                         :to="{ name: 'showUser', param: user.id}"
                         tag="li"
                         class="list-group-item">
                <a>{{ user.name }}  </a>
            </router-link>
        </ul>

        <hr>
        <p>GO Back?</p>
        <button class="btn btn-info" @click="sendToHome"> Home Page </button>
        <hr>
        <h3>Children</h3>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                users: [
                    {id: 1, name: 'Hamoud Alhoqbani', email: 'h.alhoqbani@gmail.com'},
                    {id: 2, name: 'Weaam Abaalkhayl', email: 'weaamy@gmail.com'},
                    {id: 3, name: 'Retal Alhoqbani', email: 'alhoqbani.r@gmail.com'},
                ],
            }
        },
        methods: {
            sendToHome() {
                this.$router.push('/')
            }
        }

    }
</script>