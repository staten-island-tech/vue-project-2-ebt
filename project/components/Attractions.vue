<template>
  <div>
    <h2 class="section-title">Attractions</h2>
    <h3 class="section-subtitle">
      See all our wonderful and unique attractions!
    </h3>
    <section class="flex-parent">
      <div
        class="attractions-card"
        v-for="attraction in attractions"
        :key="attraction.name"
      >
        <!-- replace this with card.vue -->
        <h3 class="">{{ attraction.name }}</h3>
        <img
          class="attractions-img"
          v-bind:src="attraction.image"
          v-bind:alt="attraction.alt"
        />
        <h4 class="attractions-description">{{ attraction.description }}</h4>
        <h4 class="attractions-description">{{ attraction.price }}</h4>
      </div>
      <a
        class="text-size display"
        href="https://www.sightseeingpass.com/en/new-york/attractions#"
      >
        FIND MORE ATTRACTIONS NEARBY</a
      >
      <!-- check reviews.vue for the class of this link -->
      <!-- figure out what needs to be changed for media queries-->
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attractions: [
        {
          name: "Garden",
          image: "/garden.png",
          alt: "nice flowers and grass",
          description:
            "You can come here and touch grass because most of you need to",
          price: "$10",
        },
        {
          name: "Arcade",
          image: "/arcade.png",
          alt: "videogames",
          description: "We have all the videogames",
          price: "$20",
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

<style>
.attractions-card {
  width: 30rem;
  background-color: var(--thirdary);
  height: 30rem;
  margin: 5rem;
  color: var(--primaryText);
}
.attractions-img {
  width: 90%;
  height: 20rem;
  object-fit: cover;
}
.attractions-description {
  font-size: 1.5rem;
}
</style>
