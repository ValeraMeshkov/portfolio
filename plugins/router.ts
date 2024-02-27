
export default defineNuxtPlugin(({ $router }) => {
  $router.options.scrollBehavior = (to: { hash?: string }) => {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
});
