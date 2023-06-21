import Vue from "vue";
import LoginFrom from "./LoginForm";
import { shallowMount } from "@vue/test-utils";

describe("LoginFrom.vue", () => {
  test("컴포넌트가 마운팅되면 화면에 그려져야 한다.", () => {
    const wrapper = shallowMount(LoginFrom);
    expect(wrapper.vm.username).toBe("");
  });
});
