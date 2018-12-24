<template>
  <div class="admin-post-form">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editPost.title">Title</AppControlInput>
        <AppControlInput v-model="editPost.thumbnail">Thumbnail Link</AppControlInput>
        <AppControlInput control-type="textarea" v-model="editPost.previewText">Preview Text</AppControlInput>
        <AppControlInput control-type="textarea" v-model="editPost.content">Content</AppControlInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton
          type="button"
          style="margin-left:10px"
          btn-style="cancel"
          @click="onCancel"
        >Cancel</AppButton>
      </form>
    </section>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            previewText: '',
            content: ''
          }
    }
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submit', this.editPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin/')
    }
  }
}
</script>

<style>
</style>
