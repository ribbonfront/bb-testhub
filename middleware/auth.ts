export default defineNuxtRouteMiddleware((to, from) => {
  const token = process.client ? localStorage.getItem('token') : null

  if (!token && to.path !== '/auth/login') {
    return navigateTo('/auth/login')
  } else {
    
  }
})