import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Assurez-vous que le fichier existe
import MailView from '@/views/MailView.vue';
import PhoneView from '@/views/PhoneView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'), // Si `HomeView` n'est pas importé en haut
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
           // Redirection vers un site externe
           window.location.href = 'https://linktr.ee/ericdoisy';
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
  { path: '/mail',
    name: 'MailView',
    component: MailView
  },
  { path: '/phone',
    name: 'PhoneView',
    component: PhoneView
    },
  ],

 scrollBehavior(to) {
    // Si une ancre (#) est présente dans l'URL, scroll vers l'élément correspondant
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        return { el: to.hash, behavior: "smooth" };
      }
    }
    // Scroll en haut si aucune ancre
    return { top: 0 };
  },
});

export default router;
