<template>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <form v-if="!store.isLoggedIn">
              <div v-if="errorMessage != ''" class="alert alert-danger">
                {{ errorMessage }}
              </div>
              <h1>Login</h1>
              <div class="mb-3">
                <label for="inputUsername" class="form-label">Username</label>
                <input id="inputUsername" type="text" class="form-control" v-model="username" />
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword" v-model="password" />
              </div>
              <button type='button' class="btn btn-primary" @click="login">Login</button>

             
              <router-link to="/register" class="btn btn-primary mx-3">Register</router-link>

            </form>
            <button v-else @click="logout" class="btn btn-danger">Logout</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { useStore } from '../stores/store';
  
  export default {
    name: "Login",
    setup() {
      const store = useStore();
      return { store };
    },
    data() {
      return {
        username: "",
        password: "",
        errorMessage : ""
      };
    },
    methods: {
      login() {
        this.store.login(this.username, this.password)
          .then(() => {
            this.$router.replace("/");
          })
          .catch((error) => this.errorMessage = error);
      },
      logout() {
        this.store.logout();
        this.$router.replace("/login");
      }
    }
  };
  </script>
  
  <style>
  </style>
  