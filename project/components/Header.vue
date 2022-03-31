<template>
  <div class="header w100">
    <div class="header-topline w100">
      <h1 class="header-topline-text">HOTEL²</h1>
    </div>
    <div class="bar w100"></div>
    <div class="header-bottomline w100 flex-parent">
      <h4
        class="link margin-auto"
        v-for="link in links"
        :key="link.label"
        @click="send(link.ref)"
      >
        {{ link.label }}
      </h4>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(".header", { y: -120, duration: 1 });
    tl.from(".link", { opacity: 0, stagger: { each: 0.1, from: "left" } });
  },
  data() {
    return {
      links: [
        { label: "HOME", ref: "home" },
        { label: "FOOD", ref: "restaurant" },
        { label: "MISSION", ref: "mission" },
        { label: "TICKETS", ref: "tickets" },
        { label: "CONTACT", ref: "contact" },
        { label: "SHOP", ref: "shop" },
        { label: "ATTRACTIONS", ref: "attractions" },
        { label: "REVIEWS", ref: "reviews" },
        { label: "GALLERY", ref: "gallery" },
      ],
    };
  },
  methods: {
    send(ref) {
      this.$emit("send", `${ref}`);
    },
  },
};
</script>

<style scoped>
.link:hover {
  background-color: var(--secondary);
}
.header-topline-text {
  margin-top: 5px;
}
.header {
  z-index: 1;
  top: 0;
  position: fixed;
  color: var(--primaryText);
  left: 0;
  text-align: center;
}
.link {
  text-transform: uppercase;
}
.header-topline {
  top: 0;
  position: fixed;
  height: 60px;
  margin-top: 0px;
  background-color: var(--primary);
}
.header-bottomline {
  position: fixed;
  background-color: var(--primary);
  top: 57.5px;
  height: 30px;
  font-size: 7.5px;
}
.bar {
  top: 50px;
  position: fixed;
  background-color: white;
  height: 10px;
}
</style>
