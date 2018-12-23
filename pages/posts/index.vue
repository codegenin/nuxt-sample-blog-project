<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  data() {
    return {
      loadedPosts: [
        {
          id: '1',
          title: 'This is my first post',
          thumbnail:
            'https://techcrunch.com/wp-content/uploads/2018/12/apple-hole.png?w=300&h=160&crop=1',
          previewText: 'This is a preview text.'
        },
        {
          id: '2',
          title: 'This is my first post',
          thumbnail:
            'https://techcrunch.com/wp-content/uploads/2018/12/apple-hole.png?w=300&h=160&crop=1',
          previewText: 'This is a preview text.'
        },
        {
          id: '3',
          title: 'This is my first post',
          thumbnail:
            'https://techcrunch.com/wp-content/uploads/2018/12/apple-hole.png?w=300&h=160&crop=1',
          previewText: 'This is a preview text.'
        }
      ]
    }
  },
  created() {
    this.$store.commit('setPosts', this.loadedPosts)
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
