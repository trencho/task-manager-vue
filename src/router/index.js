import { createRouter, createWebHistory } from 'vue-router';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import TaskManagerView from '../views/TaskManagerView.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/register', component: RegisterView },
  { path: '/login', component: LoginView },
  { path: '/tasks', component: TaskManagerView }
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});

export default router;
