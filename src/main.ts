import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from '@/router'
import { createMetaManager } from 'vue-meta'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(createMetaManager())
  .mount('#app')
