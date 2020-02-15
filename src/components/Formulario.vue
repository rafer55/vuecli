<template>
    <div>
        <div>
            <h3>Persona</h3>
            <input type="text" class="form-control mb-3" @keyup.enter="agregarpersona" v-model.lazy="persona">
            <div v-if="!persona">
            <button class="btn btn-success" @click="agregarpersona">Agregar</button>
            </div>
            <div v-else>
                <button class="btn btn-success" @click="agregarpersona">Actualizar</button>
            </div>
        </div>
        <div>
            <ul>
                <li  v-for="(personaunic, index) in personas" v-bind:key="index">{{personaunic}} <button class="btn btn-danger" @click="eliminarpersona(index)">Eliminar</button> <button class="btn btn-secondary" @click="editando(index)">Editar</button> </li>
            </ul>
        </div>
    </div>
</template>
<script>
 import { mapState, mapMutations } from 'vuex';

 export default {
  name: 'Formulario',
   data(){
      return {
          persona: '',
          index:0
      }
  },
  computed:{
    ...mapState(['personas'])
    
  },
  methods:{
    ...mapMutations(['agregar','eliminar']),
    agregarpersona(){
        this.agregar(this.persona);
        this.persona='';
    },
    eliminarpersona(index){
        this.eliminar(index);
    },
    editando(index){
        let datos = JSON.parse(localStorage.getItem('personas'));
        this.index=index;
        this.persona= datos[index];
    }
  }
}
   
</script>