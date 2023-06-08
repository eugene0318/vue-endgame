import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:3000/",
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  //const url = "http://localhost:3000/signup";
  //return axios.post(url, userData);
  return instance.post("signup", userData);
}

// function loginUser() {
//   //const url = "http://localhost:3000/signup";
//   //return axios.post(url);
//   instance.post("signup");
// }

export { registerUser };
