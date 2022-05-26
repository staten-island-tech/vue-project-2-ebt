<template>
  <div>
    <h2 class="section-title">Tickets</h2>
    <h3 class="section-subtitle">Order!</h3>
    <main class="margin-auto">
      <section class="w60 buy-ticket-area margin-auto flex-parent">
        <div class="">
          <button @click="switchRoom(0)" class="buy-ticket">3 Nights</button>
          <button @click="switchRoom(1)" class="buy-ticket">6 Nights</button>
          <button @click="switchRoom(2)" class="buy-ticket">12 Nights</button>
        </div>
      </section>
      <div class="flex-parent w100 purchase-area">
        <img src="tickets.png" alt="hotelo" class="ticket-img w50" />
        <div class="w50 margin-auto">
          <h3 class="purchase-text">Nights: {{ active.nights }}</h3>
          <h3 class="purchase-text">
            Small: {{ pricetag(active.priceSmall) }}
          </h3>
          <h3 class="purchase-text">
            Medium: {{ pricetag(active.priceMedium) }}
          </h3>
          <h3 class="purchase-text">
            Large: {{ pricetag(active.priceLarge) }}
          </h3>
          <a href="/tickets"><button class="buy-ticket link">More</button></a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      rooms: [
        {
          nights: 3,
          priceSmall: 1200,
          priceMedium: 1500,
          priceLarge: 2100,
        },
        {
          nights: 6,
          priceSmall: 2000,
          priceMedium: 2500,
          priceLarge: 3000,
        },
        {
          nights: 12,
          priceSmall: 3600,
          priceMedium: 4200,
          priceLarge: 5000,
        },
      ],

      active: {
        nights: 0,
        priceSmall: 0,
        priceMedium: 0,
        priceLarge: 0,
      },
    };
  },
  methods: {
    pricetag: function (prices) {
      let pricenum = Number(prices).toFixed(2);
      return `$${pricenum}`;
    },
    switchRoom: function (numero) {
      this.active = this.rooms[numero];
    },
  },
};
</script>

<style>
.ticket-img {
  height: auto;
  object-fit: cover;
  margin: auto;
  border-radius: 2rem;
  margin-bottom: 2rem;
}

.buy-ticket {
  display: inline-block;
  cursor: pointer;
  border: none;
  padding: 0 5rem;
  margin: 1rem 3rem 2rem 2rem;
  height: 4rem;
  font-weight: 600;
  line-height: 1.15;
  font-size: 1.6rem;
  line-height: 4rem;
  border-radius: 0.75rem;
  background-color: var(--thirdary);
  box-shadow: 0 0.5rem 1.5rem 0 rgb(0 118 255 / 39%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}
.purchase-area {
  margin: auto;
}

.buy-ticket:hover {
  background: rgba(0, 118, 255, 0.9);
  box-shadow: 0 0.6rem 2rem rgb(0 118 255 / 23%);
}

.space1 {
  margin: 0.5rem auto;
  font-size: 1.5rem;
  position: center;
}
@media (min-width: 1100px) {
  .purchase-area {
    width: 70%;
  }
  .purchase-text {
    font-size: 3rem;
  }
}
@media (max-width: 400px) {
  .purchase-area {
    width: 90%;
    margin-top: 1rem;
  }
  .buy-ticket-area {
    width: 70%;
  }
}
</style>
