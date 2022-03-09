<template>
  <div class="gallery-home">
    <h1 class="gallery-title">Gallery</h1>
    <h2 class="gallery-header">Famous people ye</h2>
    <card class="gallery-card" v-for="image in images" :key="image.name">
      <img class="gallery-img" v-bind:src="image.url" v-bind:alt="image.alt" />
      <p class="description">{{ image.description }}</p>
    </card>
    <button class="gallery-button">left arrow</button>
    <button class="gallery-button">right arrow</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //get images lol
      images: [
        {
          name: "Blob",
          url: "/statue.jpg",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
        },
        {
          name: "this",
          url: "lf",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
        },
        {
          name: "this",
          url: "/arcade.jpg",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
        },
        {
          name: "this",
          url: "lf",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
        },
        {
          name: "this",
          url: "lf",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
        },
      ],
    };
    //need to v-bind images, look at whatever
    //v-bind and declarative rendering don't work rn for some reason, figure it out
    //make a method/function or whatever for buttons
  },
};
</script>

<style>
.gallery-home {
  text-align: center;
}
.gallery-title {
  font-size: 4rem;
}
.gallery-header {
  font-size: 2rem;
}
.gallery-card {
  width: 30rem;
  background-color: #f44336;
  height: 30rem;
  margin: 5rem;
  color: #010101;
  text-align: center;
}
img.gallery-img {
  height: 50%;
  width: 60%;
}
.gallery-button {
  color: red;
}
</style>
