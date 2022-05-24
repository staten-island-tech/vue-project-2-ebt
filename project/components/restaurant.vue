<template>
  <div>
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
      <a href="/restaurant" class="link"
        ><button class="main-btn">See More!</button></a
      >
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
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649781661/steak_niqql6-c_scale_h_178_q_auto_png_ks0zbr-c_scale_h_238_mxzym4.png",
        },
        {
          name: "Pizza",
          price: 4.99,
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649697074/pizza_oc5q2j-c_scale_h_238_q_auto_png_e3vkc2.png",
        },
        {
          name: "Apple Pie",
          price: 7.99,
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649697074/pie_rjeipa-c_scale_h_238_q_auto_png_s44whf.png",
        },
        {
          name: "Ramen",
          price: 14.99,
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649781661/ramen_vlban9-c_scale_h_194_q_auto_png_lnjzsw-c_scale_h_238_qdgtib.png",
        },
        {
          name: "Kebabs",
          price: 8.99,
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649697074/kebabs_hmatyn-c_scale_h_238_q_auto_png_gxun6v.png",
        },
        {
          name: "Chicken Teriyaki",
          price: 13.99,
          img: "https://res.cloudinary.com/dneegtvpa/image/upload/v1649781661/terichick_q0kazd-c_scale_h_198_q_auto_png_pmneml-c_scale_h_238_nrtmfr.png",
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
