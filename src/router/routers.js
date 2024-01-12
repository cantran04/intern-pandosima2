// src/router.js
import { createRouter, createWebHistory } from 'vue-router';


import Home from '../view/Home.vue';
import About from '../view/About.vue';
import User from '../view/User.vue';
import NotFound from '../view/NotFound.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/about', component: About, name: 'about'},
  { path: '/users/:id', component: User, name: 'user' },
  { path: '/:catchAll(.*)*', component: NotFound }, // 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,

});

export default router;
