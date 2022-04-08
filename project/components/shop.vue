<template>
  <div class="none">
    <h2 class="section-title">Shop</h2>
    <h3 class="section-subtitle">Bring home a memory with you!</h3>
    <main class="home">
      <section class="display flex-parent">
        <Card
          v-for="goods in goods"
          :key="goods.name"
          :title="goods.name"
          :image="goods.img"
          :desc="pricetag(goods.price)"
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

  data() {
    return {
      goods: [
        {
          name: "EBT Hoodie",
          price: 14.99,
          img: "/steak.jpg",
        },
        {
          name: "EBT Tee",
          price: 4.99,
          img: "/pizza.jpg",
        },
        {
          name: "EBT Umbrella",
          price: 7.99,
          img: "/pie.jpg",
        },
        {
          name: "EBT Cards",
          price: 14.99,
          img: "/ramen.png",
        },
        {
          name: "EBT Stuffie",
          price: 8.99,
          img: "/kebabs.jpg",
        },
        {
          name: "EBT Replica",
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

<style>
.home {
  width: 95%;
}

.display {
  width: 80%;
  margin: 1rem auto;
}
</style>
