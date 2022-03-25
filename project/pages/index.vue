<template>
  <div id="page">
    <Header class="header" @send="scrollMeTo($event)" />
    <div class="filler" ref="home"></div>
    <div ref="mission"><About class="section" /></div>
    <div ref="restaurant"><Restaurant class="section" /></div>
    <div ref="shop"><Shop class="section" /></div>
    <div ref="tickets"><Tickets class="section" /></div>
    <div ref="attractions"><Attractions class="section" /></div>
    <div ref="gallery">
      <Gallery class="section" />
    </div>
    <div ref="reviews"><Reviews class="section" /></div>
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
      const el = this.$refs[ref];
      const top = el.offsetTop - 100;
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
  margin-bottom: 120px;
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
