<template>
  <div id="page" class="default" v-bind:class="{ mono: theme }">
    <Header class="header" @send="scrollMeTo($event)" />
    <div class="home" ref="home"><Home></Home></div>
    <div ref="mission"><About class="section" /></div>
    <button class="main-btn" @click="toggleTheme()">THEME CHANGE</button>
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
  padding-bottom: 65rem;
}
.home{
  background-image: var(--backimage);
  background-size: cover;
}
.img2 {
  width: 40rem;
  height: auto;
  object-fit: cover;
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

.section-title {
  font-size: var(--title);
  /* figure out whether to add padding 1 rem or not, whichever looks better */
}
.section-subtitle {
  font-size: var(--sub);
  margin: 0rem 2rem 2rem 2rem;
  /* allows for space at lowest media query, changes restuarant thing and seemingly nothing else */
}
.main-btn {
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
.main-btn:hover {
  transition: all 0.1s ease;
  box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
}
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
  .about-img {
    width: 40%;
  }
  .about-text {
    width: 70%;
  }
  .pop-text {
    margin: 3rem;
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
  }
}
/* media queries needed, basic things from flexbox gallery project but it needs more */
/* gotta make a drop down menu for the header because it's too big*/
@media (max-width: 1024px) {
  :root {
    --h1: 5rem;
    --h2: 4rem;
    --h3: 2.5rem;
    --h4: 1.5rem;
    --sub: 2.5rem;
    --title: 4.5rem;
  }
  .w30 {
    width: 70%;
  }
  .w50 {
    width: 70%;
  }
}
@media (max-width: 750px) {
  :root {
    --h1: 6rem;
    --h2: 5rem;
    --h3: 2.5rem;
    --h4: 2rem;
    --sub: 3rem;
    --title: 5.5rem;
  }

  .gallery-parent {
    display: block;
    flex-wrap: wrap;
  }
  .w30 {
    width: 100%;
  }
  .w50 {
    width: 100%;
  }
  /* figure this out changing rem here does nothing */
}

@media (max-width: 400px) {
}
</style>
