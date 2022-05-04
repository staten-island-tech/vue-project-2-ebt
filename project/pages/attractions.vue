<template>
  <div id="page" class="default" v-bind:class="{mono: theme}">
    <PageHeader></PageHeader>
    <h1 class="alt-head">Attractions!</h1>
    <h2>They're attracting! Probably! Visit to find out!</h2>
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
          name: "Stone Temple",
          image: "/statue.jpg",
          alt: "wacky statue",
          description:
            "Yeah um we don't know where this came from, we are not responsible for what happens to you in there",
        },
        {
          name: "Garden",
          image: "/garden.jpg",
          alt: "nice flowers and grass",
          description:
            "You can come here and touch grass because most of you need to",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
        },
        {
          name: "Arcade",
          image: "/arcade.jpg",
          alt: "videogames",
          description: "We have all the videogames",
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
