import axios from "axios";
//import store from "@/store/index";
import { setInterceptors } from "@/api/common/interceptors";

//axios 초기화 함수
function createInstance() {
  const instance = axios.create({
    //baseURL: "http://localhost:3000/",
    baseURL: process.env.VUE_APP_API_URL,
    // headers: {
    //   Authorization: store.state.token,
    // },
  });

  return setInterceptors(instance);
}

const instance = createInstance();

//회원가입 API
function registerUser(userData) {
  //const url = "http://localhost:3000/signup";
  //return axios.post(url, userData);
  return instance.post("signup", userData);
}

//로그인 API
function loginUser(userData) {
  return instance.post("login", userData);
}

//학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return instance.get("posts");
}

// function loginUser() {
//   //const url = "http://localhost:3000/signup";
//   //return axios.post(url);
//   instance.post("signup");
// }

export { registerUser, loginUser, fetchPosts };
