<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            Home
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">
            About
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/webshop" class="nav-link" active-class="active">
            Webshop
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/tickets" class="nav-link" active-class="active">
            Tickets
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/contact" class="nav-link" active-class="active">
            Contact
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/articles" class="nav-link" active-class="active">
            Articles
          </router-link>
        </li>

        
        <li v-if="isLoggedIn" class="nav-item">

          <router-link to="/" class="nav-link" @click="logout">
            Logout
          </router-link>

        </li>
        <li v-else class="nav-item">

          <router-link to="/login" class="nav-link" active-class="active">
            Login
          </router-link>

        </li>


      </ul>
    </div>
  </nav>
</template>

<script>
import { useStore } from '../stores/store';

export default {
  name: "Navigation",
  setup() {
    const store = useStore();
    return { store };
  },
  computed: {
    isLoggedIn() {
      return this.store.isLoggedIn;
    },
  },
  methods: {
    async logout() {
      await this.store.logout();
      alert("You have been logged out."); // Display alert message after logout
    },
  },
};
</script>

<style>
</style>
