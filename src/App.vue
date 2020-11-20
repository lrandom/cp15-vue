<template>
   <div>
       <div v-for="(item,index) in list" :key="index">
           {{item}}
       </div>

       <input v-model="input"/>
       <div @click="callMe()">Call me</div>
   </div>
</template>

<script>
export default {
   data:function(){
       return {
           message: "Hello",
           list:[1,2,3,4,5,6],
           input:""
       }
   },
    mounted() {
      setTimeout(()=>{
          this.list.push(2);
          this.list.push(3);
      },5000)
   },
    methods:{
       callMe(){
           alert(this.input);
       }
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
