<template lang="">
  <div>
    <h1>Main</h1>
  </div>
</template>
<script>
import { fetchPosts } from "@/api/index";
export default {
  methods: {
    async fetchData() {
      const response = await fetchPosts();
      console.log(response);
    },
  },

  created() {
    this.fetchData();
  },
};
</script>
<style lang=""></style>
