<template>
  <div class="card">
    <h3 class="title3">{{ title }}</h3>
    <img class="img-card margin-auto w90" :src="image" alt="" />
    <h3 class="desc">{{ desc }}</h3>
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
}
.desc {
  font-size: 2.5rem;
  margin: 1rem auto;
}
</style>
