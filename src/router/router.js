// 初始化路由实力  并且导出去
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入登录组件
import Login from '@/views/login'
import Layout from '@/views/layout.vue'
// 导入欢迎页面
import Welcom from '@/views/welcome'

Vue.use(VueRouter)

const routes = [
    {
        // 登录
        path: '/login', component: Login
    },
    {
        // 首页架子
        path: '/', component: Layout,
        children: [
            // 欢迎页面
            { path: '/', component: Welcom }
        ]
    }
]
const router = new VueRouter({ routes })

export default router
