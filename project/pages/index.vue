<template>
  <div id="page" class="default" v-bind:class="{ mono: theme }">
    <Header class="header" @send="scrollMeTo($event)" />
    <div class="home" ref="home"><Home></Home></div>
    <div ref="mission"><About class="section" /></div>
    <button class="themeBtn" @click="toggleTheme()">THEME CHANGE</button>
    <div ref="restaurant"><Restaurant class="section" /></div>
    <div ref="shop"><Shop class="section" /></div>
    <div ref="tickets"><Tickets class="section" /></div>
    <div ref="attractions"><Attractions class="section" /></div>
    <div ref="gallery">
      <Gallery class="section" />
    </div>
    <div ref="reviews"><Reviews class="section" /></div>
    <div ref="contact"><Contact class="section" /></div>
    <Footer class="footer" />
  </div>
</template>

<script>
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    //The next two lines are so stupid, but they work so it doesn't really matter
    this.theme = !this.theme;
    this.theme = !this.theme;
    const sections = gsap.utils.toArray(".section");
    sections.forEach((section) => {
      const tlScroll = gsap.timeline({ scrollTrigger: section, delay: 0.1 });
      tlScroll.from(section, {
        y: 101,
        opacity: 0,
        duration: 1.5,
      });
    });
  },
  name: "IndexPage",
  watch: {
    "$store.state.theme": function () {
      console.log(this.theme);
    },
  },
  computed: {
    theme: {
      get() {
        return this.$store.state.theme;
      },
      set(value) {
        this.$store.commit("setTheme", value);
      },
    },
  },
  methods: {
    scrollMeTo(ref) {
      const el = this.$refs[ref];
      const top = el.offsetTop - 100;
      window.scrollTo(0, top);
      console.log(el);
    },

    toggleTheme() {
      this.theme = !this.theme;
    },
  },
};
</script>
<style>
/*Generic classes are now in .nuxt/layout/default.vue*/
.home-page {
  padding-top: 35rem;
  margin-bottom: 40rem;
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
.section-title {
  font-size: var(--h1);
}
.section-subtitle {
  font-size: var(--h3);
  margin: 0rem 0rem 2rem 0rem;
}
.themeBtn {
  display: inline-block;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 12px 24px;
  border: 0;
  color: var(--primaryText);
  background-color: var(--thirdary);
  line-height: 1.15;
  font-size: 16px;
  margin: 2rem;
}
.themeBtn:hover {
  transition: all 0.1s ease;
  box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
}
.link {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  height: auto;
  margin: 1rem auto;
  color: var(--primaryText);
  font-size: 2.5rem;
  width: 50%;
  margin: auto;
  /* media queries needed, basic things from flexbox gallery project but it needs more */
  /* gotta make a drop down menu for the header because it's too big*/
  @media (max-width: 1366px) {
    .section {
      transform: scale(0.95);
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
    .gallery-description {
      width: 95%;
    }
    #left-button {
      left: 30%;
    }
    #right-button {
      right: 30%;
    }
    .card {
      width: 40%;
    }
    .space1 {
      font-size: 2.5rem;
    }
    /*  fix this font-size */
    .at .about-img {
      width: 40%;
    }
    .about-text {
      width: 70%;
    }
    .pop-text {
      margin: 3rem;
    }
  }

  @media (max-width: 1024px) {
    .section {
      transform: scale(0.9);
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
      width: 93%;
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

    .space1 {
      font-size: 2.5rem;
    }
    .about-img {
      width: 70%;
    }
    .about-text {
      width: 92.5%;
    }
  }
  @media (max-width: 750px) {
    .section {
      transform: scale(0.85);
      height: 250%;
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
    /* fix this thick background*/
    .gallery-img {
      width: 100%;
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

    .space1 {
      font-size: 7rem;
      margin-left: 0rem;
    }
    .about-img {
      width: 80%;
    }
    .about-text {
      width: 95%;
    }
    .img2 {
      width: ;
    }
    /* .btn1 {
  } might want to make button smaller */
  }
}
</style>