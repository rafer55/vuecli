import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    
    personas:[],
  },
    mutations: {
    agregar(state, n){      
      state.personas.push(n);
      localStorage.setItem('personas',JSON.stringify(state.personas));      
    },
    eliminar(state, index){                
      let datos = JSON.parse(localStorage.getItem('personas'));
      datos.splice(index,1);
      localStorage.setItem('personas',JSON.stringify(datos));  
      state.personas.splice(index,1); 
    },traerData(state) {
      state.personas = JSON.parse(localStorage.getItem('personas'));
    }
    
  },
  actions: {
  },
  modules: {
  }
})
