import Vue from 'vue';
import Router from 'vue-router';
import Public from './views/Public.vue';
import Login from './views/Login.vue';
import Registration from './views/Registration.vue';
import Dashboard from './views/Dashboard.vue';
import ProfileUser from './views/ProfileUser.vue';
import EditProfile from './views/EditProfile.vue';

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
        name: 'ProfileUser',
        component: ProfileUser
      },

      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },

      {
        path: '/editprofile',
        name: 'EditProfile',
        component: EditProfile
      },
    ]
});