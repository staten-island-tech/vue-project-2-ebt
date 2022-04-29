<template>
  <div>
    <h2 class="section-title">Attractions</h2>
    <h3 class="section-subtitle">
      See all our wonderful and unique attractions!
    </h3>
      <main class="margin-auto">
      <section class="w80 flex-parent margin-auto ">
        <Card
          v-for="places in places"
          :key="places.name"
          :title="places.name"
          :image="places.img"
          :desc="places.description"
        >
        </Card>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      places: [
        {
          name: "Stone Temple",
          img: "/statue.jpg",
          description:
            "Mysterious.",
        },
        {
          name: "Garden",
          img: "/garden.jpg",
          description:
            "Come here and touch grass because most of you need to.",
        },
        {
          name: "Arcade",
          img: "/arcade.jpg",
          description: "We have all the videogames",
        },
      ],
    };
  },
};
</script>

<style>
</style>
