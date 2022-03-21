<template>
<div>
    <h2 class="title-text">Reviews</h2>
    <main>
        <h2 class="head-text">5 Star Ratings ⭐⭐⭐⭐⭐</h2>
        <div class="display">
            <img class="img2" src="reviewer2.jpg" alt="review1">
              <p class="text-size"> "This is my favorite place to stay in after a day of hard work."</p>
        </div>
        <div class="display">
            <img class="img2" src="reviewer3.jpg" alt="review1">
            <p class="text-size"> "I am planning to announce a collaboration with this hotel because this hotel is so successful and will be beneficial to my business."</p>
        </div>
        <div class="display">
            <img class="img2" src="reviewer1.jpg" alt="review1">
            <p class="text-size"> "I visted this hotel with my wife and we had plenty of lovely memories here. I love this hotel. It was a good place to relax after a busy day."</p>
        </div>
        <h2 class="text-size underline display">READ MORE</h2>
    </main>
        
</div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
.title-text {
  font-size: var(--h1);
}
.head-text {
  font-size: var(--h3);
}

.home {
  display: flex;
  width: 95%;
  margin: auto;
}

.display {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  height: auto;
  margin: 1rem auto;
}

.text-size {
  font-size: 2.5rem;
  width: 50%;
}
.underline {
text-decoration: underline;
}
</style>