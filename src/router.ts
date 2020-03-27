import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import { Login, CreateCase, Edit, Signup, Import, Profile } from './pages/';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: App, name: 'Home' },
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
