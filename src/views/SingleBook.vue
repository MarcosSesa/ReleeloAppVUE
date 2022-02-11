<template>
  <div>
    <NavBar/>
    <div class="container" style="margin-top: 0;margin-bottom: 0px;margin-left: 0;margin-right: 0;padding-top: 59px;padding-bottom: 60px;background:rgb(230,230,230);max-width:100%;">
      <div class="row d-lg-flex d-md-flex d-xxl-flex justify-content-lg-center justify-content-md-center justify-content-xxl-center" style="height: 586px;margin-bottom: 150px;">
        <div class="col-md-12 text-center"  style="background: rgb(255,255,255);border-width: 1px;border-radius: 11px;padding: 9px;max-width: 700px;">
            <img style="width: 100%;border-radius: 7px;" src="https://img.freepik.com/psd-gratis/maqueta-portada-libro_125540-572.jpg?size=626&amp;ext=jpg&amp;ga=GA1.2.1358816262.1641772800" />
            <h1 class="text-start" style="font-family: Abel, sans-serif;margin-top: 5px;">{{libro.titulo}}</h1>
            <h1 class="text-start" style="font-size: 15px;font-family: Abel, sans-serif;margin-top: -10px;margin-left: 3px;">{{libro.autor}}</h1>
            <p class="text-start" style="font-family: Abel, sans-serif;margin-top: 19px;">{{libro.descripcion}}</p>
            <div><button class="btn btn-primary" type="button" style="width: 148.5px;background: var(--bs-teal);border-radius: 27px;font-family: Abel, sans-serif;">Chat<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style="margin-left: 5px;margin-bottom: 2px;">
                        <path d="M2 5C2 3.89543 2.89543 3 4 3H11C12.1046 3 13 3.89543 13 5V9C13 10.1046 12.1046 11 11 11H9L6 14V11H4C2.89543 11 2 10.1046 2 9V5Z" fill="currentColor"></path>
                        <path d="M15 7V9C15 11.2091 13.2091 13 11 13H9.82843L8.06173 14.7667C8.34154 14.9156 8.66091 15 9 15H11L14 18V15H16C17.1046 15 18 14.1046 18 13V9C18 7.89543 17.1046 7 16 7H15Z" fill="currentColor"></path>
                    </svg></button></div>
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
     libro: {},
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
        this.libro = Libro[0];
      }
    
    

 },
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Amatic+SC&display=swap');
</style>