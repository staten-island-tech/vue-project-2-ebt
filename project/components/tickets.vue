<template>
  <div class="none">
    <h1 class="title-text">Tickets</h1>
    <h2 class="head-text">Order!</h2>
    <main class="home">
      <section class="display">
        <button>Order here!</button>
        <div>
        <h2 class="summary-font">Summary</h2>
        <li class="space1" v-for="items in order" :key="items.name">{{ items.name }} {{pricetag(items.price)}} </li>
        <div class="totals">Total: {{ pricetag(orderPrice) }}  </div>
        <div><button class="clear-btn" @click="remove(kits, order)">Remove item</button></div>
        <button class="checkout-btn" @click="$router.push('Checkout')">Checkout</button>
      </div>
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
      kits: [
      {
      name: "AccessBio",
      price: 60,
      img: "/accessbio.jpg",
      },
      {
      name: "Binax",
      price: 45,
      img: "/binax.jpg",
      },
      {
      name: "Ellume",
      price: 65,
      img: "/ellume.jpg",
      },
      {
      name: "Everlywell",
      price: 40,
      img: "/everlywell.jpg",
      },
      {
      name: "Flowflex",
      price: 35,
      img: "/flowflex.jpg",
      },
      {
      name: "iHealth",
      price: 60,
      img: "/ihealth.jpg",
      },
      {
      name: "Inteliswab",
      price: 65,
      img: "/inteliswab.jpg",
      },
      {
      name: "On/Go",
      price: 55,
      img: "/ongo.jpg",
      },
      ],
      order: [],
      orderPrice: 0,
    };
  },
  methods: {
    pricetag: function (prices) {
      let pricenum = Number(prices).toFixed(2);
      return `$${pricenum}`;
    },
     addItem( items ) {
      this.order.push(items);
      this.orderPrice = this.orderPrice + items.price;
    },
    remove( items ){
      let cost = 0
      if (this.order.length !== 0) {
        [this.orderPrice.length - 1];
        this.order.pop( items );
        this.order.forEach( items => cost = cost + items.price)
        this.orderPrice = cost
      }
    },  
  },
};
</script>

<style>
.title-text {
  font-size: 4rem;
  text-align: center;
}
.head-text {
  font-size: 2rem;
  text-align: center;
}

.home {
  display: flex;
  width: 95%;
  margin: auto;
}

.display {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  height: auto;
  margin: 1rem auto;
}
</style>