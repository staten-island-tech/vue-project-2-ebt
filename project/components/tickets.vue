<template>
  <div>
    <h2 class="section-title">Tickets</h2>
    <h3 class="section-subtitle">Order!</h3>
    <main class="home1 margin-auto">
      <section class="w80 margin-auto flex-parent">
        <div class="">
          <button @click="switchRoom(0)" class="main-btn">3 Nights</button>
          <button @click="switchRoom(1)" class="main-btn">6 Nights</button>
          <button @click="switchRoom(2)" class="main-btn">12 Nights</button>
        </div>

        <div class="display-tickets">
          <main class="flex-parent">
            <img src="tickets.jpg" alt="hotelo" class="img2 height-auto" />
            <section class="space1 w100">
              <h3>Nights: {{ active.nights }}</h3>
              <h3>Small: {{ pricetag(active.priceSmall) }}</h3>
              <h3>Medium: {{ pricetag(active.priceMedium) }}</h3>
              <h3>Large: {{ pricetag(active.priceLarge) }}</h3>
            </section>
          </main>

          <a href="/tickets">
          <button class="main-btn" >more</button>
          </a>
        </div>
      </section>
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
.title-text {
  font-size: var(--h1);
  text-align: center;
}
.head-text {
  font-size: var(--h3);
  text-align: center;
}

.home1 {
  display: flex;
  width: 95%;
  margin: auto;
}

.display-tickets {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40%;
  margin: 1rem auto;
}

.space1 {
  margin: 0.5rem auto;
  font-size: 1.5rem;
}
</style>