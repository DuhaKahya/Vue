<template>
    <section>
      <div class="container">
        <form ref="form" method="POST">
          <h2 class="mt-3 mt-lg-5">Edit a article</h2>
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
            <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
            
            <button type="button" class="btn btn-danger" @click="cancelEditing">
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
    name: "EditArticle",
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
      fetchCategories();
      this.editArticle(this.id);
    },
    methods: {
        fetchCategories() {
            Axios.get("http://localhost/categories")
            .then(result => console.log(this.categories = result.data))
            .catch(error => console.log(error));
        
      },
        editArticle(id) {
            Axios.get(`http://localhost/articles/${id}`)
            .then(result => this.product = result.data)
            .catch(error => console.log(error));
        },
        saveChanges() {
            Axios.put(`http://localhost/articles/${this.product.id}`, this.product)
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