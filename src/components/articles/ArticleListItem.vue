<template>
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
      <div class="card product-card h-100">
        <div class="card-body">
          <img :src="'images/articles/' + article.image" :alt="article.title" :title="article.title" />
          <div class="float-start">
            <p>{{ article.title }}</p>
            <p>
              <small>{{ category_name }}</small>
            </p>
          </div>
          <span class="price float-end">{{ "€" + article.price }}</span>
        </div>
        <div class="card-footer">
          <button class="btn btn-warning" @click="editArticle(article.id)">
            Edit</button
          >&nbsp;&nbsp;
          <button class="btn btn-danger" @click="deleteArticle(article.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Axios from "axios";
  
  export default {
    name: "ArticleListItem",
    props: {
      article: Object,
    },
    methods: {
      deleteArticle(id) {
        Axios.delete("http://localhost/articles/" + id)
          .then((result) => {
            this.$emit("article-deleted", id);
            // refresh page
            this.$router.go();
          })
          .catch((error) => console.log(error));
      },
      editArticle(id) {
        this.$router.push("/editArticle/" + id);
      },
    },
  };
  </script>
  
  
  
  <style>
  </style>