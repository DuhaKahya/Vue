import { defineStore } from 'pinia'
import axios from '../axios-auth';


export const useStore = defineStore('counter', {
  state: () => ({
    token: '',
    username: ''
  }),
  getters: {
    isLoggedIn: (state) => state.token != '',
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
            
            // state variable
            this.token = res.data;
            this.username = username;

            // zo kun je in de console je token zien in de 'application' tab
            localStorage.setItem('token', res.data);
            localStorage.setItem('username', username);

            resolve();  
        })
        // melding vanuit de backend
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
    
  },
  
})