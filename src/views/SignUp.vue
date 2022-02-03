<template>
  <NavBar></NavBar>
  <section style="background:rgb(239,239,239)">
    <div class="container" style="padding-top: 200px;padding-bottom: 200px;">
          <div class="row">
            <div class="col d-xl-flex justify-content-xl-center" style="background: #ffffff;border-radius: 0px;border-bottom-width: 0px;border-bottom-style: solid;padding-left: 0px;padding-right: 0px;">
              <img src="..\assets\Login3.svg" style="width: 481px;" />
            </div>
            <div class="col" style="background: #00bfa6;padding-top: 40px;border-right-width: 1px;border-right-style: solid;border-radius: 0px;">
                <h1 class="d-xl-flex justify-content-xl-center" style="color: rgb(255,255,255);font-family: 'Amatic SC', serif;">Registrarse</h1>
                <form style="padding-right: 45px;padding-left: 45px;color: rgb(255,255,255);">
                  <div class="form-group">
                    <input type="email" class="form-control" style="background: rgba(255,255,255,0);margin-top: 40px;border-top-width: 0px;border-right-width: 0px;border-bottom-color: rgb(47,46,65);border-left-width: 0px; border-radius:0px" name="email" placeholder="Introduce tu Email" v-model="Formemail"/>
                    <input type="password" class="form-control" style="margin-top: 40px;background: rgba(255,255,255,0);border-radius: 0px;border-top-width: 0px;border-right-width: 0px;border-bottom-width: 1px;border-bottom-color: rgb(47,46,65);border-left: 0px solid rgb(255,255,255) ;" name="password" placeholder="Introduce tu contraseña" v-model="Formpassword" />
                  </div>
                </form>
                <div class="d-xl-flex justify-content-xl-center" style="margin-top: 36px;">
                  <button class="btn btn-primary" type="button" style="font-family: 'Amatic SC', serif;border-bottom-color: rgb(12,85,191);background: rgb(47,46,65);font-size: 22px;" v-on:click="signUp">Registrarse</button>
                </div>
            </div>
          </div>
    </div>
  </section>
</template>

<script>
import env from "../environment";
import NavBar from "../components/NavBar.vue";

export default {
  name: "signup",
  components: {
    NavBar,
  },data(){
    return{
      Formemail: '',
      Formpassword: '',
    }
  },
  methods:{
    async signUp(){
      await env.supabase.auth.signUp({
        email: this.Formemail,
        password: this.Formpassword,
      })
      this.$router.push('Home');
    }
  }
};

</script>

<style scoped>
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: white;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: white;
}
.form-control{
  color: white;
}
</style>