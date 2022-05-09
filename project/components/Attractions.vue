<template>
  <div>
    <h2 class="section-title">Attractions</h2>
    <h3 class="section-subtitle">
      See all our wonderful and unique attractions!
    </h3>
    <main class="margin-auto">
      <section class="w80 flex-parent margin-auto">
        <Card
          v-for="places in places"
          :key="places.name"
          :title="places.name"
          :image="places.img"
          :desc="places.description"
        >
        </Card>
      </section>
      <a href="/attractions" class="link"> See More!</a>
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
          description: "Mysterious.",
        },
        {
          name: "Garden",
          img: "/garden.jpg",
          description: "Come here and touch grass because most of you need to.",
        },
        {
          name: "Arcade",
          img: "/arcade.jpg",
          description: "We have all the videogames",
        },
        {
          name: "Stone Temple",
          image: "/statue.png",
          alt: "temple",
          description:
            "Yeah um we don't know where this came from, we are not responsible for what happens to you in there",
          price: "$50",
        },
        {
          name: "End of the World Simulator",
          image: "/endoftheworld.png",
          alt: "city On fire",
          description: "HAVE FUN :)",
          price: "$75",
        },
        //problem is that the End of the World Simulator takes up too much space on the card in lower widths
        /* get one or two more attractions */
      ],
    };
  },
};
</script>