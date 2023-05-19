import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import { options } from '@/plugins/quasar'
import { i18n } from '@/plugins/i18n'
import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)

app.config.performance = true
app.use(createPinia())
app.use(router)
app.use(Quasar, options)
app.use(i18n)
app.mount('#app')
