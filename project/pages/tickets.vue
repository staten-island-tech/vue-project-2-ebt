<template>
  <div id="page" class="default" v-bind:class="{mono: theme}">
    <PageHeader></PageHeader>
    <h1 class="alt-head">buy tickets</h1>
    <h2>Dew it</h2>
  </div>
</template>

<script>
export default {
     mounted() {
    //The next two lines are so stupid, but they work so it doesn't really matter
    this.theme = !this.theme
    this.theme = !this.theme
   },
   computed :{
    theme: {
      get() {
        return this.$store.state.theme
      },
      set(value){
       this.$store.commit('setTheme', value)
      }
    }
  },
};
</script>
<style>
.filler {
  margin-bottom: 35rem;
}
.alt-display {
  text-align: center;
}
.alt-head {
  margin-top: 6rem;
  text-align: center;
  font-size: 6rem;
}
#page {
  text-align: center;
}

</style>
