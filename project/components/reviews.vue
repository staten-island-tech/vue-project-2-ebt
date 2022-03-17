<template>
<div>
    <h2 class="title-text">Reviews</h2>
    <main>
        <h2 class="head-text">5 Star Ratings</h2>
        <div>
            <img src="reviewer1.png" alt="review1">
            <p> I visted this hotel with my wife.
                
                I love this hotel.</p>
        </div>
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
</style>