<template>
  <div id="page" class="default">
    <Header class="header" @send="scrollMeTo($event)" />
    <div class="filler" ref="home"></div>
    <div ref="mission"><About class="section" /></div>
    <button class="btn1" @click="theme()">THEME CHANGE</button>
    <div ref="restaurant"><Restaurant class="section" /></div>
    <div ref="shop"><Shop class="section" /></div>
    <div ref="tickets"><Tickets class="section" /></div>
    <div ref="attractions"><Attractions class="section" /></div>
    <div ref="gallery"><Gallery class="section" /></div>
    <div ref="reviews"><Reviews class="section" /></div>
    <div ref="contact"><Contact class="section" /></div>
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
  theme() { 
    if (document.div.classList.contains("default")) {
    document.div.classList.add("mono");
    document.div.classList.remove("default");
  } else {
    document.div.classList.add("default");
    document.div.classList.remove("mono");
  }
    },
    test() {
      console.log("hi");
    },
  },
};
</script>
<style>
:root {
/*   --primary: #191817;
  --secondary: gray;
  --primaryText: white; */
  --pink: #fab59e;
  --gray: #4a5759;
  --light-purple: #e5d6df;
  --black: #0c0a09;
  --white: #ffffff;

  --h1: 4rem;
  --h2: 3rem;
  --h3: 2rem;
  --h4: 1.15rem;
}

.default {
  --primary: var(--pink);
  --secondary: var(--gray);
  --thirdary: var(--light-purple);
  --primaryText: var(--black);
}
.mono {
  --primary: var(--black);
  --secondary: var(--white);
  --thirdary: var(--gray);
  --primaryText: var(--white);
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
body{
    background-color: #fdf3e5;
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
  margin: 0rem 0rem 2rem 0rem;
}
.w10 {
  width: 10%;
}
.w20 {
  width: 20%;
}
.w30 {
  width: 30%;
}
.w40 {
  width: 40%;
}
.w50 {
  width: 50%;
}
.w60 {
  width: 60%;
}
.w70 {
  width: 70%;
}
.w80 {
  width: 80%;
}
.w90 {
  width: 90%;
}
.w100 {
  width: 100%;
}
</style>
