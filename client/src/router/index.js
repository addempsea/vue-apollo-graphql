import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Transaction.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/transaction',
    name: 'Transaction',
    component: Home,
  },
  {
    path: '/transaction/:id',
    name: 'Single Transaction',
    component: () => import('../views/SingleTransaction.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
