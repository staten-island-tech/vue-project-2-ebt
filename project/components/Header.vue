<template>
  <div class="w100">
    <div class="header w100 flex-parent">
      <h1 class="header-title w33">HOTEL²</h1>
      <div class="w67"></div>
    </div>
    <!--separating section links from main header-->
    <div class="header-under flex-header w100">
      <div class="w30"></div>
      <div class="header-sections flex-parent w60">
        <div
          class="header-category w33"
          v-for="section in sections"
          :key="section.name"
          @mouseover="section.active = true"
          @mouseleave="section.active = false"
        >
          <h2>{{ section.name }}</h2>
          <div v-if="section.active" class="header-link-outer w100">
            <div
              v-for="link in section.links"
              :key="link.label"
              @click="send(link.ref)"
              class="header-link"
            >
              <h2>{{ link.label }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="w10">
        <img src="icons/settings.png" alt="settings" class="settings-img" />
      </div>
    </div>
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
      sections: [
        {
          name: "Sec 1",
          links: [
            { label: "FOOD", ref: "restaurant" },
            { label: "MISSION", ref: "mission" },
            { label: "SHOP", ref: "shop" },
          ],
          active: false,
        },
        {
          name: "EXPLORE",
          links: [
            { label: "HOME", ref: "home" },
            { label: "TICKETS", ref: "tickets" },
            { label: "CONTACT", ref: "contact" },
          ],
          active: false,
        },
        {
          name: "Sec 3",
          links: [
            { label: "ATTRACTIONS", ref: "attractions" },
            { label: "REVIEWS", ref: "reviews" },
            { label: "GALLERY", ref: "gallery" },
          ],
          active: false,
        },
      ],
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
}
.settings-img {
  width: 50%;
}
.header-title {
  margin-top: 0.2rem;
}
.flex-header {
  display: flex;
}
.header-link-outer {
  margin-top: 1rem;
  background-color: lightblue;
}
.header-under {
  z-index: 10;
  position: fixed;
}
.header {
  top: 0;
  position: fixed;
  color: var(--primaryText);
  left: 0;
  text-align: center;
  z-index: 5;
  background-color: var(--primary);
}
.header-link {
  text-transform: uppercase;
}
.header-category {
  margin-top: 7px;
  padding-left: 50px;
  padding-right: 50px;
}
</style>