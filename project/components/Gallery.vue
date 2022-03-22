<template>
  <div class="gallery-home">
    <h1 class="gallery-title">Gallery</h1>
    <h2 class="gallery-header">See our famous visitors!</h2>
    <div class="gallery-parent">
      <div class="gallery-card">
        <button
          class="gallery-button"
          id="left-button"
          @click="switchImageLeft()"
        >
          ⬅
        </button>
        <button
          class="gallery-button"
          id="right-button"
          @click="switchImageRight()"
        >
          ➡
        </button>
        <!-- try to get buttons on top of image -->
        <img class="gallery-img" v-bind:src="currentImage.url" alt="" />
      </div>
      <div class="gallery-description">
        <h2 id="desc-title">Description:</h2>
        <p id="desc-text">{{ currentImage.description }}</p>
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
          url: "/pizza.jpg",
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
          url: "/terichick.jpg",
          alt: "stuff",
          description: "description 4",
          id: 3,
        },
        {
          name: "5",
          url: "/kebabs.jpg",
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
    switchImageRight() {
      if (this.currentImage.id === 4) {
        this.currentImage = this.images[0];
      } else {
        this.currentImage = this.images[this.currentImage.id + 1];
      }
    },
    switchImageLeft() {
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
  justify-content: center;
  text-align: center;
  align-items: center;
}
.gallery-card {
  position: relative;
  width: 50rem;
  height: 35rem;
  background-color: #f44336;
  color: #010101;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin: 5rem;
  margin-right: 20rem;
}
.gallery-img {
  width: 90%;
  height: auto;
}
.gallery-description {
  margin-bottom: 20rem;
  margin-right: 15rem;
}
/* find way to center card and image */
.gallery-button {
  position: absolute;
  top: 0.5%;
  color: red;
  opacity: 50%;
  font-size: 1.5rem;
}
#left-button {
  left: 40%;
}
#right-button {
  right: 40%;
}
#desc-title {
  font-size: 3rem;
}
#desc-text {
  font-size: 2rem;
}
</style>
