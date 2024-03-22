<script>
import Navigation from './components/Navigation.vue'
import { useStore } from './stores/store';

export default {
  name: "App",
  setup() {
    const store = useStore();
    store.autoLogin();
  },
  components: {
    Navigation
  }
};
</script>


<template>
   <navigation />
   <RouterView />
</template>

<style scoped>
</style>
