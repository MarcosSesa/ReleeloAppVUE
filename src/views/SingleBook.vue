<template>
  <div>
    <NavBar/>
   
    

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
      }
    
    

 },
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
</style>