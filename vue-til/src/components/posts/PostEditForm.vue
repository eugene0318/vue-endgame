<template lang="">
  <div class="contents">
    <h1 class="page-header">
      Edit Post
    </h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">contents:</label>
          <textarea id="contents" type="text" v-model="contents"></textarea>
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents must be less than 200
          </p>
        </div>
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>
<script>
import { fetchPost, editPost } from "@/api/posts";
export default {
  data() {
    return {
      title: "",
      contents: "",
      logMessage: "",
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
    console.log(data);
  },
};
</script>
<style lang=""></style>
