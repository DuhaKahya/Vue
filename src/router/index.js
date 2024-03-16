import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';

import ProductList from '../components/products/ProductList.vue';
import CreateProduct from '../components/products/CreateProduct.vue';
import EditProduct from '../components/products/EditProduct.vue';

import ArticleList from '../components/articles/ArticleList.vue';
import createArticle from '../components/articles/createArticle.vue';
import EditArticle from '../components/articles/EditArticle.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: ProductList },
  { path: '/createproduct', component: CreateProduct },
  { path: '/editproduct/:id', component: EditProduct, props: true  },
  { path: '/articles', component: ArticleList },
  { path: '/createArticle', component: createArticle },
  { path: '/editArticle/:id', component: EditArticle, props: true  }
 
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
