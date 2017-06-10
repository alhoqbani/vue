import Users from './components/Users/Users.vue';
import User from './components/Users/User.vue';
import Home from './components/Home.vue';
import NoPage from './components/NoPage.vue';
import AddUser from './components/Users/AddUser.vue';

export const routes = [
    {path: '*', component: NoPage},
    {
        path: '', components: {
        Home
    }, name: 'home'
    },
    {
        path: '/users', components: {
            default: Users,
    }, children: [
        {path: 'add', component: AddUser},
        {path: ':id', component: User, name: 'showUser'},
    ]
    },
];