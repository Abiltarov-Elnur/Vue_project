import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'

loadFonts()


createApp(App)
.use(router)
.use(store)
.use(vuetify)
.mount('#app')