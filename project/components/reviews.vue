`
<template>
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
          <!-- need to find a way to make card work  with media queries -->
        </section>
      </main>
      <a
        class="text-size-review margin-auto w80 link"
        href="https://mikewhalen.tech/"
        >READ MORE REVIEWS</a
      >
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
          comment:
            "This hotel wouldn't exist without me. This hotel is awesome because of me!",
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649696501/reviewer5_ajpmeg-c_scale_h_238_q_auto_png_cvh5gh.png",
        },
        {
          name: "KFC Man",
          comment:
            "I am planning to announce a collaboration with this hotel because this hotel is so successful and will be beneficial to my business.",
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649696802/reviewer3_rn6htw-c_scale_h_238_q_auto_png_uktcjg.png",
        },
        {
          name: "Washton",
          comment:
            "I visited this hotel with my wife and we made plenty of memories here. I love this hotel. It is a good place to relax after a busy day.",
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649696848/reviewer1_ikoujp-c_scale_h_188_q_auto_ruacvc.png",
        },
        {
          name: "Bat",
          comment: "Safe hotel. No criminals.",
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649696577/reviewer4_rkpqlj-c_scale_h_238_q_auto_png_tmtvfn.png",
        },
        {
          name: "Mario",
          comment:
            "This is my favorite place to be at after a day of hard work.",
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649696802/reviewer2_wq9wh8-c_scale_h_240_q_auto_png_igfq8r.png",
        },
      ],
    };
  },
  methods: {},
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
@media (max-width: 1024px) {
}
@media (max-width: 750px) {
}
</style>
