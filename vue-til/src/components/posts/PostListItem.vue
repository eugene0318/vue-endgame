<template lang="">
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <i class="icon ion-md-create"> </i>
      <i class="icon ion-md-trash" @click="deleteItem"> delete</i>
    </div>
  </li>
</template>
<script>
import { deletePost } from "@/api/posts";
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm(`you must to delete ?`)) {
        await deletePost(this.postItem._id);
        this.$emit("refresh");
      }
      //console.log(deleted);
    },
  },
};
</script>
<style lang=""></style>
