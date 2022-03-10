<template>
  <div class="gallery-home">
    <h1 class="gallery-title">Gallery</h1>
    <h2 class="gallery-header">Famous people ye</h2>
    <div class="gallery-card">
      <img class="gallery-img" src="/arcade.jpg" alt="" />
    </div>
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
          url: "/statue.jpg",
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
          url: "/statue.jpg",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
        },
        {
          name: "this",
          url: "/statue.jpg",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
        },
      ],
    };
    //need to v-bind images, look at whatever
    //v-bind and declarative rendering don't work rn for some reason, figure it out
    //make a method/function or whatever for buttons
  },
  mounted() {
    this.switchImage();
  },
  methods: {
    switchImage() {
      this.image = this.images[this.index];
      this.index = (this.index + 1) % this.images.length;
    },
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
  width: 90rem;
  background-color: #f44336;
  height: 70rem;
  color: #010101;
  text-align: center;
}
.gallery-img {
  width: 85%;
}
/* find way to center card and image */
.gallery-button {
  color: red;
}
</style>
