import Vuex from "vuex";
import Vue from "vue";
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
  },
  getters: {
    isLogin(state) {
      return state.username !== "";
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = "";
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.token);
      commit("setToken", data.token);
      //로그인 페이지로 이동
      commit("setUsername", data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data;
    },
  },
});
