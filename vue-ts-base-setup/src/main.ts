import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import './style.css'

import App from '@src/App.vue'
import Login from '@src/pages/Login.vue'
import Profile from '@src/pages/Profile.vue'
import Home from '@src/pages/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
