<template>
  <div class="none">
    <h1 class="title-text">Tickets</h1>
    <h2 class="head-text">Order!</h2>
    <main class="home">
      <section class="display"></section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {};
  },
  methods: {
    pricetag: function (prices) {
      let pricenum = Number(prices).toFixed(2);
      return `$${pricenum}`;
    },
  },
};
</script>

<style>
.title-text {
  font-size: 4rem;
  text-align: center;
}
.head-text {
  font-size: 2rem;
  text-align: center;
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