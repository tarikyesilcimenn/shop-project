<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>
<script>
import navbar from "./components/nav.vue";

import home from "./components/home.vue";

export default {
  components: {
    navbar,
    home,
  },
  methods: {},
};
</script>
<style>

</style>