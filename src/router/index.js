import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import Minesweeper from '@/pages/Minesweeper'
import Games from '@/pages/Games'
import Dos from '@/pages/Dos'
import TicTacToe from '@/pages/TicTacToe'
import Tetris from '@/pages/Tetris'
import Diploma from '@/pages/Diploma'

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
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/dos',
      name: 'Dos',
      component: Dos
    },
    {
      path: '/tetris',
      name: 'Tetris',
      component: Tetris
    },
    {
      path: '/tictactoe',
      name: 'TicTacToe',
      component: TicTacToe
    },
    {
      path: '/diploma',
      name: 'Diploma',
      component: Diploma
    }

  ]
})
