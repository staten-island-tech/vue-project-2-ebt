<template>
<!--  <div class="card">

    <img class="img-card margin-auto w90" :src="image" alt="" />

  </div> -->
  <div class="card">
  <img :src="image" class="img-card" alt="">
  <div class="card-info">
    <div class="text">{{title}}</div>
    <div class="text">{{desc}}</div>
  </div>
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
  transition: .5s ease;
  backface-visibility: hidden;
  align-content:center;
    border-radius: 1.5rem;
}

.card-info {
  transition: .5s ease;
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

.text {
  background-color: white;
  color: black;
  width: 22rem;
  height: auto;
  font-size: 2rem;
  padding: 2rem 3rem;
}





/* .card {
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
} */

</style>
