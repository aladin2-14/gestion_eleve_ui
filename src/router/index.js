import { createRouter, createWebHistory } from 'vue-router'
import ListEleve from "../views/ListEleve.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path:"/",
      name:"listeleve",
      component:ListEleve
    }
  ]
})

export default router
