<template>
  <div class="section">
    <h1 class="section-title">Gallery</h1>
    <h2 class="section-subtitle">See our famous visitors!</h2>
    <section class="gallery-parent">
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
        <h2>Description:</h2>
        <h3>{{ currentImage.description }}</h3>
      </div>
    </section>
    <!-- figure out how to replace this with card.vue -->

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
        name: "1",
        url: "/statue.png",
        alt: "stuff",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: 0,
      },
      //get images lol
      images: [
        {
          name: "1",
          url: "/statue.png",
          alt: "stuff",
          description:
            "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          id: 0,
        },
        {
          name: "2",
          url: "/pizza.png",
          alt: "stuff",
          description: "description 2",
          id: 1,
        },
        {
          name: "3",
          url: "/arcade.png",
          alt: "stuff",
          description: "description 3",
          id: 2,
        },
        {
          name: "4",
          url: "/terichick.png",
          alt: "stuff",
          description: "description 4",
          id: 3,
        },
        {
          name: "5",
          url: "/kebabs.png",
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
.gallery-card {
  position: relative;
  width: 70rem;
  background-color: #f44336;
  color: #010101;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin: 5rem;
  margin-right: 5rem;
}
.gallery-img {
  width: 90%;
  height: auto;
  margin: 5rem;
}
.gallery-description {
  width: 50%;
  margin-bottom: 5rem;
  margin-right: 10rem;
}
.gallery-parent {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
/* need to find a way to make the gallery picture not shorten into nothingness (probably media queries) */
.gallery-button {
  position: absolute;
  top: 0.5%;
  color: red;
  opacity: 50%;
  font-size: 3rem;
}
#left-button {
  left: 40%;
}
#right-button {
  right: 40%;
}
</style>
