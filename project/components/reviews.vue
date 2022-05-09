`<template>
  <div>
    <h2 class="section-title">Reviews</h2>
    <h3 class="section-subtitle">Why we are the best !!</h3>
    <main class="reviews">
      <h2 class="section-subtitle">5 Star Ratings ⭐⭐⭐⭐⭐</h2>
       <main class="margin-auto">
      <section class="w90 flex-parent margin-auto">
        <Review-card
          v-for="reviews in reviews"
          :key="reviews.name"
          :image="reviews.img"
          :desc="reviews.comment"
        >
        </Review-card>
      </section>
    </main>
      <a class="text-size-review margin-auto w80" href="https://mikewhalen.tech/">READ MORE REVIEWS</a>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      reviews: [
        {
          name: "Mr. Whalen",
          comment: "This hotel wouldn't exist without me. This hotel is awesome because of me!",
          img: "/reviewer5.jpg",
        },
        {
          name: "KFC Man",
          comment: "I am planning to announce a collaboration with this hotel because this hotel is so successful and will be beneficial to my business.",
          img: "/reviewer3.jpg",
        },
        {
          name: "Washton",
          comment: "I visited this hotel with my wife and we made plenty of memories here. I love this hotel. It is a good place to relax after a busy day.",
          img: "/reviewer1.jpg",
        },
        {
          name: "Bat",
          comment: "Safe hotel. No criminals.",
          img: "/reviewer4.jpg",
        },
        {
          name: "Mario",
          comment: "This is my favorite place to be at after a day of hard work.",
          img: "/reviewer2.jpg",
        },

      ],
    };
  },
  methods: {
  },
};
</script>

<style>
.reviews {
  overflow: auto;
  overflow-x: hidden;
  width: 100%;
  height: 50rem;
  scrollbar-width: none;
}

a:visited {
  color: black;
}
</style>
