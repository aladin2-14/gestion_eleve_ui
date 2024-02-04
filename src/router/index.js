import { createRouter, createWebHistory } from 'vue-router'
import ListEleve from "../views/ListEleve.vue"
import ListeEmployes from "../views/ListeEmployes.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path:"/listeleve",
      name:"listeleve",
      component:ListEleve
    },
    
    {
      path:"/liste-employer",
      name:"listemployer",
      component:ListeEmployes
    }
  ]
})

export default router
