
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
    // {
    //   path: '/phoneList',
    //   name: 'phoneList',
    //   meta:{
    //     title:'手机'
    //   },
    //   component: () =>import ('@/views/goodsList/phoneList/phoneList')
    // },
    // {
    //   path: '/headsetList',
    //   name: 'headsetList',
    //   meta:{
    //     title:'耳机'
    //   },
    //   component: () =>import ('@/views/goodsList/headsetList/headsetList')
    // },
    // {
    //   path: '/lifeRoundList',
    //   name: 'lifeRoundList',
    //   meta:{
    //     title:'生活周边'
    //   },
    //   component: () =>import ('@/views/goodsList/lifeRoundList/lifeRoundList')
    // },
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
      path: '/xinxisafe',
      name: 'xinxisafe',
      meta:{
        title:'信息安全'
      },
      component: () =>import ('@/views/goodsList/safe/xinxisafe')
    },
    {
      path: '/yewusafe',
      name: 'yewusafe',
      meta:{
        title:'业务安全'
      },
      component: () =>import ('@/views/goodsList/safe/yewusafe')
    },
    {
      path: '/yunyingsafe',
      name: 'yunyingsafe',
      meta:{
        title:'企业运营安全'
      },
      component: () =>import ('@/views/goodsList/safe/yunyingsafe')
    },
    {
      path: '/product_1',
      name: 'product_1',
      meta:{
        title:'恶意代码防护'
      },
      component: () =>import ('@/views/goodsList/product/product_1')
    },
    {
      path: '/product_2',
      name: 'product_2',
      meta:{
        title:'智能DNS'
      },
      component: () =>import ('@/views/goodsList/product/product_2')
    },
    {
      path: '/product_3',
      name: 'product_3',
      meta:{
        title:'网络流量分析及管理系统 '
      },
      component: () =>import ('@/views/goodsList/product/product_3')
    },
    {
      path: '/product_4',
      name: 'product_4',
      meta:{
        title:'网络内容审核系统'
      },
      component: () =>import ('@/views/goodsList/product/product_4')
    },
    {
      path: '/product_5',
      name: 'product_5',
      meta:{
        title:'综合控制系统'
      },
      component: () =>import ('@/views/goodsList/product/product_5')
    },
    {
      path: '/product_6',
      name: 'product_6',
      meta:{
        title:'安全管理平台 '
      },
      component: () =>import ('@/views/goodsList/product/product_6')
    },
    {
      path: '/product_7',
      name: 'product_7',
      meta:{
        title:'三维全景GIS系统 '
      },
      component: () =>import ('@/views/goodsList/product/product_7')
    },
    {
      path: '/shouqian',
      name: 'shouqian',
      meta:{
        title:'售前服务 '
      },
      component: () =>import ('@/views/goodsList/bar/shouqian')
    },
    {
      path: '/shouhou',
      name: 'shouhou',
      meta:{
        title:'售后服务 '
      },
      component: () =>import ('@/views/goodsList/bar/shouhou')
    },
    {
      path: '/hezuoform',
      name: 'hezuoform',
      meta:{
        title:'合作表单 '
      },
      component: () =>import ('@/views/goodsList/bar/hezuoform')
    },
   
    // {
    //   path: '/details',
    //   name: 'details',
    //   meta:{
    //     title:'详情'
    //   },
    //   component: () =>import ('@/views/details/details')
    // },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   meta:{
    //     title:'购物车'
    //   },
    //   component: () =>import ('@/views/cart/cart')
    // },
]
