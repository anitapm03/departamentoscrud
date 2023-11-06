<template>
  <div>
    <h1>Update</h1>
    <form v-if="depto"
    v-on:submit.prevent="updateDepartamento()" 
    style="width: 500px; margin: 0 auto">
            <!-- <label >ID del departamento</label>
            <input type="disabled" class="form form-control" v-model="depto.idDepartamento"/>
            <br/> -->
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
    name: "UpdateDepartamento",
    data() {
        return {
            depto:{
                idDepartamento: this.$route.params.id,
                nombre: "",
                localidad: ""
            }
        }
    },
    methods:{
        updateDepartamento(){

        }
    },
    mounted() {
        service.getDeptoId(this.$route.params.id).then(result =>{
            this.depto = result;

        })
    }

}
</script>

<style>

</style>