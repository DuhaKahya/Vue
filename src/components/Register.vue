<template>
    <section>
      <div class="container">
        <form ref="form" method="POST">
          <h2 class="mt-3 mt-lg-5">Register</h2>
          <h5 class="mb-4"></h5>
  
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Username</span>
            <input type="text" class="form-control" v-model="user.username" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Password</span>
            <input type="text" class="form-control" v-model="user.password" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Role</span>
            <select class="form-select" v-model="user.roleId">
              <option value="0" selected>Choose...</option>
              <option
                v-for="role in roles"
                :key="role.id"
                :value="role.id"
                >{{ role.name }}</option>
            </select>
          </div>

  
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Email</span>
            <input type="email" class="form-control" v-model="user.email" />
          </div>
  
  
          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Name</span>
            <input type="text" class="form-control" v-model="user.name" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Adres</span>
            <input type="text" class="form-control" v-model="user.adres" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" style="width: 150px;">Phonenumber</span>
            <input type="text" class="form-control" v-model="user.phonenumber" />
          </div>
          
  
          <div class="input-group mt-4">
            <button type="button" class="btn btn-primary" @click="register">Register</button>
            
            <button type="button" class="btn btn-danger mx-3" @click="cancelRegister">
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
    name: "Register",
    data() {
      return {
        user: {
          username: "",
          password: "",
          roleId: 0,
          email: "",
          name: "",
          adres: "",
          phonenumber: "",
        },
        roles: [],
      };
    },
    mounted() {
      this.fetchRoles();
    },
    methods: {
    fetchRoles() {
      Axios.get("http://localhost/roles")
        .then(result => this.roles = result.data)
        .catch(error => console.log(error));
    },
    register() {
      Axios.post("http://localhost/users/register", this.user)
        .then(result => {
          // Display an alert with the message
          alert("Your account has been created");
          this.$refs.form.reset();
          // Redirect to login page
          this.$router.push("/login");
        })
        .catch(error => {
          if (error.response && error.response.status === 409) {
            // Handle username already taken error
            alert("Username already taken. Please choose another one.");
          } else {
            console.error("An error occurred:", error);
            alert("An error occurred while trying to register. Please try again.");
          }
        });
    },
    cancelRegister() {
      this.$router.push("/login");
    }
  }

  };
  </script>
  
  
  <style>
  </style>