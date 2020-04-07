import Vue from 'vue';
import VueRouter from 'vue-router';
import { mapGetters } from 'vuex';

import {
    Login,
    CreateCase,
    Edit,
    Signup,
    Import,
    Profile,
    Case,
    Settings,
    List,
    Explore,
    Editor,
} from './pages/';

Vue.use(VueRouter);

let a = new Vue({
    computed: mapGetters(['isAuthenticated']),
});

const auth: boolean = true;

console.log(a, 'auth');

// @ts-ignore
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/login', component: Login, name: 'Login' },
        { path: '/signup', component: Signup, name: 'Signup' },
        {
            path: '/explore',
            component: Explore,
            name: 'Explore',
            // @ts-ignore
            redirect: !auth ? '/login' : null,
        },

        {
            path: '/',
            component: List,
            name: 'List',
            // @ts-ignore
            redirect: !auth ? '/login' : null,
        },

        {
            path: '/editor',
            component: Editor,
            name: 'Editor',
            // @ts-ignore
            redirect: !auth ? '/login' : null,
        },
        {
            path: '/create',
            component: CreateCase,
            name: 'Create',
            // @ts-ignore
            redirect: !auth ? '/login' : null,
        },
        {
            path: '/settings',
            component: Settings,
            name: 'Settings',
            // @ts-ignore
            redirect: !auth ? '/login' : null,
        },
        {
            path: '/case',
            component: Case,
            name: 'Case',
            // @ts-ignore
            redirect: !auth ? '/login' : null,
        },
        {
            path: '/create-usecase',
            component: Edit,
            name: 'Create Usecase',
            // @ts-ignore
            redirect: !auth ? '/login' : null,
        },
        {
            path: '/import',
            component: Import,
            name: 'Import',
            // @ts-ignore
            redirect: !auth ? '/login' : null,
        },
        {
            path: '/profile',
            component: Profile,
            name: 'Profile',
            // @ts-ignore
            redirect: !auth ? '/login' : null,
        },
    ],
});

export default router;
