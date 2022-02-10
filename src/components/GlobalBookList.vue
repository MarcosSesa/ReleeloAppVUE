<template >

<div style="background:rgb(230,230,230); padding-bottom:30px;">
   <div class="container" >
      <div class="row" style="padding-right: 2px;">
        <div  class="col-md-3" v-for="libro in libros.data" v-bind:key="libro.titulo" style="margin-top: 10px;padding:10px;">
          <div id="anunciolibro" v-on:click="verlibro(libro.idlibro)" style="background: #ffffff;padding: 8px;border-radius: 7px;">
            <img src="https://www.gtm-store.com/wp-content/uploads/2021/10/Presentacion-05.jpg" style="width: 100%;border-radius: 7px;" />
            <h1 style="padding-top: 9px;font-family: Abel, sans-serif;text-align: left">{{libro.titulo}}</h1>
            <p style="text-align: left;">{{libro.descripcion.trim().substring(0,150)}} ...</p>
          </div>
        </div>
      </div>
    </div> 
</div>
 


</template>

<script>
import env from '../environment.js';

  export default {

    
    name: "GlobalBookList",
    props:{
      UserId: String,
      filter: String,

    },
    data(){
      return{
       libros: {},

      }
    },
    async created (){
        
        if(this.filter != null){
          this.libros = await env.supabase
        .from('Libro')
        .select('*')
        .like('titulo', "%" + this.filter + "%")
        .range(0, 9)
        }else{
          this.libros = await env.supabase
        .from('Libro')
        .select('*')
        .range(0, 9)
        }  
    },
    methods:{
      verlibro(id){ 
        this.$router.push('/book/' + id)
      }
    }
  
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Amatic+SC&display=swap');
  .col-md-3 {
    display: flex;
    flex-wrap: wrap;
  }
  #anunciolibro:hover{
    cursor: pointer;
  }

</style>