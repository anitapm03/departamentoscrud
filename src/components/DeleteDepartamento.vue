<template>
  <div>
    <h1>Eliminar depto</h1>
  </div>
</template>

<script>
import ServiceDeptos from './../services/ServiceDeptos';
const service = new ServiceDeptos();
export default {
    name: "DeleteDepartamento",
    mounted(){
        service.deleteDepto(this.$route.params.id).then(result => {
            console.log(result);
            this.$router.push("/departamentos")
        })
    }
}
</script>

<style>

</style>