<template>
  <div>
    <h2 class="section-title">Gallery</h2>
    <h3 class="section-subtitle">Pictures taken by guests like you!</h3>
    <div class="flex-parent center">
      <div class="gallery-description">
        <p id="desc-text">{{ currentImage.description }}</p>
      </div>
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
        <img class="gallery-img" v-bind:src="currentImage.url" alt="" />
      </div>
    </div>
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
          "description 1",
        id: 0,
      },
      //get images lol
      images: [
        {
          name: "1",
          url: "/face.png",
          alt: "stuff",
          description:
            "description 1",
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
  width: 45%;
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
  border-radius: 0.5rem;
  object-fit: cover;
  /* what am I supposed to do with the image */
}
/* img margin is what determines red amount */
.gallery-description {
  width: 40%;
  text-align: center;
}
/* need to find a way to make the gallery picture not shorten into nothingness (probably media queries)
figure somethnig out for second media query */
.gallery-button {
  position: absolute;
  top: 0.5%;
  color: red;
  opacity: 50%;
  font-size: 3rem;
  width: 8rem;
  border-radius: 1rem;
  margin: 0 -3rem;
}
#left-button {
  left: 20%;
}
#right-button {
  right: 20%;
}
#desc-text {
  font-size: var(--h3);
}
@media (max-width: 400px) {
  .gallery-card {
    width: 100%;
    margin: 2rem;
  }
  .gallery-img {
    margin: 2rem;
    margin-bottom: 0;
  }
  .gallery-description {
    width: 100%;
  }
  #desc-text {
    font-size: var(--h3);
  }
}
</style>
