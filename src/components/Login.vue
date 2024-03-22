<template>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <form>
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
              <button type='button' class="btn btn-primary" @click="login">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { storeToRefs } from 'pinia';
  import axios from '../axios-auth';
  import { useStore } from '../stores/store';
  
  export default {
    name: "Login",
    setup() {
      const store = useStore();
      return { store };
    },
    data() {
      return {
        username: "username",
        password: "password",
        errorMessage : ""
      };
    },
    methods: {
      login() {
        this.store.login(this.username, this.password)
        .then((res) => {
          this.$router.replace("/articles");
        })
        .catch((error) => this.errorMessage = error);
      },
    }
    
  };
  </script>
  
  
  <style>
  
  </style>