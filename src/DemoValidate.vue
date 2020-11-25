<template>
    <div>
        <form>
            <input type="text" v-model="username"/>
            <div class="error-line">{{usernameError}}</div>
        </form>

        <div v-for="(item,index) in filterMang" :key="index">{{item}}</div>
    </div>
</template>

<script>
export default {
    name: "DemoValidate",
    data: function () {
        return {
            username: "",
            usernameError:"",
            mang:[1,2,3,4]
        }
    },
    watch:{
        username:function(newVal){
            if(newVal ===null || newVal === ''){
                this.usernameError = "Điền vào đi con";
            }else{
                this.usernameError = "";
            }
        }
    },
    computed:{
        filterMang(){
            return this.mang.filter(function(item){
                return item > 2;
            })
        }
    }
}
</script>

<style scoped>
  .error-line{
      color:red;
  }
</style>
