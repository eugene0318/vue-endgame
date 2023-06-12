import axios from "axios";
//import store from "@/store/index";
import { setInterceptors } from "@/api/common/interceptors";
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

function registerUser(userData) {
  //const url = "http://localhost:3000/signup";
  //return axios.post(url, userData);
  return instance.post("signup", userData);
}

function loginUser(userData) {
  return instance.post("login", userData);
}

// function loginUser() {
//   //const url = "http://localhost:3000/signup";
//   //return axios.post(url);
//   instance.post("signup");
// }

export { registerUser, loginUser };
