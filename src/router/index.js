
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/signUP',
    name: 'signUP',
    component: SignUp
  },
 
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
