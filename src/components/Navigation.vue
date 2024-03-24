<template>
  <nav id="navigation" class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">

      <div class="logo">
            <img src="images/logo.jpg" alt="" width="75" height="100">
        </div>
        <a id="title" class="navbar-brand" href="/">GALATASARAY</a>

      <ul class="navbar-nav mb-2 mb-md-0">
        
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
          <router-link to="/articles" class="nav-link" active-class="active">
            Articles
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/contact" class="nav-link" active-class="active">
            Contact
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/shoppingcart" class="nav-link" active-class="active">

            <svg xmlns="http://www.w3.org/2000/svg" id="shoppingcart" class="bi bi-cart-dash" viewBox="0 0 16 16">
              <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg>

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

#navigation {
    margin: 0;
    padding: 0;
}

#navigation div{
    background-color: #b30000;
    align-items: center;
}

.logo {
    width: 75px;
    height: 100px;
    margin: 10px;
}

.navbar-nav {
    display: flex;
    align-items: center;
    margin-left: auto;
}

.navbar-nav a {
    color: white;
    margin: 0 5px;
    text-decoration: none;
    font-size: 20px;
}
.navbar-nav a:hover {
    color: #0084ff;
}

#shoppingcart {
    fill: white;
    width: 35px;
    height: 55px;
    margin-right: 20px;
}
#title{
    color: white;
    font-size: 30px;
    margin-left: 15px;
    font-weight: bold;
}
#title:hover{
    color: #0084ff;
}
#shoppingcart:hover {
    fill: #0084ff;
}

#loginbutton {
    text-decoration: none;
    color: white;
    border: 1px solid white;
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 5px;
}
#loginbutton:hover {
    background-color: #0084ff;
}


</style>
