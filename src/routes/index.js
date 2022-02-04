import { createRouter, createWebHashHistory } from 'vue-router';
import AtHome from './AtHome.vue';
import AtMovie from './AtMovie.vue';
import AtAbout from './AtAbout.vue';
import NotFound from './NotFound.vue';

export default createRouter({
  // Hash
  // https://google.com/#/search
  history: createWebHashHistory(),
  // 스크롤 초기화
  scrollBehavior() {
    return { top: 0 }
  },
  // Pages
  // https://google.com/about
  routes: [
    {
      path: '/',
      component: AtHome
    },
    {
      path: '/movie/:id',
      component: AtMovie
    },
    {
      path: '/about',
      component: AtAbout
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});