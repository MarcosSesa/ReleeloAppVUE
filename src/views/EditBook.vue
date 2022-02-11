<template>
  <div>
    <NavBar/>
   
            <div class="container" style="margin-top: 0;margin-bottom: 0px;margin-left: 0;margin-right: 0;padding-top: 59px;padding-bottom: 60px;background:rgb(230,230,230);max-width:100%;">
              <div class="row d-lg-flex d-md-flex d-xxl-flex justify-content-lg-center justify-content-md-center justify-content-xxl-center" style="height: 586px;margin-bottom: 350px;">
                <div class="col-md-12 text-center" style="background: rgb(255,255,255);border-width: 1px;border-radius: 11px;padding: 9px;max-width: 700px;">
                  <img src="https://img.freepik.com/psd-gratis/maqueta-portada-libro_125540-572.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.1358816262.1641772800" style="width: 100%;border-radius: 7px;" />
                    <div style="padding-top: 30px;padding-left:10px;padding-right:10px;">
                      <label class="form-label text-start" style="width: 100%;font-family: Abel, sans-serif;font-size: 20px;">libro:</label>
                      <input id="eliminarfocus" type="text" style="width: 100%;border-top-width: 0px;border-right-width: 0px;border-bottom-width: 1px;border-bottom-color: rgb(85,85,85);border-left-width: 0px;" placeholder="" maxlength="40" minlength="4" required />
                    </div>
                    <div style="padding-top: 30px;padding-left:10px;padding-right:10px;">
                      <label class="form-label text-start" style="width: 100%;font-family: Abel, sans-serif;font-size: 20px;">Autor:</label>
                      <input id="eliminarfocus" type="text" style="width: 100%;border-top-width: 0px;border-right-width: 0px;border-bottom-width: 1px;border-bottom-color: rgb(85,85,85);border-left-width: 0px;" placeholder="" maxlength="40" minlength="4" required />
                    </div>
                    <div style="padding-top: 50px;padding-left:10px;padding-right:10px;">
                      <label class="form-label text-start" style="width: 100%;font-family: Abel, sans-serif;font-size: 20px;">Descripcion:</label>
                      <textarea id="eliminarfocus" style="width: 100%;min-height: 130px;color: rgb(21,21,21);font-size: 14px;border-radius: 5px;border-color: rgb(38,38,38);"></textarea>
                    </div>
                    <div style="padding-top: 16px;padding-left:10px;padding-right:10px;">
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
     idowner:'',
     user:'',

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

    //Si no eres el dueño no puedes acceder a esta pestaña (Aunque pudieras no podrias alterar la abse de datos ya que tropezarias con uan de las politicas RLS existentes)
    this.idowner = Libro[0].iduser;
    this.user = await env.supabase.auth.user(); 
    if (this.idowner != this.user.id) {
      this.$router.push("/home");
    }
    
    //Si hay un error vuelves al home (orientado a si buscar por url un libro que no existe)
    if(error){
      console.log(error);
      this.$router.push("/home");
      }else{
        this.libro = Libro[0];
      }
 },
 methods:{
   update(id){
      console.log(id);
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