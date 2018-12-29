const auth = (context) => {
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}

export default auth
