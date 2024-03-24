<template>
    <section>
      <div class="container">
        <form ref="form" method="POST">
          <h2 class="mt-3 mt-lg-5">Edit a article</h2>
          <h5 class="mb-4"></h5>
  
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Title</span>
            <input type="text" class="form-control" v-model="article.title" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Description</span>
            <textarea
              class="form-control"
              v-model="article.description"
            ></textarea>
          </div>
  
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Price</span>
            <input type="number" class="form-control" v-model="article.price" />
          </div>
  
  
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Image URL</span>
            <input type="text" class="form-control" v-model="article.image" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Stock</span>
            <input type="text" class="form-control" v-model="article.stock" />
          </div>

  
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Category</span>
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
            <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
            
            <button type="button" class="btn btn-danger mx-3" @click="cancelEditing">
                Cancel
            </button>

          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
import Axios from '../axios-auth';
  
  export default {
    name: "EditArticle",
    data() {
      return {
        article: {
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
    mounted() {
      this.fetchCategories();
      const id = this.$route.params.id;
      this.editArticle(id);
    },
    methods: {
        fetchCategories() {
            Axios.get("/categories")
            .then(result => console.log(this.categories = result.data))
            .catch(error => console.log(error));
        
      },
      editArticle(id) {
          Axios.get("/articles/${id}") 
              .then(result => this.article = result.data)
              .catch(error => console.log(error));
      },
        saveChanges() {
            Axios.put("/articles/${this.article.id}", this.article)
            .then(result => this.$router.push('/articles'))
            .catch(error => console.log(error));
        },
        cancelEditing() {
            this.$router.push('/articles');
        },
    },
  };
  </script>
  
  <style>
  </style>