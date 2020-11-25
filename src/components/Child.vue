<template>
    <div>
        {{message}}

        <button @click="callParent()">Call Parent</button>
    </div>
</template>

<script>
export default {
    name: "Child",
/*    props: {
        message: {
            required: true,
            type:String
        }
    },*/
    props:[
        'message'
    ],
    methods:{
        call(){
            alert('call child');
        },
        callParent(){
            this.$emit('onCallParent','Im child');
        }
    }
}
</script>

<style scoped>

</style>
