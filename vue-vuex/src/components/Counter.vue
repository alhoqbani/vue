<template>
    <div>
        <input type="number"v-model="by">
        <p>Count from count: {{ count }}</p>
        <button @click="incrementBy(by)">Increment By Number</button>
        <button @click="increment">Just Increment</button>
        <p>countAlias: {{ countAlias }}</p>
        <p>localCount: {{ localCount }}</p>
        <p>localCountWithSymbol: {{ localCountWithSymbol }}</p>
        <p>localComputed: {{ localComputed }}</p>
        <hr>
        <h1>Todos</h1>
        <ul>
            <li v-for="todo in todos" v-text="todo.text"></li>
        </ul>
        <p>Only Done</p>
        <ul>
            <li v-for="todo in doneTodos" v-text="todo.text"></li>
        </ul>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {mapGetters} from 'vuex'
    import {mapMutations} from 'vuex'
    export default {
        data: function () {
            return {
                localCount: 100,
                by: 1,
            }
        },
        methods: {
            incrementBy: function (by) {
                this.$store.commit('incrementBy', by);
            },
            ...mapMutations(['increment']),
        },
        computed: {
            localComputed: function () {
                return "I'm local";
            },
            doneTodos: function () {
                return this.$store.getters.doneTodos;
            },
            ...mapState({
                count: (state) => state.count,
                countAlias: 'count',
                todos: 'todos',
                localCountWithSymbol: function (state, getter) {
                    return this.localCount + ' % ' + getter.doneTodosCount;
                },
                ...mapGetters([
                    'doneTodosCount',
//                    'anotherGetter',
                    // ...
                ])
            }),
        }
    }
</script>

