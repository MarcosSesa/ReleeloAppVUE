
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import SingleBook from '../views/SingleBook.vue'
import UserBooks from '../views/UserBooks.vue'
import EditBook from '../views/EditBook.vue'

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
  {
    path: '/user/:userid',
    name: 'UserBooks',
    component: UserBooks
  },
  {
    path: '/edit/:bookid',
    name: 'EditBook',
    component: EditBook
  },
 
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
