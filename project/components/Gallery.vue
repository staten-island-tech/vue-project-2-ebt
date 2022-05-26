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
          Previous
        </button>
        <button
          class="gallery-button"
          id="right-button"
          @click="switchImageRight()"
        >
          Next
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
        url: "https://res.cloudinary.com/dneegtvpa/image/upload/v1651079170/fried_kqw0hz-Square_p4swik-c_scale_h_300_q_auto_w_300_png_hoawp3.png",
        alt: "stuff",
        description: "Giant fries with huge forks, took 15 days to make.",
        id: 0,
      },
      //get images lol
      images: [
        {
          name: "1",
          url: "https://res.cloudinary.com/dneegtvpa/image/upload/v1651079170/fried_kqw0hz-Square_p4swik-c_scale_h_300_q_auto_w_300_png_hoawp3.png",
          alt: "stuff",
          description:
            "Giant fries with huge forks, took 15 days to make. You can find sights like these in our lobby.",
          id: 0,
        },
        {
          name: "2",
          url: "https://res.cloudinary.com/dneegtvpa/image/upload/c_scale,q_auto,w_300/v1653584200/Caterina_Fountain_in_Basin_600x_zr0wyo.png",
          alt: "stuff",
          description:
            "Come to our front entrance, where we have a nice fountain to catch up with friends.",
          id: 1,
        },
        {
          name: "3",
          url: "https://res.cloudinary.com/dneegtvpa/image/upload/c_scale,q_auto,w_300/v1653584425/1314155417_nwbcxb.png",
          alt: "stuff",
          description:
            "All our hotel rooms are cozy and comfortable with (relatively) low prices.",
          id: 2,
        },
        {
          name: "4",
          url: "https://res.cloudinary.com/dneegtvpa/image/upload/q_auto/v1653583775/building_tvafdj.png",
          alt: "stuff",
          description: "Building so high that you can't see the bottom of it.",
          id: 3,
        },
        {
          name: "5",
          url: "https://res.cloudinary.com/dneegtvpa/image/upload/c_scale,q_auto,w_400/v1653584063/the-london-eye-2-640x360_ggy5ne.png",
          alt: "stuff",
          description: "Come and see the great view of this ferris wheel.",
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
.arrow {
  filter: brightness(0%);
  height: 3rem;
}
.right {
  transform: rotate(180deg);
}
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
@media (max-width: 1024px) {
  .gallery-card {
    width: 70%;
    margin: 4rem;
  }
  .gallery-img {
    margin: 4rem;
  }
  .gallery-description {
    width: 70%;
  }
  #desc-text {
    font-size: var(--h3);
  }
}
@media (max-width: 750px) {
  .gallery-card {
    width: 85%;
    margin: 3rem;
  }
  .gallery-img {
    margin: 3rem;
  }
  .gallery-description {
    width: 85%;
  }
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
}
</style>
