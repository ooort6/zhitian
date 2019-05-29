
export default [
    {
      path: '/',
      redirect: '/home'
    },
   
    {
      path: '/home',
      name: 'home',
      meta:{
        title:'首页'
      },
      component: () =>import ('@/views/home/home')
    },
    {
      path: '/phoneList',
      name: 'phoneList',
      meta:{
        title:'手机'
      },
      component: () =>import ('@/views/goodsList/phoneList/phoneList')
    },
    {
      path: '/headsetList',
      name: 'headsetList',
      meta:{
        title:'耳机'
      },
      component: () =>import ('@/views/goodsList/headsetList/headsetList')
    },
    {
      path: '/lifeRoundList',
      name: 'lifeRoundList',
      meta:{
        title:'生活周边'
      },
      component: () =>import ('@/views/goodsList/lifeRoundList/lifeRoundList')
    },
    {
      path: '/partList',
      name: 'partList',
      meta:{
        title:'配件'
      },
      component: () =>import ('@/views/goodsList/partList/partList')
    },
    // 以上四个路由页面可以合并为一个页面，在这是方便学习如何获取数据
    {
      path: '/details',
      name: 'details',
      meta:{
        title:'详情'
      },
      component: () =>import ('@/views/details/details')
    },
    {
      path: '/cart',
      name: 'cart',
      meta:{
        title:'购物车'
      },
      component: () =>import ('@/views/cart/cart')
    },
]
