<template>
  <div class="gallery-home">
    <h1 class="gallery-title">Gallery</h1>
    <h2 class="gallery-header">Famous people ye</h2>
    <div class="gallery-parent">
      <div class="gallery-card">
        <button class="gallery-button" @click="switchImageLeft()"><--</button>
        <button class="gallery-button" @click="switchImageRight()">--></button>
        <!-- try to get buttons on top of image -->
        <img class="gallery-img" v-bind:src="currentImage.url" alt="" />
      </div>
      <div class="gallery-description">
        <h2 id="desc-title">Description:</h2>
        {{ currentImage.description }}
      </div>
    </div>
    <!--     <button class="gallery-button" @click="switchImageLeft()"><--</button>
    <button class="gallery-button" @click="switchImageRight()">-->
    <!-- </button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          name: "1",
          url: "/statue.jpg",
          alt: "stuff",
          description: "description 1",
          id: 0,
        },
        {
          name: "2",
          url: "/statue.jpg",
          alt: "stuff",
          description: "description 2",
          id: 1,
        },
        {
          name: "3",
          url: "/arcade.jpg",
          alt: "stuff",
          description: "description 3",
          id: 2,
        },
        {
          name: "4",
          url: "/statue.jpg",
          alt: "stuff",
          description: "description 4",
          id: 3,
        },
        {
          name: "5",
          url: "/statue.jpg",
          alt: "stuff",
          description: "description 5",
          id: 4,
        },
      ],
    };
    //need to v-bind images, look at whatever
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
.gallery-parent {
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
}
.gallery-card {
  width: 50rem;
  height: 35rem;
  background-color: #f44336;
  color: #010101;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin: 2rem;
}
.gallery-img {
  width: 90%;
  height: auto;
}
.gallery-description {
  margin-bottom: 20rem;
  margin-right: 7.5rem;
}
/* find way to center card and image */
.gallery-button {
  color: red;
}
#desc-title {
  font-size: 3rem;
}
</style>
