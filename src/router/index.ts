import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'; // Assurez-vous que le fichier existe

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
    }
  ],
});

export default router;
