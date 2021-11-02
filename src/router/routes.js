const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/LoginPage.vue'),
        name: 'Login'
      },
      {
        path: '/home', component: () => import('pages/HomePage.vue'),
        name: 'Home'
      },
      {
        path: '/auth',
        component: () => import('pages/LoginPage.vue')
      },
      {
        path: '/ContractPage', component: () => import('pages/StepperPage.vue'),
        name: 'ContractPage'
      },
      {
        path: '/settings',
        component: () => import('pages/SettingPage.vue')
      },
      {
        path: '/About',
        component: () => import('pages/AboutPage.vue')
      },
      {
        path: '/pdf',
        component: () => import('pages/PdfPage.vue')
      },
      {
        path: '/reset-password',
        component: () => import('../components/auth/resetPassword.vue')
      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
