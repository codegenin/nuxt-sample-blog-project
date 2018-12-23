<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostform'
export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'James Puro',
        title: 'My awesomme post',
        thumbnailLink:
          'https://techcrunch.com/wp-content/uploads/2018/12/apple-hole.png?w=300&h=160&crop=1',
        content: 'Super amazing lorem ipsum balba astes '
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
