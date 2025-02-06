import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MailView from '@/views/MailView.vue';
import PhoneView from '@/views/PhoneView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/histoire',
    name: 'Mon histoire',
    component: () => import('../views/MyHistoryView.vue'),
  },
  {
    path: '/hub',
    name: 'Hub',
    beforeEnter() {
      window.location.href = 'https://linktr.ee/ericdoisy';
      return false;
    },
  },
  {
    path: '/creations',
    name: 'Mes créations',
    component: () => import('../views/MyCreationsView.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
  },
  {
    path: '/mail',
    name: 'MailView',
    component: MailView,
  },
  {
    path: '/phone',
    name: 'PhoneView',
    component: PhoneView,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;
