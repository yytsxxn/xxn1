import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:"",
    name:""
  },
  mutations: {
    change(state,obj){
      // console.log(111111)

      state.color = obj.bgColor;
      state.name = obj.name;
    }
  },
  actions: {

  }
})
