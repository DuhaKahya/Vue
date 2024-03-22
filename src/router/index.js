import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';

import ArticleList from '../components/articles/ArticleList.vue';
import CreateArticle from '../components/articles/CreateArticle.vue';
import EditArticle from '../components/articles/EditArticle.vue';

import Login from '../components/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/articles', component: ArticleList },
  { path: '/createarticle', component: CreateArticle },
  { path: '/editarticle/:id', component: EditArticle, props: true  },
  
  { path: '/login', component: Login }
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
