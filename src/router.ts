import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import htp from './views/htp.vue';
import about from './views/About.vue';
//NOTE 必写的
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }, {
      path: '/ljssb',
      name: 'htp',
      component: htp,
    },
  ],
});
