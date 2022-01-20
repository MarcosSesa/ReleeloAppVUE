<template>
  <NavBar></NavBar>
  <div>signUp</div>
</template>

<script>
//import env from "../environment";
import NavBar from "../components/NavBar.vue";

export default {
  name: "signin",
  components: {
    NavBar,
  },
};
//function signin() {
  //env.supabase.auth.signUp();
//}
</script>

<style scoped>
</style>