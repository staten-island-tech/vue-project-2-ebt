<template>
  <div>
    <h2 class="section-title">Gallery</h2>
    <h3 class="section-subtitle">See our famous visitors!</h3>
    <div class="flex-parent center">
      <div class="gallery-card">
        <button class="gallery-button" id="left-button" @click="switchImageLeft()">
          ⬅
        </button>
        <button class="gallery-button" id="right-button" @click="switchImageRight()">
          ➡
        </button>
        <!-- try to get buttons on top of image -->
        <img class="gallery-img" v-bind:src="currentImage.url" alt="" />
      </div>
      <div class="gallery-description">

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
        name: "1",
        url: "/face.png",
        alt: "stuff",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        id: 0,
      },
      //get images lol
      images: [
        {
          name: "1",
          url: "/face.png",
          alt: "stuff",
          description:
            "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          id: 0,
        },
        {
          name: "2",
          url: "/statue.png",
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

<style scoped>
.center {
  justify-content: center;
  align-items: center;
}
.gallery-card {
  position: relative;
  width: 35%;
  height: 40rem;
  background-color: var(--thirdary);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem;
  border-radius: 1rem;
}
.gallery-img {
  width: 90%;
  height: 75%;
  margin: 5rem;
  border-radius: 0.5rem ;
  object-fit: cover;
}
/* img margin is what determines red amount */
.gallery-description {
  width: 40%;
 text-align: center;
}
/* need to find a way to make the gallery picture not shorten into nothingness (probably media queries) */
.gallery-button {
  position: absolute;
  top: 0.5%;
  color: red;
  opacity: 50%;
  font-size: 3rem;
  width: 8rem;
  border-radius: 1rem;
}
#left-button {
  left: 30%;
}
#right-button {
  right: 30%;
}
#desc-text {
  font-size: var(--h3);
}
</style>
