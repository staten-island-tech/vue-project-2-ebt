<template>
  <div id="page" class="default" v-bind:class="{ mono: theme }">
    <Header class="header" @send="scrollMeTo($event)" />
    <div class="home" ref="home"><Home></Home></div>
    <div ref="mission"><About class="section" /></div>
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
  .w50 {
    width: 70%;
  }
}
@media (max-width: 400px) {
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
