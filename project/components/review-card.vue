<template>
  <div class="review-card">
    <img class="review-img" :src="image" alt="" />
    <h3 class="">{{ desc }}</h3>
    <h3 class="text-size">{{ title }}</h3>
  </div>
<!--   <div class="review-card">
        <img class="review-img" src="reviewer5.png" alt="review1" />
        <p class="text-size">
          "This hotel wouldn't exist without me. This hotel is awesome because
          of me!"
        </p>
      </div> -->
</template>

<script>
export default {
  name: "Review-card",
  props: {
    title: String,
    desc: String,
    image: String,
  },
};
</script>

<style>
/* .card {
  width: 30%;
  background-color: var(--thirdary);
  margin: 2rem auto;
  border-radius: 1.5rem;
}

.img-card {
  display: block;
  width: 100%;
  height: 24rem;
  object-fit: contain;
}

.title3 {
  box-sizing: border-box;
  font-size: 3.5rem;
  margin: 1rem auto;
} */

.review-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  height: auto;
  margin: 4rem auto;
  background-color: #ffffff;
  color: #000000;
}

.review-img {
  width: 31rem;
  height: 25rem;
  object-fit: cover;
}

.text-size {
  font-size: 2.5rem;
  width: 50%;
  margin: auto;
}

</style>
