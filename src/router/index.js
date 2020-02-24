import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home';
import Login from '../views/Login';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
});