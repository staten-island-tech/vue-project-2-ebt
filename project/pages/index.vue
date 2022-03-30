<template>
  <div id="page">
    <Header class="header" @send="scrollMeTo($event)" />
    <div class="filler" ref="home"></div>
    <div class="home"><Home></Home></div>
    <div ref="mission"><About class="section" /></div>
    <div ref="restaurant"><Restaurant class="section" /></div>
    <div ref="shop" id="shop"><Shop class="section" /></div>
    <div ref="tickets"><Tickets class="section" /></div>
    <div ref="attractions"><Attractions class="section" /></div>
    <div ref="gallery"><Gallery class="section" /></div>
    <div ref="reviews"><Reviews class="section" /></div>
    <Footer class="footer" />
  </div>
</template>

<script>
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    const tlFooter = gsap.timeline({ scrollTrigger: ".footer", delay: 0 });
    tlFooter.from(".footer", {
      x: 1000,
      duration: 2,
    });
    const sections = gsap.utils.toArray(".section");
    sections.forEach((section) => {
      const tlScroll = gsap.timeline({ scrollTrigger: section, delay: 0.1 });
      tlScroll.from(section, {
        scrollTrigger: {
          trigger: section,
          toggleActions: "play complete reverse reset",
        },
        y: 100,
        opacity: 0,
        duration: 3,
      });
    });
  },
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
