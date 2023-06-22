import Vue from "vue";
import LoginFrom from "./LoginForm";
import { shallowMount } from "@vue/test-utils";

describe("LoginFrom.vue", () => {
  test("컴포넌트가 마운팅되면 화면에 그려져야 한다.", () => {
    const wrapper = shallowMount(LoginFrom, {
      data() {
        return {
          username: "test",
        };
      },
    });
    const idInput = wrapper.find("#username");
    console.log(idInput.element.value);
    console.log(wrapper.vm.isUsernameValid);
  });

  test("id, pw입력되지 않으면 로그인 버튼이 비활성화");
});
