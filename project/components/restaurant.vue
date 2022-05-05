<template>
  <div class="section">
    <h2 class="section-title">Cuisine</h2>
    <h3 class="section-subtitle">
      Freshly Imported. Fairest Prices. Highly Rated.
    </h3>
    <main class="margin-auto">
      <section class="w80 flex-parent margin-auto">
        <Card
          v-for="food in food"
          :key="food.name"
          :title="food.name"
          :image="food.img"
          :desc="pricetag(food.price)"
        >
        </Card>
      </section>
      <a href="/restaurant" class="link"> See More!</a>
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
          img: "/steak.png",
        },
        {
          name: "Pizza",
          price: 4.99,
          img: "/pizza.png",
        },
        {
          name: "Apple Pie",
          price: 7.99,
          img: "/pie.png",
        },
        {
          name: "Ramen",
          price: 14.99,
          img: "/ramen.png",
        },
        {
          name: "Kebabs",
          price: 8.99,
          img: "/kebabs.png",
        },
        {
          name: "Chicken Teriyaki",
          price: 13.99,
          img: "/terichick.png",
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
