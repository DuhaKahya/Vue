<template>
  <section>
    <div class="container">
      <button v-if="roleId === '1'" type="button" class="btn btn-primary mt-3" @click="this.$router.push('/createArticle');">
        Add Article
      </button>
      <!-- Webshop Articles -->
      <div v-if="webshopArticles.length > 0">
        <h2 class="mt-3 mt-lg-5">Articles</h2>
        <div class="row mt-3">
          <ArticleListItem
            v-for="article in webshopArticles"
            :key="article.id"
            :article="article"
            class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          />
        </div>
      </div>
      <!-- Tickets Articles -->
      <div v-if="ticketsArticles.length > 0">
        <h2 class="mt-3 mt-lg-5">Tickets</h2>
        <div class="row mt-3">
          <ArticleListItem
            v-for="article in ticketsArticles"
            :key="article.id"
            :article="article"
            class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleListItem from "./ArticleListItem.vue";
import Axios from "axios";
import { useStore } from "../../stores/store";

export default {
  name: "ArticleList",
  setup() {
    const store = useStore();
    const roleId = store.getRoleId();
    return { roleId };
  },
  components: {
    ArticleListItem,
  },
  data() {
    return {
      webshopArticles: [],
      ticketsArticles: [],
    };
  },
  mounted() {
    Axios.get("http://localhost/articles")
      .then((result) => {
        result.data.forEach((article) => {
          if (article.category_id === 1) {
            this.webshopArticles.push(article);
          } else if (article.category_id === 2) {
            this.ticketsArticles.push(article);
          }
        });
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
/* Add your styles here */
</style>
