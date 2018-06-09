import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import Minesweeper from '@/pages/Minesweeper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/minesweeper',
      name: 'Minesweeper',
      component: Minesweeper
    }
  ]
})
