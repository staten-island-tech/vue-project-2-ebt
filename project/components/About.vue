<template>
  <div>
    <h2>Our Mission</h2>
    <div class="flex-parent">
      <h3 class="w30 margin-auto pop-text">We are Squared!</h3>

      <img
        src="/face.jpg"
        alt="https://www.youtube.com/watch?v=nHPNBMjg73I"
        class="about-img height-auto w30"
      />
      <h3 class="margin-auto about-text">
        We are a prestigious hotel, built on the foundation to produce the most
        luxurious experiences for the most fairest prices to customers all over
        the world. We believe everyone deserves the right to enjoy a high class
        experience with Hotel², and therefore put forth only the best in our
        eyes. We hope to enhance the lives and inspire the lifestyles of all our
        guests. We hope you will enjoy your stay at Hotel².
      </h3>
      <h3 class="about-text">Hotel Squared. Now to Forever.</h3>
    </div>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {},
  methods: {},
};
</script>

<style scoped>
.about-img {
  border-radius: 3rem;
  margin: 2rem auto;
  width: 55rem;
  height: 40rem;
  object-fit: cover;
}
.about-text {
  font-size: 2.5rem;
  margin: 1rem;
}
.pop-text {
  font-size: 10rem;
}
</style>