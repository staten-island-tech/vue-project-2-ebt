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
      <a href="/attractions" class="link">
        <button class="main-btn">See More!</button></a
      >
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
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649695417/statue_ozz8l3-c_scale_h_229_q_auto_png_byqsmb.png",
          description: "Mysterious.",
        },
        {
          name: "Garden",
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649697228/garden_b47xlm-c_scale_h_229_q_auto_png_ddbske.png",
          description: "Come here and touch grass because most of you need to.",
        },
        {
          name: "Arcade",
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649697228/arcade_rspgzo-c_scale_h_229_q_auto_png_ududlw.png",
          description: "We have all the videogames",
        },
        {
          name: "End of the World Simulator",
          image:
            "https://res.cloudinary.com/dneegtvpa/image/upload/v1649695252/endoftheworld_hvdmpm-c_scale_h_300_q_auto_png_yok2nm.png",
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
