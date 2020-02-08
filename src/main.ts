import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';

import App from './App.vue';
import apolloClient from './data/config';
import {
  Login,
  CreateCase,
  CreateUsecase,
  Signup,
  Import,
  Profile,
} from './pages/';

import store from './state/';
import './assets/css/variables.css';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: App, name: 'Home' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/create-case', component: CreateCase, name: 'Create Case' },
    {
      path: '/create-usecase',
      component: CreateUsecase,
      name: 'Create Usecase',
    },
    { path: '/signup', component: Signup, name: 'Signup' },
    { path: '/import', component: Import, name: 'Import' },
    { path: '/profile', component: Profile, name: 'Profile' },
  ],
});

Vue.use(VueApollo, VueRouter);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  store,
  router,
  apolloProvider,
  // router,
  render: (h) => h(CreateCase),
}).$mount('#app');
