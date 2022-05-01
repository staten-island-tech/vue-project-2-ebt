<template>
    <div>
        <div v-bind:class="{red : theme}"> <h1>hi</h1></div>
        <h1> State: {{theme}}</h1>
        <button @click="testFunction1()">Run function 1</button>
        <button @click="testFunction2()">Run function 2</button>
        <button @click="toggle()">Run toggle</button>
        <button @click="toggle2()">Run toggle 2</button>
    </div>
</template>

<script>
    export default {
        data(){return{
            test: true,
        }},
        computed :{
            theme: {
               get() {return this.$store.state.theme},
            set(value){
                this.$store.commit('setTheme', value)
            }
            }
        },
        methods: {
            testFunction1(){
                console.log("this is a test")
            },
            testFunction2(){
                console.log(this.$store.state.theme)
            },
            toggle(){
                this.theme = !this.theme
            },
            toggle2(){
                this.test = !this.test
            }
        }
    }
</script>

<style >
.red{
    background-color: red;
}

</style>