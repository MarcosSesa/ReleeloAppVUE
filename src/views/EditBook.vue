<template>
  <div>
    <NavBar/>
   
            <div class="container" style="margin-top: 0;margin-bottom: 0px;margin-left: 0;margin-right: 0;padding-top: 59px;padding-bottom: 60px;background:rgb(230,230,230);max-width:100%;">
              <div class="row d-lg-flex d-md-flex d-xxl-flex justify-content-lg-center justify-content-md-center justify-content-xxl-center" style="height: 586px;margin-bottom: 650px;">
                <div class="col-md-12 text-center" style="background: rgb(255,255,255);border-width: 1px;border-radius: 11px;padding: 9px;max-width: 700px;">
                  <img src="https://img.freepik.com/psd-gratis/maqueta-portada-libro_125540-572.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.1358816262.1641772800" style="width: 100%;border-radius: 7px;" />
                    <div style="padding-top: 30px;padding-left:10px;padding-right:10px;">
                      <label class="form-label text-start" style="width: 100%;font-family: Abel, sans-serif;font-size: 20px;">Titulo:</label>
                      <input id="eliminarfocus" type="text" style="width: 100%;border-top-width: 0px;border-right-width: 0px;border-bottom-width: 1px;border-bottom-color: rgb(85,85,85);border-left-width: 0px;" placeholder="Titulo del libro (max 40 caracteres)" maxlength="40" minlength="4" required v-model="formtitulo" />
                    </div>
                    <div style="padding-top: 30px;padding-left:10px;padding-right:10px;">
                      <label class="form-label text-start" style="width: 100%;font-family: Abel, sans-serif;font-size: 20px;">Autor:</label>
                      <input id="eliminarfocus" type="text" style="width: 100%;border-top-width: 0px;border-right-width: 0px;border-bottom-width: 1px;border-bottom-color: rgb(85,85,85);border-left-width: 0px;" placeholder="Autor del libro (max 40 caracteres)" maxlength="40" minlength="4" required v-model="formautor" />
                    </div>
                    <!-- <div class="input-group" style="padding-top: 30px;padding-left:10px;padding-right:10px;" >
                      <label class="form-label text-start" style="width: 100%;font-family: Abel, sans-serif;font-size: 20px;">Categoria:</label>
                       <select class="custom-select" id="inputGroupSelect04" >
                          <option selected >Elig una categoria</option>
                          <option v-for="categoria in categorias.data" v-bind:key="categoria.idcategoria" value="1" >{{categoria.nombre}}</option>
                          
                        </select>
                    </div> -->
                    <div style="padding-top: 50px;padding-left:10px;padding-right:10px;">
                      <label class="form-label text-start" style="width: 100%;font-family: Abel, sans-serif;font-size: 20px;">Descripcion:</label>
                      <textarea id="eliminarfocus" style="width: 100%;min-height: 130px;color: rgb(21,21,21);font-size: 14px;border-radius: 5px;border-color: rgb(38,38,38);" v-model="formdescripcion" ></textarea>
                    </div>
                    <div style="padding-top: 16px;padding-left:10px;padding-right:10px;padding-bottom:13px;">
                      <button class="btn btn-primary" v-on:click="update(libro.idlibro)" type="button" style="width: 121.5px;padding: 5px;background: var(--bs-teal);">Guargar<i class="fa fa-save" style="padding-left: 8px;"></i></button>
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
import Swal from 'sweetalert2';




export default {
  name: "EditBook",
  components: {
    NavBar,
    Footer,
    
  },
  data(){
    return{
     bookid: String,
     libro: {},
     session:{},
     bookidowner:'',
     user:'',
     //categorias:{},
     formtitulo:'',
     formautor:'',
     formdescripcion:'',

    }
  },
  async created (){
     
     //Si no tienes ha siniciado una sesion no puedes acceder
     this.session = await env.supabase.auth.session();
     if(!this.session){
      this.$router.push("/home");
      }
    // Cargamos el libro que vamos a editar
    this.bookid = await this.$route.params.bookid;
    const { data: Libro, error} = await env.supabase
    .from('Libro')
    .select("*")
    .eq('idlibro', this.bookid)

    //Si no eres el dueño no puedes acceder a esta pestaña (Aunque pudieras no podrias alterar la base de datos ya que tropezarias con uan de las politicas  existentes)
    this.bookidowner = Libro[0].iduser;
    this.user = await env.supabase.auth.user(); 
    if (this.bookidowner != this.user.id) {
      this.$router.push("/home");
    }

    //Cargamos todas las categorias
    // this.categorias =  await env.supabase
    // .from('Categoria')
    // .select("*")
    //  console.log(this.categorias);
    
    
    //Si hay un error vuelves al home (orientado a si buscar por url un libro que no existe)
    if(error){
      console.log(error);
      this.$router.push("/home");
      }else{
        this.libro = Libro[0];
        this.formtitulo = this.libro.titulo;
        this.formautor = this.libro.autor;
        this.formdescripcion = this.libro.descripcion;
      }
 },
 methods:{
   async update(id){  
      const {error} = await env.supabase
      .from('Libro')
      .update({ 
        titulo: this.formtitulo ,
        autor: this.formautor,
        descripcion: this.formdescripcion,
      })
      .eq('idlibro', id)

      if (error) {
          let timerInterval
          Swal.fire({
            title: 'Algo salio mal, intentelo de nuevo más tarde',
            timer: 2000,
            toast:true,
            position: 'top-end',
            showConfirmButton: false,
            icon: 'error',
            color: 'rgb(47,46,65)',
            timerProgressBar: true,
            didOpen: () => {
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          })

        } else {
          let timerInterval
          Swal.fire({
            title: 'Actualizado correctamente',
            timer: 2000,
            toast:true,
            position: 'top-end',
            showConfirmButton: false,
            icon: 'success',
            color: 'rgb(8,189,74)',
            timerProgressBar: true,
            didOpen: () => {
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          })
          this.$router.push('/user/'+ this.user.id);
        }

   }

 }
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Amatic+SC&display=swap');
#eliminarfocus:focus{
 resize: none;
 outline: none;
}
</style>