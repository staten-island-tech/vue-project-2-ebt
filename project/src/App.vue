<script setup>
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <h1>Test app.vue</h1>
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<style>
:root {
  --color1: rgb(219, 219, 219);
  --color2: black;
  --color3: black;
  --color4: black;
  --color5: black;
  --color6: black;
  --color7: black;
  --color8: black;
  --color9: black;
  --color10: black;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
body {
  margin: 0;
  padding: 0;
}
</style>
