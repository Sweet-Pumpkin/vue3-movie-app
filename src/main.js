import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index.js'; //index.js 생략 가능
import store from './store/index.js'; //index.js 생략 가능
import loadImage from './plugins/loadImages.js'

createApp(App)
  .use(router) // $route, $router
  .use(store) // $store
  .use(loadImage) // $loadImage
  .mount('#app');