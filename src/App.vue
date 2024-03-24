<template>
  <div style="margin-top: 150px;">
    <navigation />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import FooterComponent from './components/Footer.vue';
import { useStore } from './stores/store';

export default {
  name: "App",
  setup() {
    const store = useStore();
    store.autoLogin();
  },
  components: {
    Navigation,
    FooterComponent,
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
footer {
  margin-top: 100px; 
}
</style>
