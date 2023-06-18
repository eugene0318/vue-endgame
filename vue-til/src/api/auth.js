//로그인, 회언가입, 탈퇴
//회원가입 API
import { instance } from "./index";
function registerUser(userData) {
  //const url = "http://localhost:3000/signup";
  //return axios.post(url, userData);
  return instance.post("signup", userData);
}

//로그인 API
function loginUser(userData) {
  return instance.post("login", userData);
}

export { registerUser, loginUser };
