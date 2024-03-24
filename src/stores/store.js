import { defineStore } from 'pinia';
import axios from '../axios-auth';

export const useStore = defineStore('counter', {
  state: () => ({
    token: '',
    username: '',
    roleId: '',
  }),
  getters: {
    isLoggedIn: (state) => state.token !== '',
  },
  actions: {
    login(username, password) {
      return new Promise((resolve, reject) => {
        axios.post("/users/login", {
            username: username,
            password: password,
          })
          .then((res) => {
            console.log(res);
            alert(res.data);

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;

            // Stel state variabelen in
            this.token = res.data;
            this.username = username;
            this.roleId = res.data.roleId;

            // Zo kun je in de console je token zien in de 'application' tab
            localStorage.setItem('token', res.data);
            localStorage.setItem('username', username);
            localStorage.setItem('roleId', res.data.roleId);

            // Resolve de Promise
            resolve();  
          })
          // Melding vanuit de backend
          .catch((error) => reject(error.response.data.errorMessage));
      });
    },
    autoLogin() {
      let token = localStorage.getItem('token');
      let username = localStorage.getItem('username');
      let roleId = localStorage.getItem('roleId');
    
      if (token) {
        this.token = token;
        this.username = username;
        this.roleId = roleId;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }
    },
    logout() {
      this.token = '';
      this.username = '';
      this.roleId = '';
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('roleId');
      axios.defaults.headers.common['Authorization'] = '';
    },
    register(username, password) {
      return new Promise((resolve, reject) => {
        axios.post("/users/register", {
            username: username,
            password: password,
          })
          .then((res) => {
            console.log(res);
            alert(res.data);
            resolve();
          })
          .catch((error) => reject(error.response.data.errorMessage));
      });
    },

  }
});
