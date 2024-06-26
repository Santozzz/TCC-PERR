import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/Cadastro',
      name: 'cadastro',
      component: () => import('../views/Cadastro.vue')
    },
    {
      path: '/Entrar',
      name: 'entrar',
      component: () => import('../views/Entrar.vue')
    },
    {
      path: '/VagaEmprego',
      name: 'vagaemprego',
      component: () => import('../views/VagaEmprego.vue')
    },
    {
      path: '/Notificacoes',
      name: 'notificacoes',
      component: () => import('../views/Notificacoes.vue')
    },
    {
      path: '/SeuCurriculo',
      name: 'seucurriculo',
      component: () => import('../views/SeuCurriculo.vue')
    },
    {
      path: '/Favoritos',
      name: 'favoritos',
      component: () => import('../views/Favoritos.vue')
    },
    {
      path: '/Cursos',
      name: 'cursos',
      component: () => import('../views/Cursos.vue')
    },
    {
      path: '/Entrevista',
      name: 'entrevista',
      component: () => import('../views/Entrevista.vue')
    },
  ]
})

export default router
