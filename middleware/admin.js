export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    const role = localStorage.getItem('role')

    if (role !== 'admin') {
      return navigateTo('/home')
    }
  }
})
