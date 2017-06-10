import Vue from 'vue'
import App from './App.vue'
import VeuRouter from 'vue-router';
import {routes} from './routes.js';

Vue.use(VeuRouter);
const router = new VeuRouter({
    routes,
    mode: 'hash',
});

new Vue({
    el: '#app',
    render: h => h(App),
    router,
});
