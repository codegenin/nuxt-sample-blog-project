<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <AppControlInput v-model="editPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editPost.title">Title</AppControlInput>
        <AppControlInput v-model="editPost.thumbnailLink">Thumbnail Link</AppControlInput>
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
  data() {
    return {
      editPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },
  methods: {
    onSave() {
      // Save the post
      console.log(this.editPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push('admin')
    }
  }
}
</script>

<style>
</style>
