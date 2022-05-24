<template>
  <!--  <div class="card">

    <img class="img-card margin-auto w90" :src="image" alt="" />

  </div> -->
  <section class="card">
    <img :src="image" class="img-card" alt="" />
    <div class="card-info">
      <div class="text-box">
        <div class="text">{{ title }}</div>
        <div class="text">{{ desc }}</div>
      </div>
    </div>
  </section>
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
  position: relative;
  width: 32%;
  margin: 2rem auto;
  border-radius: 1.5rem;

  border: solid 1rem var(--thirdary);
}

.img-card {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  align-content: center;
  border-radius: 0.5rem;
  object-fit: cover;
}

.title3 {
  box-sizing: border-box;
  font-size: 3rem;
  margin: 1rem auto;
}
.desc {
  font-size: 2.5rem;
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
.card-info {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.card:hover .img-card {
  opacity: 0.25;
}

.card:hover .card-info {
  opacity: 1;
}

.text-box {
  background-color: white;
  color: black;
  width: 22rem;
  height: auto;
  font-size: 2rem;
  padding: 2rem 3rem;
  border-radius: 1rem;
}
.text {
  color: black;
  font-size: 2rem;
  padding: 1rem;
}
</style>
