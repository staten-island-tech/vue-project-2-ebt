<template>
  <div class="w100">
    <div class="header w100 flex-parent">
      <h1 class="header-title w33">HOTEL²</h1>
      <div class="w67"></div>
    </div>
    <!--separating section links from main header-->
    <div class="header-over flex-header w100">
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
              <h3>{{ link.label }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w20">
        <img
          src="icons/settings.png"
          alt="settings"
          class="settings-img"
          @click="settingsActive = !settingsActive"
          :class="{ animated: settingsActive }"
        />
      </div>
    </div>
    <div class="header-under w100">
      <div class="settings-tab w20" :class="{ animatedTab: !settingsActive }">
        <Theme-Btn></Theme-Btn>
      </div>
    </div>
    <div class="bar"></div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(".header", { y: -120, duration: 1 });
    tl.from(".header-category", {
      opacity: 0,
      stagger: { each: 0.1, from: "left" },
    });
  },
  data() {
    return {
      settingsActive: false,
      sections: [
        {
          name: "ABOUT",
          links: [
            { label: "MISSION", ref: "mission" },
            { label: "CONTACT", ref: "contact" },
            { label: "HOME", ref: "home" },
          ],
          active: false,
        },
        {
          name: "BUY",
          links: [
            { label: "SHOP", ref: "shop" },
            { label: "FOOD", ref: "restaurant" },
            { label: "TICKETS", ref: "tickets" },
          ],
          active: false,
        },
        {
          name: "EXPLORE",
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
.settings-img {
  height: 5rem;
  transition: transform 1s ease-in-out;
  filter: brightness(var(--iconOpac));
  position: relative;
  z-index: 2;
}
.animated {
  transform: rotate(-90deg);
}
.animatedTab {
  transform: translateY(-10rem);
}
.bar {
  width: 100%;
  height: 1rem;
  background-color: var(--yellow);
  position: fixed;
  top: 4.1rem;
}
.header-title {
  margin-top: 0.2rem;
}
.flex-header {
  display: flex;
}
.header-link-outer {
  background-color: var(--thirdary);
  margin-top: 0.7rem;
  padding-bottom: 0.1rem;
  padding-top: 0.1rem;
}
.header-over {
  z-index: 2;
  position: fixed;
}
.header-under {
  z-index: 1;
  position: fixed;
  top: 4rem;
}
.header {
  top: 0;
  position: fixed;
  color: var(--primaryText);
  left: 0;
  text-align: center;
  z-index: 2;
  background-color: var(--primary);
}
.header-link {
  text-transform: uppercase;
  padding: 0.4rem;
  margin: 0.5rem;
  cursor: pointer;
}
.header-link:hover {
  background-color: var(--primary);
}
.header-category {
  margin-top: 7px;
  z-index: 2;
  cursor: pointer;
}
.settings-tab {
  background-color: var(--primary);
  border-radius: 1rem;
  transition: all 0.85s ease-in-out;
  z-index: 1;
  right: 0;
  position: absolute;
}
@media (max-width: 1024px) {
}
@media (max-width: 750px) {
}
</style>
