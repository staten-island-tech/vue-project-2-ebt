<template>
  <div class="header">
    <div class="header-topline">
      <h1>EBT HOTEL</h1>
    </div>
    <div class="bar"></div>
    <div class="header-bottomline">
      <h2 v-for="link in links" :key="link.label">
        {{ link.label }}
      </h2>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(".header", { y: -120, duration: 1 });
    tl.from(".header-bottomline", { x: 1000, duration: 0.75 });
  },
  data() {
    return {
      links: [
        { label: "HOME", link: "" },
        { label: "FOOD", link: "" },
        { label: "MISSION", link: "" },
        { label: "PLAN", link: "" },
        { label: "CONTACT", link: "" },
        { label: "SHOP", link: "shop" },
        { label: "ATTRACTIONS", link: "" },
        { label: "REVIEWS", link: "" },
        { label: "GALLERY", link: "" },
      ],
    };
  },
  methods: {
    scrollMeTo(ref) {
      let el = this.$refs.ref;
      let top = el.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>


<style scoped>
.header {
  top: 0;
  position: fixed;
  color: var(--primaryText);
  width: 100%;
  left: 0;
  text-align: center;
}
.header-topline {
  top: 0px;
  width: 100%;
  position: fixed;
  height: 5px;
  margin-top: -10px;
  background-color: var(--primary);
}
.header-bottomline {
  position: fixed;
  background-color: var(--primary);
  width: 100%;
  top: 55px;
  height: 30px;
  font-size: 7.5px;
  display: flex;
  justify-content: space-around;
}
.bar {
  width: 100%;
  top: 45px;
  position: fixed;
  background-color: green;
  height: 10px;
}
</style>