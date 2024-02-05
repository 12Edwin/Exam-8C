import Vue from 'vue'
import VueRouter from 'vue-router'
import LandPage from '../views/LandView.vue'
import HomePage from "@/views/HomePage.vue";
import Layout from "@/Layout.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landPage',
    component: LandPage
  },
  {
    path: '/exam',
    name: 'exam',
    component: Layout,
    children:[
      {
        path: '',
        name: 'home',
        component: HomePage
      },
      {
        path: 'bread',
        name: 'bread',
        component: () => import(/* webpackChunkName: "about" */ '../views/Bread.vue')
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
