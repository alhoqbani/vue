<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2">
                    <input class="form-control" type="text" v-model="user.name" placeholder="Name"><br>
                    <p>{{user.name}}</p><br>
                    <input class="form-control" type="text" v-model="user.email" placeholder="Email"><br>
                    <p>{{user.email}}</p><br>

                    <button class="btn btn-default" @click="onSubmit">Submit</button>

                    <hr>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="user in users">{{ user.name + ' - '  + user.email}}</li>

                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        name: 'app',
        data () {
            return {
                user: {
                    name: '',
                    email: '',
                },
                users: [],
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            onSubmit: function () {
                axois.post('https://my-firsst-firebase-b9105.firebaseio.com/test.json', this.user)
                    .then(response => {
                        console.log(response)
                    }).catch(e => {
                    console.log(e)
                });
            },
            getUsers: function () {
                let vm = this;
                axois.get('https://my-first-firebase-b9105.firebaseio.com/test.json', this.user)
                    .then(response => {
                        console.log(response.data)
                        for(var user in response.data)
                        {
                            this.users.push(user);
                        }
                    }).catch(e => {
                    console.log(e)
                });
            },
        },
        mounted: function () {
            this.getUsers();
        }
    }
</script>