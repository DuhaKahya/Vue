<template>
  <div class="container">
    <h1 class="text-center fw-bold">Shopping Cart</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Select</th>
          <th>Article Title</th>
          <th>Article Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in unpaidItems" :key="item.id">
          <td>
            <input type="checkbox" v-model="selectedItems" :value="item.id" class="larger-checkbox">
          </td>
          <td>{{ getArticleTitle(item.articleid) }}</td>
          <td>{{ getArticleDescription(item.articleid) }}</td>
          <td>{{ item.quantity }}</td>
          <td>€{{ item.price }}</td>
          <td>€{{ item.totalprice}}</td>
          <td>
            <button class="btn btn-danger" @click="confirmDelete(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mt-3 d-flex justify-content-between align-items-center">
      <div>
        <h4>Total Price: €{{ totalPrice }}</h4>
      </div>
      <div class="ml-auto">
        <button class="btn btn-success btn-lg" @click="confirmPayment" :disabled="selectedItems.length === 0">Pay</button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      shoppingCartItems: [],
      articles: [],
      selectedItems: []
    };
  },
  computed: {
    unpaidItems() {
      return this.shoppingCartItems.filter(item => item.status === 'unpaid');
    },
    totalPrice() {
      return this.unpaidItems.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    async getAllShoppingCartItems() {
      try {
        const response = await Axios.get('http://localhost/shoppingcart');
        this.shoppingCartItems = response.data;
        await this.getAllArticles();
      } catch (error) {
        console.error('Error fetching shopping cart items:', error);
      }
    },
    async getAllArticles() {
      try {
        const response = await Axios.get('http://localhost/articles');
        this.articles = response.data;
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    },
    async confirmDelete(itemId) {
      if (confirm('Are you sure you want to delete this item?')) {
        this.deleteItem(itemId);
      }
    },
    async deleteItem(itemId) {
      try {
        await Axios.delete(`http://localhost/shoppingcart/${itemId}`);
        this.shoppingCartItems = this.shoppingCartItems.filter(item => item.id !== itemId);
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
    async confirmPayment() {
      if (confirm('Are you sure you want to pay for selected items?')) {
        await this.payForSelectedItems();
      }
    },
    async payForSelectedItems() {
      try {               
        for (const itemId of this.selectedItems) {
          await Axios.put(`http://localhost/shoppingcart/${itemId}`, { status: 'paid' });
        }
        // Clear selected items after payment
        this.selectedItems = [];
        window.location.reload();
      } catch (error) {
        console.error('Error paying for selected items:', error);
      }
    },
    getArticleTitle(articleid) {
      const article = this.articles.find(article => article.id === articleid);
      return article ? article.title : 'Unknown';
    },
    getArticleDescription(articleid) {
      const article = this.articles.find(article => article.id === articleid);
      return article ? article.description : 'No description available';
    }
  },
  mounted() {
    this.getAllShoppingCartItems();
  }
};
</script>

<style>
th {
  color: black;
}

.larger-checkbox {
  transform: scale(2); 
}
</style>
