<template>
  <div id="page" class="default" v-bind:class="{mono: theme}">
    <PageHeader></PageHeader>
    <h1 class="alt-head">Shop</h1>
    <div class="flex-parent w90 margin-auto alt-display">
      <Card
        v-for="item in items"
        :key="item.name"
        :title="item.name"
        :image="item.img"
        :desc="pricetag(item.price)"
      >
      </Card>
    </div>
  </div>
</template>

<script>
export default {
     mounted() {
    //The next two lines are so stupid, but they work so it doesn't really matter
    this.theme = !this.theme
    this.theme = !this.theme
   },
   computed :{
    theme: {
      get() {
        return this.$store.state.theme
      },
      set(value){
       this.$store.commit('setTheme', value)
      }
    }
  },
  methods: {
    pricetag: function (prices) {
      let pricenum = Number(prices).toFixed(2);
      return `$${pricenum}`;
    },
  },
  data() {
    return {
      items: [
        {
          name: "EBT Hoodie",
          price: 14.99,
          img: "/steak.png",
        },
        {
          name: "EBT Tee",
          price: 4.99,
          img: "/pizza.png",
        },
        {
          name: "EBT Umbrella",
          price: 7.99,
          img: "/pie.png",
        },
        {
          name: "EBT Cards",
          price: 14.99,
          img: "/ramen.png",
        },
        {
          name: "EBT Stuffie",
          price: 8.99,
          img: "/kebabs.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.png",
        },
      ],
    };
  },
};
</script>
<style>
.filler {
  margin-bottom: 35rem;
}
.alt-display {
  text-align: center;
}
.alt-head {
  margin-top: 6rem;
  text-align: center;
  font-size: 6rem;
}
.w90 {
  width: 90%;
}
</style>
