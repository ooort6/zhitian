



import Router from 'vue-router'
import routes from './routers'
import iView from 'iview'

const router = new Router({
  routes,
  mode: 'history'
})
router.afterEach(to => { // 后置路由
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
