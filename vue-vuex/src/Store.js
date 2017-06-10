import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            {id: 1, text: 'Go to the store', done: true},
            {id: 2, text: 'Do Homework', done: true},
            {id: 3, text: 'Finish the website', done: false},
            {id: 4, text: 'Do my research', done: true},
            {id: 5, text: 'Eat my meds', done: false},
            {id: 6, text: 'Visit mom', done: true},
        ],
    },
    mutations: {
        incrementBy (state, by) {
            state.count += Number(by);
        },
        increment (state) {
            state.count ++;
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(state => state.done);
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length;
        },
        getTodoById: (state, getters) => (id) => {
            return state.todos.find(todo => todo.id === id);
        }
    },
});