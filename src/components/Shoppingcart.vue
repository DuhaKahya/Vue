<!-- ShoppingCart.vue -->
<template>
    <div class="container">
      <h1 class="text-center fw-bold">Shopping Cart</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Article Title</th>
            <th>Article Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in shoppingCartItems" :key="item.id">
            <td>{{ item.article.title }}</td>
            <td>{{ item.article.description }}</td>
            <td>{{ item.quantity }}</td>
            <td>€{{ item.totalprice }}</td>
            <td>
              <button @click="deleteItem(item.id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mt-3 d-flex justify-content-between align-items-center">
        <div>
          <h4>Total Price: €{{ totalPrice }}</h4>
        </div>
        <div class="ml-auto">
          <button @click="confirmPayment" class="btn btn-success btn-lg" :disabled="!canProceedToPayment">Pay</button>
        </div>
      </div>
    
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        shoppingCartItems: [],
      };
    },
    async mounted() {
      await this.getAllShoppingCartItems();
    },
    computed: {
      totalPrice() {
        return this.shoppingCartItems.reduce((total, item) => total + item.totalprice, 0);
      },
      canProceedToPayment() {
        return this.shoppingCartItems.length > 0;
      },
    },
    methods: {
      async getAllShoppingCartItems() {
        try {
          // Call your API endpoint to fetch shopping cart items
          // For example:
          // const response = await fetch('/api/shopping-cart');
          // this.shoppingCartItems = await response.json();
        } catch (error) {
          console.error('Error fetching shopping cart items:', error);
        }
      },
      async deleteItem(itemId) {
        try {
          // Call your API endpoint to delete a shopping cart item
          // For example:
          // await fetch(`/api/shopping-cart/${itemId}`, { method: 'DELETE' });
          // After successful deletion, update the shopping cart items
          // this.getAllShoppingCartItems();
        } catch (error) {
          console.error('Error deleting shopping cart item:', error);
        }
      },
      async confirmPayment() {
        try {
          // Call your API endpoint to confirm payment
          // For example:
          // await fetch('/api/confirm-payment', { method: 'POST', body: JSON.stringify(this.shoppingCartItems) });
          // Handle modal display here
        } catch (error) {
          console.error('Error confirming payment:', error);
        }
      },
    },
  };
  </script>
  
  <style>
th{
    color:black;
}
  </style>
  