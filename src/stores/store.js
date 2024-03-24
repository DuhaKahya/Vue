import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('counter', {
  state: () => ({
    token: '',
    username: '',
  }),
  getters: {
    isLoggedIn: (state) => state.token !== '',
  },
  actions: {
    login(username, password) {
      return new Promise((resolve, reject) => {
        axios.post("http://localhost/users/login", {
            username: username,
            password: password,
          })
          .then((res) => {            

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;

            // Stel state variabelen in
            this.token = res.data;
            this.username = username;

            // Zo kun je in de console je token zien in de 'application' tab
            localStorage.setItem('token', res.data);
            localStorage.setItem('username', username);

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
    
      if (token) {
        this.token = token;
        this.username = username;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      }
    },
    logout() {
      this.token = '';
      this.username = '';
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      axios.defaults.headers.common['Authorization'] = '';
    },
    register(username, password) {
      return new Promise((resolve, reject) => {
        axios.post("http://localhost/users/register", {
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
