<template>
  <div class="attractions-home">
    <h2 class="attractions-title">Attractions</h2>
    <h3 class="attractions-header">
      See all our wonderful and unique attractions!
    </h3>
    <section class="flex-parent">
      <div
        class="attractions-card"
        v-for="attraction in attractions"
        :key="attraction.name"
      >
        <h3 class="attractions-card-title">{{ attraction.name }}</h3>
        <img
          class="attractions-image"
          v-bind:src="attraction.image"
          v-bind:alt="attraction.alt"
        />
        <h4 class="attractions-description">{{ attraction.description }}</h4>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
      ],
    };
  },
  computed: {},

  methods: {},
};
</script>

<style>
.attractions-title {
  font-size: var(--h1);
  text-align: center;
}
.attractions-header {
  font-size: var(--h3);
  text-align: center;
}
.attractions-home {
  text-align: center;
}
.attractions-card {
  width: 30rem;
  background-color: #f44336;
  height: 30rem;
  margin: 5rem;
  color: var(--primary);
  text-align: center;
}
.attractions-card-title {
  font-size: var(--h3);
}
.attractions-image {
  width: 85%;
}
</style>
