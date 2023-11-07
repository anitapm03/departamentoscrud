import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import DepartamentosComponent from './components/DepartamentosComponent.vue'
import CreateDepartamento from './components/CreateDepartamento.vue'
import DetalleDepartamento from './components/DetalleDepartamento.vue'
import UpdateDepartamento from './components/UpdateDepartamento.vue'
import DeleteDepartamento from './components/DeleteDepartamento.vue'

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/departamentos", component: DepartamentosComponent
    },
    {
        path: "/crear", component: CreateDepartamento
    },
    {
        path: "/detalle/:id/:nombre/:localidad", component: DetalleDepartamento
    },
    {
        path: "/update/:id", component: UpdateDepartamento
    },
    {
        path: "/delete/:id", component: DeleteDepartamento
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;