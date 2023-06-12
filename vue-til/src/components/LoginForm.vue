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
    <button :disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>
<script>
import axios from "axios";
import { loginUser } from "@/api/index";
import { validateEmail } from "@/utils/validation";
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
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        //비지니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.token);
        this.$store.commit("setToken", data.token);
        //로그인 페이지로 이동
        this.$store.commit("setUsername", data.user.username);
        //console.log(data.user.username);
        this.$router.push("/main");
        //this.logMessage = `${data.user.username} 님 환영합니다.`;
      } catch (error) {
        //에러 핸들링 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>
<style lang=""></style>
