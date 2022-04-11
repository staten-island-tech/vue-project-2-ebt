<template>
  <div id="page">
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
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
        {
          name: "EBT Replica",
          price: 13.99,
          img: "/terichick.jpg",
        },
      ],
    };
  },
};
</script>
<style>
:root {
  --primary: black;
  --secondary: #818181;
  --primaryText: white;

  --h1: 4rem;
  --h2: 3rem;
  --h3: 2rem;
  --h4: 1.15rem;
}
h1 {
  font-size: var(--h1);
}
h2 {
  font-size: var(--h2);
}
h3 {
  font-size: var(--h3);
}
h4 {
  font-size: var(--h4);
}
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
html,
body,
* {
  font-size: 10px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#page {
  margin: 0;
  padding: 0;
  position: relative;
}
.flex-parent {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.margin-auto {
  margin: auto;
}
.w90 {
  width: 90%;
}
.w100 {
  width: 100%;
}
</style>
