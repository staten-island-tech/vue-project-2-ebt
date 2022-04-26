<template>
  <div id="page">
    <Header class="header" @send="scrollMeTo($event)" />
    <div class="filler" ref="home"></div>
    <div ref="mission"><About class="section" /></div>
    <div ref="restaurant"><Restaurant class="section" /></div>
    <div ref="shop"><Shop class="section" /></div>
    <div ref="tickets"><Tickets class="section" /></div>
    <div ref="attractions"><Attractions class="section" /></div>
    <div ref="gallery"><Gallery class="section" /></div>
    <Footer class="footer" />
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    // try to make an animation for gallery/attractions
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
  border-radius: 3rem;
  width: 90%;
  height: auto;
  margin: 5rem auto;
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
  font-size: var(--h2);
}
.w90 {
  width: 90%;
}
.w100 {
  width: 100%;
}
/* media queries needed, basic things from flexbox gallery project but it needs more */
/* gotta make a drop down menu for the header because it's too big*/
@media (max-width: 1366px) {
  .section {
    transform: scale(0.9);
    /* height: 150%; don't know why this exists */
    margin: 3rem auto;
  }

  h2 {
    font-size: 3.5rem;
  }
  h3 {
    font-size: 2.5rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  .section-title {
    font-size: 5rem;
  }
  .section-subtitle {
    font-size: 3.5rem;
  }
  .gallery-card {
    width: 50%;
  }
  .gallery-img {
    width: 90%;
    height: auto;
    margin: 5rem;
  }
  /* .gallery-description {
  } */
  #left-button {
    left: 30%;
  }
  #right-button {
    right: 30%;
  }
  .card {
    width: 40%;
  }
  .attractions-card {
    width: 32rem;
    height: 32rem;
  }
  .space1 {
    font-size: 2.5rem;
  }
  /*  fix this font-size */
  .attractions-description {
    font-size: 1.75rem;
  }
}

@media (max-width: 1024px) {
  .section {
    transform: scale(0.8);
    height: 200%;
    margin: 1.5rem auto;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
  }
  h4 {
    font-size: 2rem;
  }
  .section-title {
    font-size: 6rem;
  }
  .section-subtitle {
    font-size: 4rem;
  }
  /* figure out img and card media queries cuz thats the main issue
  headers increased by .5 each time
  section titles by 1 each time
  figure out card spacing

  might want different style for gallery and home, fix cards for attractions.
  */
  .gallery-card {
    width: 100%;
    margin-right: 7rem;
  }
  .gallery-img {
    width: 90%;
    height: auto;
    margin: 5rem;
  }
  /* .gallery-description {
  } */
  #left-button {
    left: 20%;
  }
  #right-button {
    right: 20%;
  }

  .card {
    width: 55%;
  }
  .attractions-card {
    width: 30rem;
    height: 34rem;
  }
  .attractions-description {
    font-size: 2rem;
  }
  .space1 {
    font-size: 2.5rem;
  }
}
@media (max-width: 750px) {
  .section {
    transform: scale(0.7);
    height: 250%;
    margin: 0 auto;
  }
  .flex-parent {
    flex-direction: column;
    align-items: center;
  }
  .flex-inner {
    width: 100%;
  }
  h2 {
    font-size: 4.5rem;
  }
  h3 {
    font-size: 3.5rem;
  }
  h4 {
    font-size: 2.5rem;
  }
  .section-title {
    font-size: 7rem;
  }
  .section-subtitle {
    font-size: 4.5rem;
  }

  .gallery-card {
    position: relative;
    width: 70%;
    background-color: #f44336;
    color: #010101;
    display: flex;
    margin-right: 5rem;
  }
  .gallery-img {
    width: 90%;
    height: auto;
    margin: 5rem;
  }

  .gallery-parent {
    flex-direction: column;
  }
  .gallery-description {
    margin-right: 0rem;
  }
  #left-button {
    left: 10%;
  }
  #right-button {
    right: 10%;
  }
  .card {
    width: 70%;
  }
  .pricetag {
    font-size: 2.5rem;
  }
  .attractions-card {
    width: 30rem;
    height: 40rem;
  }
  .attractions-description {
    font-size: 2.25rem;
  }
  .space1 {
    font-size: 7rem;
    margin-left: 0rem;
  }
  .img2 {
  }
  /* .btn1 {
  } might want to make button smaller */
  .display2 {
    width: 100%;
  }
}
</style>
