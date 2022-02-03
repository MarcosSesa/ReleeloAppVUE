
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import SingleBook from '../views/SingleBook.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signUP',
    component: SignUp
  },
  {
    path: '/book/:bookid',
    name: 'SingleBook',
    component: SingleBook
  },
 
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
