<template>


  <div v-if="article.category_id === 1" class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
    <div class="card product-card h-100">
      <div class="card-body">
        <img :src="'images/articles/' + article.image" :alt="article.title" :title="article.title" />
        <div class="float-start">
          <p>{{ article.title }}</p>
          <p>
            <small>{{ article.category_id }}</small>
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



  <div v-if="article.category_id === 2" class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
    <div class="card product-card h-100">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <img :src="'images/teams/' + article.image.split(' - ')[0]" :alt="article.title.split(' - ')[0]" :title="article.title.split(' - ')[0]" />
          </div>
          <div class="col-6">
            <img :src="'images/teams/' + article.image.split(' - ')[1]" :alt="article.title.split(' - ')[1]" :title="article.title.split(' - ')[1]" />
          </div>
        </div>
        <div class="float-start">
          <p>{{ article.title.split(' - ')[0] }} - {{ article.title.split(' - ')[1] }}</p>
          <p>
            <small>{{ article.description }}</small>
          </p>
        </div>
        <span class="price float-end">{{ "€" + article.price }}</span>
      </div>
      <div class="card-footer">
        <button class="btn btn-warning" @click="editArticle(article.id)">
          Edit
        </button>
        <button class="btn btn-danger mx-3" @click="deleteArticle(article.id)">
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