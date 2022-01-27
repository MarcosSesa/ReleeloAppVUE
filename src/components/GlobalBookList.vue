<template>
  <div class="card" v-for="libro in libros.data" v-bind:key="libro.titulo">
    <div class="card-body">
      {{libro.titulo}}
      {{libro.autor}}
    </div>
  </div>
 


  
</template>

<script>
import env from '../environment.js';

  export default {

    
    name: "GlobalBookList",
    data(){
      return{
       libros: {},
      }
    },
    async created (){
      this.libros = await env.supabase
        .from('Libro')
        .select('*')
        .range(0, 3)

        console.log(this.libros.data);
    }
  
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Amatic+SC&display=swap');

</style>