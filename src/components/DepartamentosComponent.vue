<template>
    <div>
        <h1>Departamentos</h1>
        <div v-if="status == false">
            <img src="../assets/images/loading.gif" />
        </div>
        <table v-else class="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dep in deptos" :key="dep">
                    <td>{{dep.idDepartamento}}</td>
                    <td>{{dep.nombre}}</td>
                    <td>{{dep.localidad}}</td>
                    <td>
                        <router-link class="btn btn-warning"
                        :to="'/detalle/'+dep.idDepartamento+'/'+dep.nombre+'/'+dep.localidad">
                        Detalle
                        </router-link>
                    </td>
                    <td>
                        <router-link class="btn btn-info"
                        :to="'/update/'+dep.idDepartamento">
                        Update
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceDeptos from './../services/ServiceDeptos';
const service = new ServiceDeptos();
    export default {
        name: "DepartamentosComponent",
        data() {
            return {
                deptos: [],
                status: false
            }
        },
        mounted(){
            service.getDepartamentos().then(result =>{
                this.deptos = result;
                this.status = true;
            })
        }
    }
</script>