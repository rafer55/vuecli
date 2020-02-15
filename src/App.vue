<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col">
        <h1 class="text-center">Aplicacion con Vue Cli</h1>
        <formulario></formulario>
      </div>
    </div>
  </div>
</template>

<script>
import Formulario from './components/Formulario.vue'
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  computed:{
    ...mapState(['persona', 'personas'])
  },
  methods:{
    ...mapMutations(['agregar', 'traerData'])
  },
  components: {
    Formulario
  },
  created(){
      this.traerData();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
