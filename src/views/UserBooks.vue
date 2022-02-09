<template>
  <div style="background:rgb(230,230,230)">
    <NavBar/>
    <div class="container" style="margin-top:100px;">
      <div class="row" v-for="libro in libros" v-bind:key="libro.titulo" style="background-color:white;margin-bottom:30px;border-radius:7px;">
    <div class="col d-flex d-xxl-flex justify-content-center justify-content-xxl-center align-items-xxl-center" style="padding: 7px;">
      <img src="https://www.gtm-store.com/wp-content/uploads/2021/10/Presentacion-05.jpg" style="width: 100%;border-radius: 8px;" />
    </div>
    <div class="col-8" style="padding-top: 13px;">
        <h1 style="text-align:left;">{{libro.titulo}}</h1>
        <hr style="margin-top: 5px;" />
        <p class="text-break" style="max-height: 96px;text-align:left;">{{libro.descripcion}}</p>
        <div style="padding-top: 5px;padding-bottom: 5px;text-align:left;">
          <button class="btn btn-primary" v-on:click="ver(libro.idlibro)" type="button" style="margin-right: 12px;width: 70px;padding: 5px;color: var(--bs-white);background: var(--bs-teal);border-color: var(--bs-white);">Ver
            <i class="fa fa-eye" style="padding-left: 5px;"></i>
          </button>
          <button class="btn btn-primary" type="button" style="width: 80px;padding: 5px;background: var(--bs-teal);border-color: rgb(255, 255, 255);border-top-color: rgb(255,;border-right-color: 255,;border-bottom-color: 255);border-left-color: 255,;">Editar
            <i  class="fa fa-edit" style="padding-left: 5px;"></i>
          </button>
        </div>
    </div>
     <div class="col-1 text-end" style="padding: 21px;"><i v-on:click="borrar(libro.idlibro)" class="fa-solid fa-trash-can" style="font-size: 25px;color: var(--bs-red);"></i></div>
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
  name: "UserBooks",
  components: {
    NavBar,
    Footer,
    
  },
  data(){
    return{
     userid: String,
     libros: {},
    }
  },
  async created (){
     this.userid = await this.$route.params.userid;
     console.log(this.userid);

    const { data: Libro, error} = await env.supabase
    .from('Libro')
    .select("*")
    .eq('iduser',this.userid)
 
    if(error){
      console.log(error);
      this.$router.push("/home");
      }else{
        this.libros = Libro;
      }
    
    

 },
 methods:{
   async borrar(id){ 
    await env.supabase
    .from('Libro')
    .delete()
    .eq('idlibro', id)
   },
    ver(id){ 
    this.$router.push('/book/' + id)
   }
 }
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
</style>