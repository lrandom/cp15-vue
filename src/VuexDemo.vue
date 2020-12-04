<template>
    <div>{{ count }}
        <div v-for="(item,index) in getFilterList" :key="index">{{item}}</div>
      <button @click="increment()">Increment</button>
        <button @click="incrementCommit()">IncrementCommit</button>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';
export default {
    computed:{
       ...mapState({
           count: state => state.count,
       }),
        ...mapGetters(['getFilterList'])
    },
    methods:{
        increment: function(){
            this.$store.dispatch('increment',{});
        },
        incrementCommit:function(){
            this.$store.commit('increment',{});
        },
        ...mapMutations(['increment'])
    }
}
</script>

<style scoped>

</style>
