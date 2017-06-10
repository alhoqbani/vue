<template>
    <div id="app">
        <div class="container">
            <div class="bar">
                <div class="qouta" :style="qoutaStyle">
                    {{ this.qoutes.length + '/10' }}
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="form-group">
                        <textarea class="form-control" rows="5" v-model="newQoute"></textarea>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-success btn-sm btn-block"
                                @click="add">
                            New Qoute
                        </button>
                    </div>

                </div>

            </div>
            <hr>
            <div class="row">
                <qoute v-for="(qoute, index) in qoutes" @click.native="deleteMe(index)">{{qoute}}</qoute>
            </div>
        </div>


    </div>
</template>

<script>
    import Red from './Red.vue';
    import Blue from './Blue.vue';
    import Green from './Green.vue';
    import Qoute from './Qoute.vue';

    export default {
        components: {
            Red, Green, Blue, Qoute
        },
        data()
        {
            return {
                selectedComponent: 'red',
                qoutes: ['Text of first Qoute'],
                newQoute: '',
            }
        },
        computed: {
            qoutaStyle() {
                return {
                    width: this.qoutes.length * 10 + '%',
                }
            }
        },
//        methods: {
//            reverseMessage: function () {
//                this.newQoute = this.newQoute.split('').reverse().join('')
//            }
//        },

        methods: {
            reverseMessage: function () {
                this.newQoute = this.newQoute.split('').reverse().join('')
            },

            add: function () {
                if (this.qoutes.length >= 10) {
                    alert('NO NO maxed 10 allowed qoutes!!')
                    return;
                }
                console.log(this.newQoute)
                this.qoutes.unshift(this.newQoute);
                this.newQoute = '';
            },
            deleteMe: function (index) {
                console.log(index);
                this.qoutes.splice(index, 1);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 80%;
        margin: 75px auto 0;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    button {
        border: 2px solid black;
        height: 50px;
        width: 150px;
        box-shadow: indianred;
        font-weight: bold;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 35px;
        color: white;

    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }

    .blue {
        background-color: blue;
    }

    .bar {
        height: 30px;
        width: 100%;
        background-color: lightgray;
        margin: 0;
        padding: 0;
    }

    .qouta {
        background-color: deepskyblue;
        padding: 5px;
        height: 100%;

    }
</style>
