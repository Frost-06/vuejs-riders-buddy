import Vue from 'vue';
import Router from 'vue-router';
import Public from './views/Public.vue';
import Login from './views/Login.vue';
import Registration from './views/Registration.vue';
import Profile from './views/Profile.vue';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Public',
        component: Public
      },

      {
        path: '/login',
        name: 'Login',
        component: Login
      },

      {
        path: '/registration',
        name: 'Registration',
        component: Registration
      },

      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
    ]
});