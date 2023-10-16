import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes=[
    {
        name:'login',
        path:'/',
        component:()=>import('@/views/login.vue')
    }
]
const router=new VueRouter({
    routes
})
export default router