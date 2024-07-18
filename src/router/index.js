import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from ''
import HomeView from '../views/Manage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/Login.vue')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Manage.vue'),
    redirect:"/home",
    children:[
      {path:'home', name:'首页', component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')},
      {path:'anno', name:'公告', component: () => import(/* webpackChunkName: "about" */ '../views/Anno.vue')},
      {path:'message', name:'留言', component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')},
      {path:'comm', name:'商品', component: () => import(/* webpackChunkName: "about" */ '../views/Commodity.vue')},
      {path:'exh', name:'展会', component: () => import(/* webpackChunkName: "about" */ '../views/Exhibition.vue')},
      {path:'user', name:'用户', component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')},
      {path:'exdetail', name:'用户', component: () => import(/* webpackChunkName: "about" */ '../views/Exdetail.vue')},
      {path:'comdetail', name:'用户', component: () => import(/* webpackChunkName: "about" */ '../views/Comdetail.vue')},
      {path:'meorder', name:'用户', component: () => import(/* webpackChunkName: "about" */ '../views/Meorder.vue')}
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
