<template>
  <div>
    <NavBar/>
    <div class="container">
      <div class="row">
          <div class="col-md-3" v-for="libro in libros" v-bind:key="libro.titulo">
              <div class="card" style="width: 272px;border-radius: 14px;background: #ffffff;border-color: rgb(154,156,157);box-shadow: 0px 0px 8px 0px;max-width: 272px;max-height: 200;"><img class="card-img-top w-100 d-block" style="height: 199px;border-radius: 14px;margin: 0px;padding: 5px;opacity: 1;filter: blur(0px) brightness(100%) invert(0%);" src="840_560.jpg" />
                  <div class="card-body">
                      <h4 class="text-start card-title" style="color: rgb(47,46,65);">{{libro.titulo}}</h4>
                      <p class="text-start card-text" style="color: rgb(47,46,65);">{{libro.descripcion}}</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
    <Footer/>
  </div>

</template>



<script>

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import env from "../environment.js";




export default {
  name: "SingleBook",
  components: {
    NavBar,
    Footer,
    
  },
  data(){
    return{
     bookid: String,
     libros: {},
    }
  },
  async created (){
     this.bookid = await this.$route.params.bookid;
     console.log(this.bookid);

    const { data: Libro, error} = await env.supabase
    .from('Libro')
    .select("*")
    .eq('idlibro', this.bookid)

    
    
    if(error){
      console.log(error);
      this.$router.push("/home");
      }else{
        console.log(Libro);
        this.libros = Libro;
      }
    
    

 },
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
</style>