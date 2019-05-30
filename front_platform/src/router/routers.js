
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
      path: '/programme',
      name: 'programme',
      meta:{
        title:'解决方案'
      },
      component: () =>import ('@/views/goodsList/programme/programme')
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      meta:{
        title:'合作发展'
      },
      component: () =>import ('@/views/goodsList/cooperation/cooperation')
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      meta:{
        title:'关于我们'
      },
      component: () =>import ('@/views/goodsList/aboutUs/aboutUs')
    },
    {
      path: '/formDemo',
      name: 'formDemo',
      meta:{
        title:'表单'
      },
      component: () =>import ('@/views/goodsList/formDemo/formDemo')
    },
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
