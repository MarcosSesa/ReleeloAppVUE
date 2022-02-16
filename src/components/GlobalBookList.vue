<template >

<div style="background:#ffffff; padding-bottom:30px;">
   <div class="container" >
      <div class="row" style="padding-right: 2px;">
        <div  class="col-md-3" v-for="libro in libros.data" v-bind:key="libro.titulo" style="margin-top: 10px;padding:10px;">
          <div id="anunciolibro" v-on:click="verlibro(libro.idlibro)" style="background:#ffffff;padding: 8px;border-radius: 7px;box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);">
            <img src="https://www.gtm-store.com/wp-content/uploads/2021/10/Presentacion-05.jpg" style="width: 100%;border-radius: 7px;" />
            <h1 style="padding-top: 9px;font-family: Abel, sans-serif;text-align: left;color: #2f2e41;">{{libro.titulo}}</h1>
            <p style="text-align: left;color: #2f2e41">{{libro.descripcion.trim().substring(0,150)}} ...</p>
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
       nextlibros:{},
       page: 0,
       rpp: 10,


      }
    },
    async created (){
        
        if(this.filter != null){
          this.libros = await env.supabase
        .from('Libro')
        .select('*')
        .like('titulo', "%" + this.filter + "%")
        .range(this.page*this.rpp, this.page*this.rpp+this.rpp)
        }else{
        this.libros = await env.supabase
        .from('Libro')
        .select('*')
        .range(this.page*this.rpp, this.page*this.rpp+this.rpp)
        }

          this.getnextbooks();
        

    },
   methods:{
      verlibro(id){ 
        this.$router.push('/book/' + id)
      },
      getnextbooks() {
        window.onscroll = async function(){
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          console.log("Fin de la pagina");
          //this.page++;
          //this.nextlibros =  await env.supabase
            //.from('Libro')
            //.select('*')
           // .range(this.page*this.rpp, this.page*this.rpp+this.rpp)
         // console.log(this.nextlibros);
            
        }
      }
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