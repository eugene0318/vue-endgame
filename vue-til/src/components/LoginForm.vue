<template lang="">
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id : </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw : </label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>
<script>
import axios from "axios";
import { loginUser } from "@/api/index";
export default {
  data() {
    return {
      //form values
      username: "",
      password: "",
      //log
      logMessage: "",
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      const { data } = await loginUser(userData);
      console.log(data.user.username);
      this.logMessage = `${data.user.username} 님 환영합니다.`;
      this.initForm();
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>
<style lang=""></style>
