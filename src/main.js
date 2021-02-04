import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jyUI from 'packages/index'
import 'element-plus/lib/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import '../style/index.scss'
console.log(jyUI)
createApp(App)
    .use(store)
    .use(router)
    .use(jyUI)
    .use(ElementPlus)
    .mount('#app')
