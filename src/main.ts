import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import NProgress from 'nprogress'
import App from './App.vue'

// styles
import 'nprogress/nprogress.css'
import './styles/main.less'

// app
const app = createApp(App, {
  base: import.meta.env.BASE_URL,
})

// pinia
const pinia = createPinia()
app.use(pinia)

// i18n
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})
app.use(i18n)

// router
const router = createRouter({
  routes: setupLayouts(routes),
  history: createWebHashHistory(import.meta.env.BASE_URL),
})
router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
})
router.afterEach(() => {
  NProgress.done()
})
app.use(router)

// mount
app.mount('#app')
