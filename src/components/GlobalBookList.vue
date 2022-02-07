<template>

  
  <div class="container" style="margin-top: 0;margin-bottom: 0px;margin-left: 0;margin-right: 0;padding-top: 59px;padding-bottom: 60px;background: var(--bs-teal);max-width:100%;">
    <div class="row">
        <div class="col-md-3" v-for="libro in libros.data" v-bind:key="libro.titulo">
            <div class="card" style="width: 272px;border-radius: 14px;background: #ffffff;border-color: rgb(154,156,157);box-shadow: 0px 0px 8px 0px;max-width: 272px;max-height: 200;">
              <img class="card-img-top w-100 d-block" style="height: 199px;border-radius: 14px;margin: 0px;padding: 5px;opacity: 1;filter: blur(0px) brightness(100%) invert(0%);" src="https://img.freepik.com/psd-gratis/maqueta-portada-libro_125540-572.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.1358816262.1641772800" />
                <div class="card-body">
                    <h4 class="text-start card-title" style="color: rgb(47,46,65);">{{libro.titulo}}</h4>
                    <p class="text-start card-text" style="color: rgb(47,46,65);">{{libro.descripcion}}</p>
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
        

      
      
        
       
    }
  
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Amatic+SC&display=swap');

</style>