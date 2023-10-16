import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes=[
    {
        name:'index',
        path:'/',
        component:()=>import('@/views/index.vue')
    },{
        name:'login',
        path:'/login',
        component:()=>import('@/views/login.vue')
    }
]
const router=new VueRouter({
    routes
})
export default router