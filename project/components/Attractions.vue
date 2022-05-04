<template>
  <div>
    <h2 class="section-title">Attractions</h2>
    <h3 class="section-subtitle">
      See all our wonderful and unique attractions!
    </h3>
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
    <a href="/attractions" class="link"> See More!</a>
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
};
</script>

<style scoped>
.attractions-card {
  width: 30rem;
  background-color: var(--thirdary);
  height: 30rem;
  margin: 5rem;
  color: var(--primaryText);
}
</style>
