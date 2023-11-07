<template>
    <div>
        <h1>Create depto</h1>

        <form v-on:submit.prevent="insertDepartamento()" style="width: 500px; margin: 0 auto">
            <label >ID del departamento</label>
            <input type="number" class="form form-control" v-model="depto.idDepartamento"/>
            <br/>
            <label >Nombre</label>
            <input type="text" class="form form-control" v-model="depto.nombre"/>
            <br/>
            <label >Localidad</label>
            <input type="text" class="form form-control" v-model="depto.localidad"/>
            <br>
            <button class="btn btn-success">Crear!</button>
        </form>
    </div>
</template>

<script>
import ServiceDeptos from './../services/ServiceDeptos';
const service = new ServiceDeptos();
    export default {
        name: "CreateDepartamento",
        data() {
            return {
                depto: {
                    idDepartamento: 0,
                    nombre: "",
                    localidad: ""
                }
            }
        },
        methods: {
            insertDepartamento(){
                service.insertDepartamento(this.depto).then(result => {
                    console.log(result);
                    this.$router.push("/departamentos");
                })
            }
        }
    }
</script>