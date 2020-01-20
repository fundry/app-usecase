import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';

import App from './App.vue';
import apolloClient from './data/config';
import { Home, Login, Create, App as Console, Signup } from './pages/';

// const routes = [
//   { path: '/', component: Home, name: "Home" },
//   { path: '/login', component: Login, name: "Login" },
//   { path: '/create', component: Create, name: "Create"  },
// ];

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/create', component: Create, name: 'Create' },
    { path: '/signup', component: Signup, name: 'Signup' },
  ],
});

Vue.use(VueApollo, VueRouter);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  apolloProvider,
  // router,
  render: (h) => h(Console),
}).$mount('#app');
