import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  //解决路径中#/路径（哈希模式）的问题
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '自述文件'},
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['../components/page/Dashboard.vue'], resolve),
          meta: {
            title: '系统首页',
            // 是否需要认证字段
            requiresAuth: true
          }
        },
        {
          path: '/icon',
          component: resolve => require(['../components/page/Icon.vue'], resolve),
          meta: {
            title: '自定义图标',
            requiresAuth: true
          }
        },
        {
          path: '/table',
          component: resolve => require(['../components/page/BaseTable.vue'], resolve),
          meta: {
            title: '基础表格',
            requiresAuth: true
          }
        },
        {
          path: '/tabs',
          component: resolve => require(['../components/page/Tabs.vue'], resolve),
          meta: {
            title: 'tab选项卡',
            requiresAuth: true
          }
        },
        {
          path: '/form',
          component: resolve => require(['../components/page/BaseForm.vue'], resolve),
          meta: {
            title: '基本表单',
            requiresAuth: true
          }
        },
        {
          // 富文本编辑器组件
          path: '/editor',
          component: resolve => require(['../components/page/VueEditor.vue'], resolve),
          meta: {
            title: '富文本编辑器',
            requiresAuth: false
          }
        },
        {
          // markdown组件
          path: '/markdown',
          component: resolve => require(['../components/page/Markdown.vue'], resolve),
          meta: {
            title: 'markdown编辑器',
            requiresAuth: true
          }
        },
        {
          // 图片上传组件
          path: '/upload',
          component: resolve => require(['../components/page/Upload.vue'], resolve),
          meta: {
            title: '文件上传',
            requiresAuth: true
          }
        },
        {
          // vue-schart组件
          path: '/charts',
          component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
          meta: {
            title: 'schart图表',
            requiresAuth: true
          }
        },
        {
          // 拖拽列表组件
          path: '/drag',
          component: resolve => require(['../components/page/DragList.vue'], resolve),
          meta: {
            title: '拖拽列表',
            requiresAuth: true
          }
        },
        {
          // 拖拽Dialog组件
          path: '/dialog',
          component: resolve => require(['../components/page/DragDialog.vue'], resolve),
          meta: {
            title: '拖拽弹框',
            requiresAuth: true
          }
        },
        {
          // 国际化组件
          path: '/i18n',
          component: resolve => require(['../components/page/I18n.vue'], resolve),
          meta: {
            title: '国际化',
            requiresAuth: true
          }
        },
        {
          // 权限页面
          path: '/permission',
          component: resolve => require(['../components/page/Permission.vue'], resolve),
          meta: {
            title: '权限测试',
            permission: true,
            requiresAuth: false
          }
        },
        {
          path: '/404',
          component: resolve => require(['../components/page/404.vue'], resolve),
          meta: {
            title: '404',
            requiresAuth: false
          }
        },
        {
          path: '/403',
          component: resolve => require(['../components/page/403.vue'], resolve),
          meta: {
            title: '403',
            requiresAuth: false
          }
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
      path: '/register',
      component: resolve => require(['../components/page/Register.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
