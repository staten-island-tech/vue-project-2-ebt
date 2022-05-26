<template>
  <div class="review-card">
    <img class="review-img" :src="image" alt="reviewers" />
    <p class="text-size-review">{{ desc }}</p>
  </div>
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

.text-size-review {
  font-size: 2.5rem;
  width: 50%;
  margin: auto;
}
@media (max-width: 1024px) {
}
@media (max-width: 750px) {
}
</style>
