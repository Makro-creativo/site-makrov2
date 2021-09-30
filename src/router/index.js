import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Portfolio from '../views/Portfolio'
import Marks from '../views/Marks'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },

  {
    path: '/marcas',
    name: 'Marks',
    component: Marks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
