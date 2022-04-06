<template>
  <div id="page">
    <PageHeader></PageHeader>
    <h1>Testing, testing</h1>
    <div class="flex-parent w90 margin-auto shop-display">
      <Card
        v-for="goods in items"
        :key="goods.name"
        :title="goods.name"
        :image="goods.img"
        :desc="goods.price"
      >
      </Card>
    </div>
  </div>
</template>

<script>
export default {
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
.shop-display {
  text-align: center;
}
html,
body,
* {
  font-size: 10px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.test {
  height: 110vh;
}
.line1 {
  width: 100%;
  max-width: 800px;
  height: 8px;
  margin: 0 0 10px 0;
  position: relative;
  display: inline-block;
  background-color: blue;
}
#page {
  margin: 0;
  padding: 0;
  position: relative;
}
.home-page {
  margin-bottom: 40rem;
}
.section {
  text-align: center;
  background-color: var(--primary);
  color: var(--primaryText);
  border-radius: 30px;
  width: 90%;
  height: auto;
  margin: 50px auto;
}
.flex-parent {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.margin-auto {
  margin: auto;
}
.height-auto {
  height: auto;
}
.section-title {
  font-size: var(--h1);
}
.section-subtitle {
  font-size: var(--h3);
}
.w90 {
  width: 90%;
}
.w100 {
  width: 100%;
}
</style>
