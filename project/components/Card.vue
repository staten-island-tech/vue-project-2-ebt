<template>
  <div class="card">
    <h3 class="title section-subtitle">{{ title }}</h3>
    <img class="img-card margin-auto w90" :src="image" alt="" />
    <h4 class="pricetag">{{ desc }}</h4>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    desc: String,
    image: String,
  },
};
</script>

<style>
.card {
  width: 30%;
  background-color: #ff5000;
  margin: 2rem auto;
}

.img-card {
  display: block;
}

.title {
  color: #212121;
  box-sizing: border-box;
}
.pricetag {
  color: #212121;
  font-size: 1.5rem;
  margin: 1rem auto;
}
</style>
