<template>
  <!--  <div>
        <div v-for="(item,index) in list" :key="index">
            {{ item }}
        </div>

        <input v-model="input"/>
        <div @click="callMe()" >Call me</div>

        <Child message="10" ref="child" @onCallParent="callFromChild"></Child>

        <div v-if="show">Hello World</div>

        <div :class="{active:show}">Hihi</div>
    </div>-->

<!--    <Layout>-->
<!--        <template v-slot:slot-1>-->
<!--            Hello-->
<!--        </template>-->

<!--        <template v-slot:slot-2>Hi</template>-->
<!--    </Layout>-->

    <div>
        <p :class="{hide: isHide}" :style="{color:red}">
            Cum nixus tolerare, omnes triticumes contactus bi-color, grandis buboes.
        </p>


        <button @click="isHide=!isHide">Toggle Show/Hide</button>
    </div>
</template>

<script>
//import Child from "@/components/Child";
//import Layout from "@/components/Layout";
export default {
    components: {
       // Child,
        //Layout
    },

    data: function () {
        return {
            message: "Hello",
            list: [1, 2, 3, 4, 5, 6],
            input: "",
            show:false,
            isHide:false,
            red:'#ffffff'
        }
    },
    watch:{
        isHide:function(newVal, oldVal){
            //console.log("X");
            console.log(newVal +""+ oldVal);
        }
    },
    mounted() {
        setTimeout(() => {
            this.list.push(2);
            this.list.push(3);
        }, 5000)
    },
    methods: {
        callMe() {
            //alert(this.input);
            //this.$refs.child.call();
            this.show = !this.show;
        },
        callFromChild(args) {
            alert(args);
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

.active{
    background:red;
}

.hide{
   /* display: none;*/
    visibility: hidden;
}
</style>
