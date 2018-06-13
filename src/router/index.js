import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/Login'
import Battles from '@/views/battles/Battles'
import PublicBattles from '@/views/battles/PublicBattles'
import PrivateBattles from '@/views/battles/PrivateBattles'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/login', name: 'Login', component: Login },
    {
      path: '/battles',
      name: 'Battles',
      component: Battles,
      children: [
        {path: 'private', component: PrivateBattles},
        {path: 'public', component: PublicBattles},
        {path: '/', component: PublicBattles}
      ]
    }
  ]
})
