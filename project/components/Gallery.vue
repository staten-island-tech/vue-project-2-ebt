<template>
  <div class="gallery-home">
    <h1 class="gallery-title">Gallery</h1>
    <h2 class="gallery-header">Famous people ye</h2>
    <card class="gallery-card">
      <img class="gallery-img" v-bind:scr="image.url" v-bind:alt="image.alt" />
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
          name: Blob,
          url: fgg,
          alt: stuff,
        },
        {
          name: this,
          url: lf,
          alt: stuff,
        },
        {
          name: this,
          url: lf,
          alt: stuff,
        },
        {
          name: this,
          url: lf,
          alt: stuff,
        },
        {
          name: this,
          url: lf,
          alt: stuff,
        },
      ],
    };
    //need to v-bind images, look at whatever
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
.gallery-img {
  height: 200rem;
  width: 500rem;
}
.gallery-button {
  color: red;
}
</style>
