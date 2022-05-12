<template>
  <div class="card">

    <img class="img-card margin-auto w90" :src="image" alt="" />

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
  margin: 2rem auto;
  border-radius: 1.5rem;
}

.img-card {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: 1.2s;
}
.img-card:hover {
  transform: scale(1.15);
  opacity: 0%;
}
.card:hover {
  background-color: white;
}

.title3 {
  box-sizing: border-box;
  font-size: 3.5rem;
  margin: 1rem auto;
}
.desc {
  font-size: 1.5rem;
  margin: 1rem auto;
}
</style>
