<template>
  <div class="home-age">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <section class="featured-posts">
      <PostList :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
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
      })
    }, 1500)
  }
  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>



