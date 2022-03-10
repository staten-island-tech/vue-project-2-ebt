<template>
  <div id="page">
    <Header class="header" />
    <div class="filler"></div>
    <div ref="restaurant"><Restaurant class="section" /></div>
    <div ref="shop"><Shop class="section" /></div>
    <div ref="tickets"><Tickets class="section" /></div>
    <div ref="attractions"><Attractions class="section" /></div>
    <Footer class="footer" />
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {},
  data() {},
  name: "IndexPage",
  methods: {
    scrollMeTo(ref) {
      const el = this.$refs.shop;
      const top = el.offsetTop;
      window.scrollTo(0, top);
      console.log(el);
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

.filler {
  margin-bottom: 120px;
}
html,
body {
  margin: 0;
  padding: 0;
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
