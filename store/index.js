import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://nuxt-blog-72f5f.firebaseio.com/posts.json')
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key],
                id: key
              })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }

        return axios
          .post(
            process.env.baseUrl + '/posts.json?auth=' + vuexContext.state.token,
            createdPost
          )
          .then(res => {
            vuexContext.commit('addPost', { ...createdPost,
              id: res.data.name
            })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return axios
          .put(
            process.env.baseUrl +
            '/posts/' +
            editedPost.id +
            '.json?auth=' +
            vuexContext.state.token,
            editedPost
          )
          .then(res => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
          process.env.fbAPIKey

        if (!authData.isLogin) {
          authUrl =
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' +
            process.env.fbAPIKey
        }

        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(res => {
            vuexContext.commit('setToken', res.idToken)
            localStorage.setItem('token', res.idToken)
            localStorage.setItem(
              'tokenExpiration',
              new Date().getTime() + res.expiresIn * 1000
            )
            Cookie.set('jwt', res.idToken)
            Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(res.expiresIn) * 1000)
          })
          .catch(e => console.log(e))
      },
      setLogoutTime(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      },
      initAuth(vuexContext, req) {

        let token
        let expirationDate

        if (req) {
          if (!req.headers.cookie) {
            return
          }

          const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))

          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie
            .split(';').find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')

          if (new Date().getTime() > Number.parseInt(expirationDate) || !token) {
            console.log('No token or invalid token')
            vuexContext.commit('clearToken');
            return
          }
        }


        vuexContext.dispatch('setLogoutTime', Number.parseInt(expirationDate) - new Date().getTime())
        vuexContext.commit('setToken', token)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
