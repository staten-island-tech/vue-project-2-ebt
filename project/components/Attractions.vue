<template>
  <div class="attractions-home">
    <h1 class="attractions-title">Attractions</h1>
    <section class="display">
      <div
        class="attractions-card"
        v-for="attraction in attractions"
        :key="attraction.name"
      >
        <h2 class="attractions-card-title">{{ attraction.name }}</h2>
        <img src="" alt="" />
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
          name: "Stone Face",

          image: "../arcade.jpg",
        },
        {
          name: "Garden",

          image: "../garden.jpg",
        },
        {
          name: "Arcade",

          image: "../arcade.jpg",
        },
      ],
    };
  },
  computed: {
    getImage: function () {
      return this.image;
    },
  },

  methods: {},
};
</script>

<style>
.attractions-title {
  font-size: 4rem;
  margin: 0rem;
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
  margin: 8rem;
  color: #010101;
  text-align: center;
}
.attractions-card.title {
  font-size: 10rem;
}
img {
  width: 65%;
}
</style>
