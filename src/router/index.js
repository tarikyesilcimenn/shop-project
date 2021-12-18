import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../components/login.vue"
import cartDetail from "../components/cartDetail.vue"
import home from "../components/home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:home
    
  },
  {
    path: '/login',
    component:login
    
  },
  {
    path:'/cart',
    component:cartDetail
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
