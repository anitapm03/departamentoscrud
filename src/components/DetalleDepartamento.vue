<template>
  <div>
    <h1>Detalle del depto</h1>

    <h2>ID: {{$route.params.id}}</h2>
    <h2>Nombre: {{$route.params.nombre}}</h2>
    <h2>Localidad: {{$route.params.localidad}}</h2>
  </div>
</template>

<script>
//import ServiceDeptos from './../services/ServiceDeptos';
//const service = new ServiceDeptos();
export default {
    name: "DetalleDepartamento",
    data() {
        return{

        }
    },
    mounted() {

    }
}
</script>

<style>

</style>