import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/components/layouts/Standard'),
      children: [
        {
          path: '/',
          name: 'home',
          meta: { rank: 1 },
          component: () => import(/* webpackChunkName: "home" */ '@/views/PageHome/Home.vue')
        },
        {
          path: '/market',
          name: 'market',
          meta: { rank: 1 },
          component: () => import(/* webpackChunkName: "market" */ '@/views/PageMarket/Market.vue')
        },
        {
          path: '/earnings',
          name: 'earnings',
          meta: { rank: 1 },
          component: () => import(/* webpackChunkName: "lookfor" */ '@/views/PageEarnings/Earnings.vue')
        },
        {
          path: '/my',
          name: 'my',
          meta: { rank: 1, requiresAuth: true },
          component: () => import(/* webpackChunkName: "my" */ '@/views/PageMy/My.vue')
        },
        {
          path: '/market/:id',
          name: 'marketDetail',
          props: true,
          meta: { rank: 10, hideTabbar: true },
          component: () => import(/* webpackChunkName: "marketDetail" */ '@/views/PageMarketDetail/MarketDetail.vue')
        },
        {
          path: '/pay_order/:id',
          name: 'payOrder',
          props: true,
          meta: { rank: 20, hideTabbar: true },
          component: () => import(/* webpackChunkName: "marketDetail" */ '@/views/PageMarketDetail/MarketDetailOrder.vue')
        },
        {
          path: '/withdraw',
          name: 'withdraw',
          meta: { rank: 30, hideTabbar: true, requiresAuth: true },
          component: () => import(/* webpackChunkName: "Withdraw" */ '@/views/PageWithdraw/Withdraw.vue')
        },
        {
          path: '/withdraw_list',
          name: 'withdraw_list',
          meta: { rank: 40, hideTabbar: true, requiresAuth: true },
          component: () => import(/* webpackChunkName: "Withdraw" */ '@/views/PageWithdraw/WithdrawList.vue')
        },
        {
          path: '/recharge',
          name: 'recharge',
          meta: { rank: 30, hideTabbar: true, requiresAuth: true },
          component: () => import(/* webpackChunkName: "Recharge" */ '@/views/PageRecharge/Recharge.vue')
        },
        {
          path: '/wallet',
          name: 'wallet',
          meta: { rank: 10, hideTabbar: true, requiresAuth: true },
          component: () => import(/* webpackChunkName: "Wallet" */ '@/views/PageWallet/Wallet.vue')
        },
        {
          path: '/wallet_token/:id',
          props: true,
          name: 'walletToken',
          meta: { rank: 20, hideTabbar: true, requiresAuth: true },
          component: () => import(/* webpackChunkName: "Wallet" */ '@/views/PageWallet/WalletToken.vue')
        },
        {
          path: '/calculate',
          name: 'calculate',
          meta: { rank: 20, hideTabbar: true, requiresAuth: true },
          component: () => import(/* webpackChunkName: "Calculate" */ '@/views/PageCalculate/Calculate.vue')
        },
        {
          path: '/notice',
          name: 'notice',
          meta: { rank: 20, hideTabbar: true, requiresAuth: true },
          component: () => import(/* webpackChunkName: "Notice" */ '@/views/PageNotice/Notice.vue')
        },
        {
          path: '/notice/:id',
          name: 'noticeDetail',
          props: true,
          meta: { rank: 40, hideTabbar: true, requiresAuth: true },
          component: () => import(/* webpackChunkName: "Notice" */ '@/views/PageNoticeDetail/NoticeDetail.vue')
        },
        {
          path: '/personal',
          name: 'personal',
          meta: { rank: 10, hideTabbar: true, requiresAuth: true },
          component: () => import(/* webpackChunkName: "Personal" */ '@/views/PagePersonal/Personal.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/PageLogin/Login.vue')
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import(/* webpackChunkName: "ResetPwd" */ '@/views/PageResetPwd/ResetPwd.vue')
    },
    {
      path: '/regist',
      name: 'regist',
      component: () => import(/* webpackChunkName: "Register" */ '@/views/PageRegister/Register.vue')
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "NotFound" */ '@/views/PageNotFound/NotFound')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
