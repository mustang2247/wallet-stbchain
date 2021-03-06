import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import Market from '@/views/index/market'
import MarketDetail from '@/views/index/marketDetail'
import Assets from '@/views/assets'
import UserInfo from '@/views/userinfo'
import Login from '@/views/login'
import Register from '@/views/register'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',  //默认路由
      name: 'default',
      component: index,
      redirect: '/Market',
    }, {
      path: '/index',
      name: 'index',
      component: index,
      redirect: '/Market',
      children:[
        {
          path: '/Market',
          name: 'Market',
          component: Market,
        }, {
          path: '/Market/MarketDetail',
          name: 'MarketDetail',
          component: MarketDetail,
        }, {
          path:'/Assets',
          name: 'Assets',
          component: Assets,
        }, {
          path:'/UserInfo',
          name: 'UserInfo',
          component: UserInfo,
        }
      ]
    },{
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
