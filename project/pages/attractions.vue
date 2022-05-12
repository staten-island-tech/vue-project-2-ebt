<template>
  <div id="page" class="default" v-bind:class="{mono: theme}">
    <PageHeader></PageHeader>
    <h1 class="alt-head">Attractions!</h1>
    <h2>You've made a mistake.</h2>
    <section class="flex-parent">
      <Card
        class="attractions-card"
        v-for="attraction in attractions"
        :key="attraction.name"
        :title="attraction.name"
        :image="attraction.image"
        :desc="attraction.description"
      ></Card>
    </section>
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
  data() {
    return {
      attractions: [
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
        {
          name: "The End.",
          image: "/doom.png",
          alt: "nothing",
          description:
            "DANGER",
        },
     
      ],
    };
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
</style>
