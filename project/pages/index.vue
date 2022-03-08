<template>
  <div id="page">
    <Header class="header" />
    <div class="filler"></div>
    <Restaurant class="section" />
    <Shop ref="shop" class="section" />
    <Tickets class="section" />
    <Attractions class="section" />
    <Footer class="footer" />
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {},
  name: "IndexPage",
  methods: {
    scrollMeTo() {
      let el = this.$refs.shop;
      let top = el.offsetTop;
      window.scrollTo(0, top);
      console.log(top);
    },
    test() {
      console.log("hi");
    },
  },
};
</script>
<style>
:root {
  --primary: black;
  --secondary: gray;
  --primaryText: white;
}
.header {
  margin-bottom: 100px;
}
.footer {
  margin-top: 100%;
}
.filler {
  margin-bottom: 120px;
}
#page {
  margin: 0;
  padding: 0;
}
.section {
  background-color: black;
  color: var(--primaryText);
  border-radius: 30px;
  width: 90%;
  height: auto;
  margin: 50px auto;
}
</style>
