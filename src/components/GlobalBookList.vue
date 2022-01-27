<template>

  
  <div class="container">
    <div class="row">
        <div class="col-md-3" v-for="libro in libros.data" v-bind:key="libro.titulo">
            <div class="card" style="width: 272px;border-radius: 14px;background: #ffffff;border-color: rgb(154,156,157);box-shadow: 0px 0px 8px 0px;max-width: 272px;max-height: 200;"><img class="card-img-top w-100 d-block" style="height: 199px;border-radius: 14px;margin: 0px;padding: 5px;opacity: 1;filter: blur(0px) brightness(100%) invert(0%);" src="840_560.jpg" />
                <div class="card-body">
                    <h4 class="text-start card-title" style="color: rgb(47,46,65);">el libro fantastico</h4>
                    <p class="text-start card-text" style="color: rgb(47,46,65);">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
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
    data(){
      return{
       libros: {},
      }
    },
    async created (){
      this.libros = await env.supabase
        .from('Libro')
        .select('*')
        .range(0, 9)

        console.log(this.libros.data);
    }
  
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Amatic+SC&display=swap');

</style>