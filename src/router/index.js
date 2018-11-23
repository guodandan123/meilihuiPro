import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// import Index  from '../components/index.vue'
import Silo  from '../components/silo.vue'
import Brand from '../components/brand.vue'
import List from '../components/list.vue'
import Detail from '../components/detail.vue'

import Crossborder from '../components/crossborder.vue'
import Women from '../components/women.vue'
import Recommend from '../components/recommend.vue'
import Men from '../components/men.vue'
import Cosmetics from '../components/cosmetics.vue'



Vue.use(Router)

export default new Router({
  routes: [
   
   
    {
      path: '/silo',
      component:Silo,
      children:[
         {
          path: 'crossborder',
          component:Crossborder,
          
          },
          {
          path: 'women',
          component: Women,
          
          },
          {
          path: 'recommend',
          component: Recommend,
          
          },
          {
          path: 'men',
          component:Men,
          
          },
          {
          path: 'cosmetics',
          component:Cosmetics,
          
          },
          {
          path: '/',
          redirect:'/silo/Recommend'
          
          },
      ]
      
    },
     {
      path: '/brand/:logoid',
      component:Brand,
      
    },
    {
      path: '/list',
      component:List,
      
    },
    {
      path: '/detail',
      component:Detail,
      
    },
   
     {
      path: '/',
      // component:Silo,
      redirect:'/silo/Recommend'
      
    },
  ]
})


