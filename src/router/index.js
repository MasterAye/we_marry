import Vue from 'vue'
import Router from 'vue-router'
// import layout from '@/components/layout'
Vue.use(Router)

//     {
//         path: '',
//         name: '',
//         component:resolve => require(['@components/'],resolve)
//     }

export default new Router({
    routes: [{
            path: '*',
            redirect: '/index'
        },
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'layout',
            component: resolve => require(['@/components/layout'], resolve),
            children: [{
                    path: 'test',
                    name: 'test',
                    component: resolve => require(['@/components/test/test'], resolve)
                },
                {
                    path: 'fullpage',
                    name: 'fullpage',
                    component: resolve => require(['@/components/fullpage/fullpage'], resolve)
                },
                {
                    path: 'photo3d',
                    name: 'photo3d',
                    component: resolve => require(['@/components/photograph/photo3d'], resolve)
                },
                {
                    path: 'draggable',
                    name: 'draggable',
                    component: resolve => require(['@/components/photograph/draggable'], resolve)
                },
                {
                    path: 'lineargradient',
                    name: 'lineargradient',
                    component: resolve => require(['@/components/lineargradient/lineargradient'], resolve)
                },
                {
                    path: 'brithday',
                    name: 'brithday',
                    component: resolve => require(['@/components/brithday/brithday'], resolve)
                },
            ]
        },
    ]
})
