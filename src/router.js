const { createRouter, createWebHashHistory } = VueRouter;

const routes = [
  { 
    path: '/', 
    component: HomePage,
    meta: { title: 'Главная' }
  },
  { 
    path: '/about', 
    component: AboutPage,
    meta: { title: 'О нас' }
  },
  { 
    path: '/contact', 
    component: ContactPage,
    meta: { title: 'Контакты' }
  },
  { 
    path: '/user/:id', 
    component: UserProfile,
    meta: { title: 'Профиль пользователя' },
    props: true
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Vue.js SPA';
  next();
});