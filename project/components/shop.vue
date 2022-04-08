<template>
  <div>
    <h2 class="section-title">Shop</h2>
    <h3 class="section-subtitle">Bring home a memory with you!</h3>
    <main class="">
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
          name: "Squared Hoodie",
          price: 74.99,
          img: "/hoodie.jpg",
        },
        {
          name: "Squared Tee",
          price: 29.99,
          img: "/tee.jpg",
        },
        {
          name: "Squared Umbrella",
          price: 20.99,
          img: "/pie.jpg",
        },
        {
          name: "Squared Cards",
          price: 8.99,
          img: "/poker.jpg",
        },
        {
          name: "Squared Pillow",
          price: 17.99,
          img: "/pillow.jpg",
        },
        {
          name: "Squared Tesseract",
          price: 23.99,
          img: "/tesseract.jpg",
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