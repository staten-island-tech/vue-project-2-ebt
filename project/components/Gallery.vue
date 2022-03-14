<template>
  <div class="gallery-home">
    <h1 class="gallery-title">Gallery</h1>
    <h2 class="gallery-header">Famous people ye</h2>
    <div class="gallery-card">
      <img class="gallery-img" v-bind:src="currentImage.url" alt="" />
    </div>
    <button class="gallery-button" @click="switchImageLeft()">
      left arrow
    </button>
    <button class="gallery-button" @click="switchImageRight()">
      right arrow
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      image: null,
      currentImage: {
        name: "Blob",
        url: "/statue.jpg",
        alt: "stuff",
        description: "Nrfhedhnmdrugebng",
        id: 0,
      },
      //get images lol
      images: [
        {
          name: "Blob",
          url: "/statue.jpg",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
          id: 0,
        },
        {
          name: "this",
          url: "/statue.jpg",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
          id: 1,
        },
        {
          name: "this",
          url: "/arcade.jpg",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
          id: 2,
        },
        {
          name: "this",
          url: "/statue.jpg",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
          id: 3,
        },
        {
          name: "this",
          url: "/statue.jpg",
          alt: "stuff",
          description: "Nrfhedhnmdrugebng",
          id: 4,
        },
      ],
    };
    //need to v-bind images, look at whatever
    //v-bind and declarative rendering don't work rn for some reason, figure it out
    //make a method/function or whatever for buttons
  },
  mounted() {},
  methods: {
    switchImageLeft() {
      if (this.currentImage.id === 4) {
        this.currentImage = this.images[0];
      } else {
        this.currentImage = this.images[this.currentImage.id + 1];
      }
    },
    switchImageRight() {
      if (this.currentImage.id === 0) {
        this.currentImage = this.images[4];
      } else {
        this.currentImage = this.images[this.currentImage.id - 1];
      }
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
