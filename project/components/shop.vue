<template>
  <div class="none">
    <h2 class="title-text">Shop</h2>
    <h3 class="head-text">Bring home a memory with you!</h3>
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
          img: "/ramen.jpg",
        },
        {
          name: "EBT Stuffie",
          price: 8.99,
          img: "/kebabs.jpg",
        },
        {
          name: "EBT Replica",
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
  font-size: var(--h1);
  text-align: center;
}
.head-text {
  font-size: var(--h3);
  text-align: center;
}

.home {
  display: flex;
  width: 95%;
  margin: auto;
}

.display {
  width: 80%;
  height: auto;
  margin: 1rem auto;
}
</style>