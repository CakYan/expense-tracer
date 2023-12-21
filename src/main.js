import { createApp } from 'vue'
import Toast from 'vue-toastification'
import router from './router'
import { createPinia } from 'pinia'
import 'vue-toastification/dist/index.css'
import './style.css'
import App from './App.vue'

const pinia = createPinia();

createApp(App)
.use(Toast)
.use(router)
.use(pinia)
.mount('#app')
