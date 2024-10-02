import { createRouter, createWebHistory } from 'vue-router';
import { getAccessToken } from '@/utils/auth';
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import TaskManagerView from '@/views/TaskManagerView.vue';

const routes = [
  { path: '/', name: 'Default', redirect: '/login' },
  { path: '/signup', name: 'Register', component: RegisterView, meta: { requiresGuest: true } },
  { path: '/login', name: 'Login', component: LoginView, meta: { requiresGuest: true } },
  { path: '/tasks', name: 'Tasks', component: TaskManagerView, meta: { requiresAuth: true } }
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!getAccessToken();

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.matched.some(record => record.meta.requiresGuest) && isAuthenticated) {
    next({ name: 'Tasks' });
  } else {
    next();
  }
});

export default router;
