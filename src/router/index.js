import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import TaskManagerView from '../views/TaskManagerView.vue';

const routes = [
  { path: '/', name: 'Login', redirect: '/login' },
  { path: '/register', name: 'Register', component: RegisterView, meta: { requiresGuest: true } },
  { path: '/login', name: 'Login', component: LoginView, meta: { requiresGuest: true } },
  { path: '/tasks', name: 'Tasks', component: TaskManagerView, meta: { requiresAuth: true } }
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.matched.some(record => record.meta.requiresGuest) && isAuthenticated) {
    next({ name: 'Tasks' });
  } else {
    next();
  }
});

export default router;
