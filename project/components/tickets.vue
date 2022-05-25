<template>
  <div>
    <h2 class="section-title">Tickets</h2>
    <h3 class="section-subtitle">Order!</h3>
    <main class="margin-auto">
      <section class="w60 margin-auto flex-parent">
        <div class="">
          <button @click="switchRoom(0)" class="buy-ticket">3 Nights</button>
          <button @click="switchRoom(1)" class="buy-ticket">6 Nights</button>
          <button @click="switchRoom(2)" class="buy-ticket">12 Nights</button>
        </div>
      </section>
        <div class="flex-parent w100">
          <img src="tickets.png" alt="hotelo" class="ticket-img w50" />
          <div class="w50">
            <h3>Nights: {{ active.nights }}</h3>
            <h3>Small: {{ pricetag(active.priceSmall) }}</h3>
            <h3>Medium: {{ pricetag(active.priceMedium) }}</h3>
            <h3>Large: {{ pricetag(active.priceLarge) }}</h3>
            <a href="/tickets"><button class="buy-ticket">More</button></a>
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
  width: 50rem;
  height: auto;
  object-fit: cover;

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
  border-radius: .75rem;
  background-color: var(--thirdary);
  box-shadow: 0 0.5rem 1.5rem 0 rgb(0 118 255 / 39%);
  transition: background 0.2s ease, color 0.2s ease,box-shadow 0.2s ease;
}

.buy-ticket:hover{
 background: rgba(0,118,255,0.9);
 box-shadow: 0 .6rem 2rem rgb(0 118 255 / 23%);
}

.space1 {
  margin: 0.5rem auto;
  font-size: 1.5rem;
  position: center;
}
@media (max-width: 1024px) {
}
@media (max-width: 750px) {
}
</style>
