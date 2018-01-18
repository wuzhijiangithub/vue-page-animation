'use strict';

import Vue from 'vue';
import Router from 'vue-router';
import PageA from '@/page/pageA';
import PageB from '@/page/pageB';
import Home from '@/page/home';

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/pageA',
      component: PageA
    }, {
      path: '/pageB',
      component: PageB
    }
  ]
})

export default router