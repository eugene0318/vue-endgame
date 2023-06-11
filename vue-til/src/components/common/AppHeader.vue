<template>
  <header>
    <div>
      <router-link to="/" class="logo">TIL</router-link>
    </div>
    <div class="navigation">
      <template v-if="isUserLogin">
        <span>{{ $store.state.username }}</span>
      </template>
      <template>
        <router-link to="/login">loin</router-link> |
        <router-link to="/signup">signup</router-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style></style>
