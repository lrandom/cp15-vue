import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0,
        list:[1,2,3,4,5,6]
    },
    mutations: {
        increment (state,data) {
            state.count++
        }
    },
    actions:{
        increment ({commit},data) {
            setTimeout(()=>{
               commit('increment');
            },3000)
        }
    },
    getters:{
        getFilterList(state){
            return state.list.filter((item)=>{
                return item >3;
            })
        }
    }
})

export default store;
