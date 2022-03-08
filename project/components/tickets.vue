<template>
  <div class="none">
    <h1 class="title-text">Tickets</h1>
    <h2 class="head-text">Order!</h2>
    <main class="home">
      <section class="display">
        <div class="display2">
        <button @click="displayOption()" class="btn1">3 Nights</button>
        <button @click="displayOption()" class="btn1">6 Nights</button>
        <button @click="displayOption()" class="btn1">12 Nights</button>
        </div>

        <div class="display2">
        <section class="display">
          <img src="arcade.jpg" alt="">
          <img src="arcade.jpg" alt="">
          <img src="arcade.jpg" alt="">
        </section>
        <button class="checkout-btn">More options</button>
      </div>
      </section>
    </main>
  </div>
</template>

<script>
import TicketCard from './TicketCard.vue';
// @ is an alias to /src

export default {
  components: { TicketCard },
  name: "Home",

  data() {
    return {
      rooms: [
        {
          nights: 3,
          size: "small",
          price: 1200, 
        },
        {
          nights: 6,
          size: "small",
          price: 2000, 
        },
        {
          nights: 12,
          size: "small",
          price: 3600, 
        },
        {
          nights: 3,
          size: "medium",
          price: 1500, 
        },
        {
          nights: 6,
          size: "medium",
          price: 2500, 
        },
        {
          nights: 12,
          size: "medium",
          price: 4200, 
        },
        {
          nights: 3,
          size: "large",
          price: 2100, 
        },
        {
          nights: 6,
          size: "large",
          price: 3000, 
        },
        {
          nights: 12,
          size: "large",
          price: 5000, 
        },
      ],
      order:[]
    };
  },
  methods: {
    pricetag: function (prices) {
      let pricenum = Number(prices).toFixed(2);
      return `$${pricenum}`;
    },
     addItem ( items ) {
      this.order.push(items);
      this.orderPrice = this.orderPrice + items.price;
    },
    displayOption ( items ) {
      this.order.push(items);
    }
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
.display2 {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40%;
  height: auto;
  margin: 1rem auto;
}

.btn1 {
display: inline-block;
text-transform: uppercase;
outline: none;
cursor: pointer;
font-weight: 600;
border-radius: 3px;
padding: 12px 24px;
border: 0;
color: #fff;
background: #ff5000;
line-height: 1.15;
font-size: 16px;
margin: 2rem;
}
.btn1:hover {
transition: all .1s ease;
box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
}
                
</style>