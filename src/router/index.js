import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

import ArticleList from '../components/articles/ArticleList.vue';
import CreateArticle from '../components/articles/CreateArticle.vue';
import EditArticle from '../components/articles/EditArticle.vue';

import Login from '../components/Login.vue';
import Register from '../components/Register.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  
  { path: '/articles', component: ArticleList },
  { path: '/createarticle', component: CreateArticle },
  { path: '/editarticle/:id', component: EditArticle, props: true  },
  
  { path: '/login', component: Login },
  { path: '/register', component: Register } ,



];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
