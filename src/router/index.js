import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import List from '../components/ToDoList/List.vue'
import Cep from '../components/FormCep/Cep.vue'
import Moedas from '../components/Moedas/Moedas.vue'
import Relogio from '../components/Relogio/Relogio.vue'
import Carro from '../components/Carro/Carro.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/cep',
    name: 'cep',
    component: Cep
  },
  {
    path: '/moedas',
    name: 'moedas',
    component: Moedas
  },
  {
    path: '/relogio',
    name: 'relogio',
    component: Relogio
  },
  {
    path: '/carro',
    name: 'carro',
    component: Carro
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
