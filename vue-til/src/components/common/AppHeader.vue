<template>
  <header>
    <router-link :to="logoLink" class="logo">
      TIL
      <span v-if="isUserLogin">by {{ $store.state.username }}</span>
    </router-link>
    <div class="navigation">
      <template v-if="isUserLogin">
        <span>{{ $store.state.username }}</span>
        <a href="javascript:;" @click="logoutUser">Logout</a>
      </template>
      <template>
        <router-link to="/login">loin</router-link> |
        <router-link to="/signup">signup</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from "@/utils/cookies";
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? "/main" : "/login";
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit("clearUsername");
      this.$store.commit("clearToken");
      deleteCookie("til_auth");
      deleteCookie("til_user");
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
