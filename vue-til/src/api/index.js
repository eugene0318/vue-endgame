import axios from "axios";
//import store from "@/store/index";
import { setInterceptors } from "@/api/common/interceptors";

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}
//axios 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    //baseURL: "http://localhost:3000/",
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    // headers: {
    //   Authorization: store.state.token,
    // },
  });

  return setInterceptors(instance);
}
export const instance = createInstance();
export const posts = createInstanceWithAuth("posts");

// function loginUser() {
//   //const url = "http://localhost:3000/signup";
//   //return axios.post(url);
//   instance.post("signup");
// }

//export { fetchPosts, createPost };
