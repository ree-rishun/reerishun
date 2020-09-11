import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile.vue')
    },
    {
      path: '/skill',
      name: 'skill',
      component: () => import('../views/skill.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/gallery.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
