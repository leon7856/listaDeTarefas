import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import List from '../components/ToDoList/List.vue'
import Cep from '../components/FormCep/Cep.vue'
import Moedas from '../components/Moedas/Moedas.vue'
import Relogio from '../components/Relogio/Relogio.vue'
import Carro from '../components/Carro/Carro.vue'
import Porsche from '../components/Porsche/Porsche.vue'
import Lamborghine from '../components/Lamborghine-Aventador/Lamborghine.vue'
import Nissan from '../components/Nissan/Nissan.vue'
import Urus from '../components/Urus/Urus.vue'
import Range from '../components/Range/Range.vue'
import Volvo from '../components/Volvo/Volvo.vue'



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
  },
  {
    path: '/porsche',
    name: 'porsche',
    component: Porsche
  },
  {
    path: '/lamborghine',
    name: 'lamborghine',
    component: Lamborghine
  },
  {
    path: '/nissan',
    name: 'nissan',
    component: Nissan
  },
  {
    path: '/urus',
    name: 'urus',
    component: Urus
  },
  {
    path: '/range',
    name: 'range',
    component: Range
  },
  {
    path: '/volvo',
    name: 'volvo',
    component: Volvo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
