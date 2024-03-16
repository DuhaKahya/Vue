<template>
    <section>
      <div class="container">
        <h2 class="mt-3 mt-lg-5">Articles</h2>
          <button type="button" class="btn btn-primary mt-3" @click="this.$router.push('/createarticle');">
              Add Article
            </button>
        <div class="row mt-3">
            <!-- show the articles -->
            <ArticleListItem
              v-for="article in articles"
              :key="article.id"
              :article="article"
              :category="article.category_id"
            />
         </div>
      </div>
    </section>
  </template>
  
  <script>
  import ArticleListItem from "./ArticleListItem.vue";
  import Axios from "axios";
  
  export default {
    name: "ArticleList",
    components: {
      ArticleListItem,
    },
    data() {
      return {
        articles: [],
      };
    },
    mounted(){
      Axios.get("http://localhost/articles")
      .then(result => console.log(this.articles = result.data))
      .catch(error => console.log(error));
    }
  
  };
  </script>
  
  <style>
  </style>