// export default defineNuxtRouteMiddleware((to, from) => {
//   const token = process.client ? localStorage.getItem('token') : null
//   console.log('check token', token)

//   if (!token && to.path !== '/auth/login') {
//     return navigateTo('/auth/login')
//   }
// })

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem('token')
    if (!token && to.path !== '/auth/login') {
      return navigateTo('/auth/login')
    }
  }
})