import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { Login, CreateCase, Edit, Signup, Import, Profile } from './pages/';
import Case from "./pages/app/casesList.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        { path: '/', component: Case, name: 'Case' },
        { path: '/login', component: Login, name: 'Login' },
        { path: '/create-case', component: CreateCase, name: 'Create Case' },
        {
            path: '/create-usecase',
            component: Edit,
            name: 'Create Usecase',
        },
        { path: '/signup', component: Signup, name: 'Signup' },
        { path: '/import', component: Import, name: 'Import' },
        { path: '/profile', component: Profile, name: 'Profile' },
    ],
});

export default router
