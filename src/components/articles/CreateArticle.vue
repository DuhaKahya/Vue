<template>
    <section>
      <div class="container">
        <form ref="form" method="POST">
          <h2 class="mt-3 mt-lg-5">Create a article</h2>
          <h5 class="mb-4"></h5>
  
          <div class="input-group mb-3">
            <span class="input-group-text">Title</span>
            <input type="text" class="form-control" v-model="article.title" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">Description</span>
            <textarea
              class="form-control"
              v-model="article.description"
            ></textarea>
          </div>
  
          <div class="input-group mb-3">
            <span class="input-group-text">Price</span>
            <input type="number" class="form-control" v-model="article.price" />
          </div>
  
  
          <div class="input-group mb-3">
            <span class="input-group-text">Image URL</span>
            <input type="text" class="form-control" v-model="article.image" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">Stock</span>
            <input type="text" class="form-control" v-model="article.stock" />
          </div>

  
          <div class="input-group mb-3">
            <span class="input-group-text">Category</span>
            <select class="form-select" v-model="article.category_id">
              <option value="0" selected>Choose...</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
                >{{ category.name }}</option>
            </select>
          </div>
  
          <div class="input-group mt-4">
            <button type="button" class="btn btn-primary" @click="createArticle">Create product</button>
            <button
              type="button"
              class="btn btn-danger"
              @click="this.$router.push('/articles')"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  import Axios from "axios";
  
  export default {
    name: "CreateArticle",
    data() {
      return {
        product: {
            title: "",
            description: "",
            price: "",
            image: "",
            stock: "",
            category_id: 0,
        },
        categories: [],
      };
    },
    mounted(){
      Axios.get("http://localhost/categories")
      .then(result => this.categories = result.data)
      .catch(error => console.log(error));
    },
    methods: {
      createProduct() {
        Axios.post("http://localhost/articles", this.article)
        .then(result => { this.$router.push("/articles") })
        .catch(error => console.log(error));
        
      },
    },
  };
  </script>
  
  <style>
  </style>