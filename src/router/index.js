import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import mine from '@/components/page/mine'
import moocText from '@/components/page/moocText'
import moocCourse from '@/components/page/moocCourse'
import moocFound from '@/components/page/moocFound'
import moocSubmit from '@/components/page/moocSubmit'
import moocReser from '@/components/page/moocReser'
import moocBuyyes from '@/components/page/moocBuyyes'
import moocPersonal from '@/components/page/moocPersonal'
import moocPerson from '@/components/page/moocPerson'
import input from '@/components/page/input'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/moocText',
      name: 'moocText',
      component: moocText
    },
    {
      path: '/moocCourse',
      name: 'moocCourse',
      component: moocCourse
    },
    {
      path: '/moocFound',
      name: 'moocFound',
      component: moocFound
    },
    {
      path: '/moocReser',
      name: 'moocReser',
      component:moocReser,
      children:[
        {
          path: '/moocSubmit',
          name: 'moocSubmit',
          component:moocSubmit
        }
      ]
    },
    {
      path: '/moocBuyyes',
      name: 'moocBuyyes',
      component:moocBuyyes
    },
    {
      path: '/moocPersonal',
      name: 'moocPersonal',
      component:moocPersonal
    },
    {
      path: '/moocPerson',
      name: 'moocPerson',
      component:moocPerson
    },
    {
      path: '/input',
      name: 'input',
      component:input
    }
  ]
})
