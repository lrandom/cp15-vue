<template>
    <form action="" v-on:submit.prevent="onSubmit">
        <input type="text" v-model="username"/>
        <div v-if="!$v.username.required && isSubmit">Điền vào đi bro</div>
        <input type="submit" value="Submit">
    </form>
</template>

<script>
import {required} from 'vuelidate/lib/validators';

export default {
    name: "VueValidate",
    data: function () {
        return {
            username:"",
            isSubmit: false
        }
    },
    validations:{
        username:{
            required
        }
    },
    methods:{
        onSubmit() {
            this.isSubmit = true;
            this.$v.$touch();
        }
    }
}
</script>

<style scoped>

</style>
