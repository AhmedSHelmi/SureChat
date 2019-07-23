import Vue from 'vue'
import Router from 'vue-router'
import Chat from './components/chatcomponent.vue'
import NotFound from './views/NotFound'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'chat',
      component: Chat,
      meta: {
        title: "Messages"
      }
    },
    {
      path: '/Home',
      name: 'chat',
      component: Chat,
      meta: {
        title: "Messages"
      }
    },
        {
          path: '/chat',
          name: 'chat',
          component: Chat,
          meta: {
            title: "Messages"
          }
        },
    {
      path: '*',
      name: '404',
      component: NotFound,
      meta: {
        title: 'Not Found',
      }
    }

  ]
})


router.beforeEach((to, from, next) => {
  to.matched.some(record => document.title = record.meta.title);
  next()
})
export default router;