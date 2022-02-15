<template>
  <div style="background:white">
    <NavBar />
    <div class="container" style="margin-top:100px;">
      <div class="row" v-for="libro in libros" v-bind:key="libro.titulo"
        style="background-color:white;margin-bottom:30px;border-radius:7px;box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);">
        <div class="col d-flex d-xxl-flex justify-content-center justify-content-xxl-center align-items-xxl-center"
          style="padding: 7px;">
          <img src="https://www.gtm-store.com/wp-content/uploads/2021/10/Presentacion-05.jpg"
            style="width: 100%;border-radius: 8px;" />
        </div>
        <div class="col-8" style="padding-top: 13px;">
          <h1 style="text-align:left;">{{libro.titulo}}</h1>
          <hr style="margin-top: 5px;" />
          <p class="text-break" style="max-height: 96px;text-align:left;">{{libro.descripcion.trim().substring(0,350)}} ...</p>
          <div style="padding-top: 5px;padding-bottom: 5px;text-align:left;margin-bottom:20px;">
            <button class="btn btn-primary" id="boton" v-on:click="verlibro(libro.idlibro)" type="button" style="margin-right:15px;">Ver
              <i class="fa fa-eye" style="padding-left: 5px;"></i>
            </button>
            <button class="btn btn-primary" id="boton" v-on:click="editarlibro(libro.idlibro)" type="button">Editar
              <i class="fa fa-edit" style="padding-left: 5px;"></i>
            </button>
          </div>
        </div>
        <div class="col-1 text-end" style="padding: 21px;">
          <i  id="borrar" v-on:click="borrar(libro.idlibro)" class="fa-solid fa-trash-can"
            style=""></i>
        </div>
      </div>
    </div>

    <div v-if="this.libros.lenght == 0">
    <div class="container" style="margin-top: 75px;">
    <div class="row d-xxl-flex justify-content-xxl-center">
        <div class="col-md-12 text-center">
          <img src="..\assets\vacio.svg" style="width: 480.656px;" />
          <h1 style="padding-top: 32px;font-size: 39px;font-family: Abel, sans-serif;">Aun no tienes ningún libro en tu biblioteca</h1>
        </div>
    </div>
</div>
    </div>

    <Footer />
  </div>

</template>



<script>

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import env from "../environment.js";
import Swal from 'sweetalert2';




export default {
  name: "UserBooks",
  components: {
    NavBar,
    Footer,
    
  },
  data(){
    return{
     userid: '',
     libros: {},
     session: {},
     idlibroprueba: '',
    }
  },
  async created (){
    this.userid = await this.$route.params.userid;
    this.session = await env.supabase.auth.session();
    if(!this.session){
      this.$router.push("/home");
    }
     
    const { data: Libro, error} = await env.supabase
    .from('Libro')
    .select("*")
    .eq('iduser',this.userid)
 
   
    this.idlibroprueba = Libro[0].iduser;
    if (this.idlibroprueba != this.userid) {
      this.$router.push("/home");
    }


    
    if(error){
      console.log(error);
      this.$router.push("/home");
    }else{
      this.libros = Libro;
    }
    
    

 },
 methods:{
   async borrar(id){ 

  Swal.fire({
  title: 'Estas seguro de que desea borrar este libro?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#c91e1e',
  color:'#d33',
  iconColor:'#c91e1e',
  cancelButtonColor: '#8f9491',
  confirmButtonText: 'Borrar'
  }).then((result) => {
  if (result.isConfirmed) {
     env.supabase
    .from('Libro')
    .delete()
    .eq('idlibro', id)

    this.$router.go();
  }
})
},
verlibro(id){ 
  this.$router.push('/book/' + id)
},
editarlibro(id){ 
  this.$router.push('/edit/' + id)
},
  
 }
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
#borrar:hover {
  cursor: pointer;
  color: rgb(187, 34, 34);
}
#borrar{
  font-size: 25px;
  color: rgb(29, 29, 29);
  padding:7px;
}
#boton:hover{
  background-color: rgb(255, 255, 255);
  border: solid 1px rgb(0,191,166);
  color:rgb(0,191,166) ;
}
#boton{
  width: 80px; 
  border-radius: 7px;
  padding: 5px;
  background: #00bfa6;
  border-color: #00bfa6;
}
</style>