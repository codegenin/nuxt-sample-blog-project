<template>
  <section class="posts-list">
    <PostPreview
      :is-admin="isAdmin"
      id="1"
      title="Post title 1"
      thumbnail="https://techcrunch.com/wp-content/uploads/2018/12/apple-hole.png?w=300&h=160&crop=1"
      previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero vel, error accusantium eaque suscipit repudiandae a autem. Eaque cupiditate deserunt nam neque sapiente ipsa, non suscipit, facilis hic nostrum adipisci?"
    />
    <PostPreview
      :is-admin="isAdmin"
      id="2"
      title="Post title 2"
      thumbnail="https://techcrunch.com/wp-content/uploads/2018/11/facebook-down2.jpg?w=850&h=492&crop=1"
      previewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero vel, error accusantium eaque suscipit repudiandae a autem. Eaque cupiditate deserunt nam neque sapiente ipsa, non suscipit, facilis hic nostrum adipisci?"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
