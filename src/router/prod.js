import Vue from 'vue'
import Router from 'vue-router'
import Callback from '@/components/Callback'

const asyncHome = () => import(/* webpackChunkName: 'home' */ '@/views/home/Home')
const asyncLogin = () => import(/* webpackChunkName: 'login' */ '@/views/login/Login')
const asyncBattles = () => import(/* webpackChunkName: 'battles' */ '@/views/battles/Battles')
const asyncPublicBattles = () => import(/* webpackChunkName: 'battles' */ '@/views/battles/PublicBattles')
const asyncPrivateBattles = () => import(/* webpackChunkName: 'battles' */ '@/views/battles/PrivateBattles')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: asyncHome },
    { path: '/login', name: 'Login', component: asyncLogin },
    { path: '/callback', component: Callback },
    {
      path: '/battles',
      name: 'Battles',
      component: asyncBattles,
      children: [
        {path: 'private', component: asyncPrivateBattles},
        {path: 'public', component: asyncPublicBattles},
        {path: '/', component: asyncPublicBattles}
      ]
    }
  ]
})
