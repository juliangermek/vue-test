import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/list",
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/UserList')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../components/CreateUser')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/UserEdit')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
