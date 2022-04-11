<template>
  <div>
    <h2 class="section-title">Cuisine</h2>
    <h3 class="section-subtitle">
      Freshly Imported. Fairest Prices. Highly Rated.
    </h3>
    <main class="margin-auto">
      <section class="display flex-parent">
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
  data() {
    return {
      food: [
        {
          name: "Squared Steak",
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
.display {
  width: 80%;
  margin: 1rem auto;
}
</style>