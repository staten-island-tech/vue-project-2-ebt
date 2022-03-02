<template>
  <div class="none">
    <h1 class="title-text">Cuisine</h1>
    <h2 class="head-text">Freshly Imported. Fairest Prices. Highly Rated.</h2>
    <main class="home">
      <section class="display">
        <Card
          v-for="food in food"
          :key="food.name"
          :title="food.name"
          :image="food.img"
          :desc="pricetag(food.price)"
        >
        </Card>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      food: [
        {
          name: "EBT Steak",
          price: 14.99,
          img: "/steak.jpg",
        },
        {
          name: "Pizza",
          price: 4.99,
          img: "/pizza.jpg",
        },
        {
          name: "Apple Pie",
          price: 7.99,
          img: "/pie.jpg",
        },
        {
          name: "Ramen",
          price: 14.99,
          img: "/ramen.jpg",
        },
        {
          name: "Kebabs",
          price: 8.99,
          img: "/kebabs.jpg",
        },
        {
          name: "Chicken Teriyaki",
          price: 13.99,
          img: "/terichick.jpg",
        },
      ],
    };
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