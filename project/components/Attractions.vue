<template>
  <div class="attractions-home">
    <h1 class="attractions-title">Attractions</h1>
    <h2 class="attractions-header">
      See all our wonderful and unique attractions!
    </h2>
    <section class="display">
      <div
        class="attractions-card"
        v-for="attraction in attractions"
        :key="attraction.name"
      >
        <h2 class="attractions-card-title">{{ attraction.name }}</h2>
        <img
          class="attractions-image"
          v-bind:src="attraction.image"
          v-bind:alt="attraction.alt"
        />
        <h3 class="attractions-description">{{ attraction.description }}</h3>
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
  font-size: 4rem;
  text-align: center;
}
.attractions-header {
  font-size: 2rem;
  text-align: center;
}
.attractions-home {
  text-align: center;
}
.display {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.attractions-card {
  width: 30rem;
  background-color: #f44336;
  height: 30rem;
  margin: 5rem;
  color: #010101;
  text-align: center;
}
.attractions-card-title {
  font-size: 2rem;
}
.attractions-image {
  width: 85%;
}
</style>
