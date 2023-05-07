import { createApp as createVueApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import router from './router'

export const createApp = ViteSSG(App, router, ({ app, isClient }) => {
})

