<template>
  <div class="attractions-home">
    <h1 class="attractions-title">Attractions</h1>
    <div
      class="attractions-card"
      v-for="attraction in attractions"
      :key="attraction.name"
    >
      <h2 class="attractions-card-title">{{ attraction.name }}</h2>
      <img src="attractions.image" alt="" />
    </div>
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
  color: red;
  font-size: 10rem;
  background-color: #010101;
}
.attractions-home {
  height: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.attractions-card {
  width: 30rem;
  background-color: #f44336;
  height: 30rem;
  margin: 20rem auto;
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
