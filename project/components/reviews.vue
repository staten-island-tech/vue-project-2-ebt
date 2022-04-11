<template>
  <div>
    <h2 class="section-title">Reviews</h2>
    <h3 class="section-subtitle">
      Why we are the best !!
    </h3>
    <main class="reviews">
      <h2 class="section-subtitle">5 Star Ratings ⭐⭐⭐⭐⭐</h2>
      <div class="review-card">
        <img class="img2" src="reviewer5.jpg" alt="review1" />
        <p class="text-size">
          "This hotel wouldn't exist without me. This hotel is awesome because
          of me!"
        </p>
      </div>
      <div class="review-card">
        <img class="img2" src="reviewer3.jpg" alt="review1" />
        <p class="text-size">
          "I am planning to announce a collaboration with this hotel because
          this hotel is so successful and will be beneficial to my business."
        </p>
      </div>
      <div class="review-card">
        <img class="img2" src="reviewer1.jpg" alt="review1" />
        <p class="text-size">
          "I visited this hotel with my wife and we had plenty of lovely
          memories here. I love this hotel. It is a good place to relax after a
          busy day."
        </p>
      </div>
      <div class="review-card">
        <img class="img2" src="reviewer4.jpg" alt="review1" />
        <p class="text-size">"Safe hotel. No criminals."</p>
      </div>
      <div class="review-card">
        <img class="img2" src="reviewer2.jpg" alt="review1" />
        <p class="text-size">
          "This is my favorite place to be at after a day of hard work."
        </p>
      </div>
      <a class="link" href="/reviews">READ MORE REVIEWS</a>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>


.review-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  height: auto;
  margin: 4rem auto;
  background-color: #ffffff;
  color: #000000;
}

.text-size {
  font-size: 2.5rem;
  width: 50%;
  margin: auto;

}

.reviews {
  overflow: auto;
  overflow-x: hidden;
  width: 100%;
  height: 50rem;
  scrollbar-width: none;
}
a:visited {
  color:black;
}
</style>