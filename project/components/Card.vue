<template>
  <div class="card">
    <h3 class="title3">{{ title }}</h3>
    <img class="img-card margin-auto w90" :src="image" alt="" />
    <h4 class="desc">{{ desc }}</h4>
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
  height: auto;
  object-fit: contain;
  transition: 1.2s;
}
.img-card:hover {
  transform: scale(1.15);
  opacity: 90%;
}

.title3 {
  box-sizing: border-box;
  font-size: 3rem;
  margin: 1rem auto;
}
.desc {
  font-size: 1.5rem;
  margin: 1rem auto;
}
@media (max-width: 1024px) {
  .title3 {
    font-size: 3.25rem;
  } /* or something like this */
  .desc {
    font-size: 2rem;
  }
  .card {
    width: 45%;
  }
}
@media (max-width: 750px) {
  .card {
    width: 85%;
  }
  /* change width to 85% to make it look good in one row if needed */
}
</style>
