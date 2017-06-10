import Vue from 'vue'
import App from './App.vue'


Vue.filter('flipIt', function (value) {
    return value.split('').reverse().join("");
});

Vue.filter('howMany', function (value) {
    return value + '(' + value.length + ')';
});

Vue.mixin({
    created: function () {
        var myOption = this.$options.myOption
        if (myOption) {
            console.log(myOption)
        }
    },
    methods: {
        putInQoutes: function (value) {
            return '(' + value + ')';
        }
    },
    data: function () {
        return {
            author: 'Mr. Hamoud Alhoqbani',
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App),
    myOption: 'me',
});

new Vue({
    el: '#body',

});
