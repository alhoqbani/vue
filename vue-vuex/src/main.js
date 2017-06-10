import Vue from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue';
import {store} from './Store'

console.log(store.state.count);
console.log(store.getters.doneTodos);
console.log(store.getters.getTodoById(1).text );

new Vue({
    el: '#app',
    components: {
        Counter
    },
    store,
    template: `
<div>
<h1> Vuex  </h1>
<p>Count is: </p> <hr> <Counter></Counter>
</div>
`,
});
