const checkAuth = (context) => {
  context.store.dispatch('initAuth', context.req)
}

export default checkAuth
