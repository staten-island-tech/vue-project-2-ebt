<template>
  <div class="header w100">
    <div class="header-topline w100">
      <h1 class="header-topline-text">HOTEL²</h1>
    </div>
    <div class="bar w100"></div>
    <div class="header-bottomline w100 flex-parent">
      <h3
        class="header-link margin-auto"
        v-for="link in links"
        :key="link.label"
        @click="send(link.ref)"
      >
        {{ link.label }}
      </h3>
    </div>
    <div class="bar2 w100"></div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(".header", { y: -120, duration: 1 });
    tl.from(".header-link", {
      opacity: 0,
      stagger: { each: 0.1, from: "left" },
    });
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
.header-link:hover {
  background-color: var(--thirdary);
  border-radius: 0.5rem;
}
.header-topline-text {
  margin-top: 0.2rem;
}
.header {
  top: 0;
  position: fixed;
  color: var(--primaryText);
  left: 0;
  text-align: center;
  z-index: 5;
}
.header-link {
  text-transform: uppercase;
  margin-top: -1.5rem;
  transition: all 0.075s;
}
.header-topline {
  top: 0;
  position: fixed;
  height: 10rem;
  margin-top: 0px;
  background-color: var(--primary);
}
.header-bottomline {
  position: fixed;
  background-color: var(--primary);
  top: 5.75rem;
  height: 4rem;
  font-size: 1rem;
  padding: 2rem;
}
.bar {
  top: 5rem;
  position: fixed;
  background-color: white;
  height: 1rem;
}
.bar2 {
  top: 9rem;
  position: fixed;
  background-color: white;
  height: 1rem;
}
@media (max-width: 1024px) {
}
@media (max-width: 750px) {
}
</style>
