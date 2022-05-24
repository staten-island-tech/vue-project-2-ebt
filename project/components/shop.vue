<template>
  <div>
    <h2 class="section-title">Shop</h2>
    <h3 class="section-subtitle">Bring home a memory with you!</h3>
    <main class="">
      <section class="w80 margin-auto flex-parent">
        <Card
          v-for="goods in goods"
          :key="goods.name"
          :title="goods.name"
          :image="goods.img"
          :desc="pricetag(goods.price)"
        >
        </Card>
      </section>
      <a href="/shop" class="link"><button class="main-btn"> See More!</button></a>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      goods: [
        {
          name: "Squared Hoodie",
          price: 74.99,
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1652893792/hoodie_gtlmvb.png",
        },
        {
          name: "Squared Tee",
          price: 29.99,
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1652893792/tee_lgmp3z.png",
        },
        {
          name: "Squared Umbrella",
          price: 20.99,
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1652893792/umbrella_wfwf9f.png",
        },
        {
          name: "Squared Cards",
          price: 8.99,
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1652893792/poker_dntjtb.png",
        },
        {
          name: "Squared Pillow",
          price: 17.99,
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1652893792/pillow_b4uvom.png",
        },
        {
          name: "Squared Tesseract",
          price: 23.99,
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1652893792/tesseract_v1yb8v.png",
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
