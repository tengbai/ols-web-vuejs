import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import TrainingCreatePage from '@/components/TrainingCreatePage'
import TrainingListPage from '@/components/TrainingListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/training/create',
      name: 'training.create',
      component: TrainingCreatePage
    },
    {
      path: '/training/list',
      name: 'training.list',
      component: TrainingListPage
    }
  ]
})
