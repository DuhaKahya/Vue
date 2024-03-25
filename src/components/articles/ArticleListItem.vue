<template>
  <div v-if="article.category_id === 1" class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
    <div class="card product-card h-100">
      <div class="card-body">
        <img :src="'images/articles/' + article.image" :alt="article.title" :title="article.title" />
        <div class="float-start">
          <p>{{ article.title }}</p>
          <p>
            <small>{{ article.category_name }}</small>
          </p>
        </div>
        <span class="price float-end">{{ "€" + article.price }}</span>
      </div>
      <div class="card-footer">
        <button v-if="roleId === '1'" class="btn btn-warning" @click="editArticle(article.id)">Edit</button>
        <button v-if="roleId === '1'" class="btn btn-danger mx-3" @click="deleteArticle(article.id)">Delete</button>
        
        <div class="row align-items-center">
          <div class="col">
            <button v-if="roleId === '2'" class="btn btn-success" @click="addToCart(article.id)" :disabled="quantity <= 0">Add to cart</button>
          </div>
          <div class="col">
            <div v-if="roleId === '2'" class="input-group input-group-sm">
              <button @click="decrementQuantity" class="btn btn-primary">-</button>
              <input type="number" v-model="quantity" class="form-control" placeholder="0">
              <button @click="incrementQuantity" class="btn btn-primary">+</button>
            </div>
          </div>
          <!-- go to login page-->
          <button v-if="roleId === '3'" class="btn btn-primary" @click="$router.push('/login')">Login to buy something!</button> 
        </div>
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
        <button v-if="roleId === '1'" class="btn btn-warning" @click="editArticle(article.id)">Edit</button>
        <button v-if="roleId === '1'" class="btn btn-danger mx-3" @click="deleteArticle(article.id)">Delete</button>
        
        <div class="row align-items-center">
          <div class="col">
            <button v-if="roleId === '2'" class="btn btn-success" @click="addToCart(article.id)" :disabled="quantity <= 0">Add to cart</button>
          </div>
          <div class="col">
            <div v-if="roleId === '2'" class="input-group input-group-sm">
              <button @click="decrementQuantity" class="btn btn-primary">-</button>
              <input type="number" v-model="quantity" class="form-control" placeholder="0">
              <button @click="incrementQuantity" class="btn btn-primary">+</button>
            </div>
          </div>

          <button v-if="roleId === '3'" class="btn btn-primary" @click="$router.push('/login')">Login to buy something!</button> 
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import { useStore } from '../../stores/store';

export default {
  name: "ArticleListItem",
  setup() {
    const store = useStore();
    const roleId = store.getRoleId() || '3';
    const userId = store.getUserId();
    return { roleId, userId };
  },
  props: {
    article: Object,
  },
  data() {
    return {
      quantity: 0,
    };
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
      this.$router.push("/editarticle/" + id);
    },
    addToCart(id) {
      Axios.post("http://localhost/articles/" + id, { 
        userid: this.userId,
        articleid: id,
        quantity: this.quantity,
        price: this.article.price,
        totalprice: this.quantity * this.article.price,
      })
        .then((result) => {
          alert("Article (id: "+this.article.id+") added to the shoppingcart with a quantity of " + this.quantity + "!");
          this.$router.go();
        })
        .catch((error) => console.log(error));
    },

    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
  },
};
</script>


<style>
/* Your CSS styles here */
</style>
