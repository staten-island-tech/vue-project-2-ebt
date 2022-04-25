<template>
  <div>
    <h2>Our Mission</h2>
    <div class="flex-parent">
      <div class="flex-inner">
        <h3 class="w80 margin-auto about-text">
          We are a prestigious hotel, built on the foundation to produce the most luxurious experiences for the most fairest prices to customers all over the world. We believe everyone deserves the right to enjoy a high class experience with Hotel², and therefore put forth only the best in our eyes. We hope to enhance the lives and inspire the lifestyles of all our guests. We hope you will enjoy your stay at Hotel².</h3>
        <h3 class="about-text">Hotel Squared. Now to Forever.</h3>
      </div>
      <div class="flex-inner">
        <img src="/pie.jpg" alt="" class="about-img height-auto w60" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
  },
  methods: {

  },
};
</script>

<style scoped>
.flex-inner {
  width: 50%;
}
.about-img {
  border-radius: 30px;
  margin: 20px auto;
}
.about-text {
  font-size: 2.5rem;
}
</style>