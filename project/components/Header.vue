<template>
  <div class="w100">
    <!--Name-->
    <div class="header w100 flex-parent">
      <h1 class="header-title w33">HOTEL²</h1>
      <div class="w67"></div>
    </div>
    <!--sections & gear icon-->
    <div class="header-over w100">
      <div class="w30 header-over-gap"></div>
      <div class="header-sections flex-parent w60">
        <div
          class="header-category w33"
          v-for="section in sections"
          :key="section.name"
          @mouseover="section.active = true"
          @mouseleave="section.active = false"
        >
          <h2 class="header-section-name">{{ section.name }}</h2>
          <div v-if="section.active" class="header-link-outer w100">
            <div
              v-for="link in section.links"
              :key="link.label"
              @click="send(link.ref)"
              class="header-link"
            >
              <h3 class="header-link-label">{{ link.label }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="w20">
        <img
          src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608941/settings_oxmdh8-c_scale_q_auto_w_200_mprelt.png"
          alt="settings"
          class="settings-img"
          @click="settingsActive = !settingsActive"
          :class="{ animated: settingsActive }"
        />
      </div>
    </div>
    <!--settings tab-->
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
.w33 {
  width: 33%;
}
.w67 {
  width: 67%;
}
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
.header-link-outer {
  background-color: var(--thirdary);
  margin-top: 0.7rem;
  padding-bottom: 0.1rem;
  padding-top: 0.1rem;
}
.header-over {
  z-index: 2;
  position: fixed;
  display: flex;
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
.header-link-label {
  font-size: 2rem;
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
  .bar {
    top: 5.25rem;
  }
}
@media (max-width: 900px) {
  .w67 {
    width: 0%;
  }
  .header-title {
    width: 100%;
  }
  .header-over {
    top: 5rem;
  }
  .header-over-gap {
    width: 0%;
  }
  .header-sections {
    width: 100%;
  }
  .header {
    height: 9.6rem;
  }
  .bar {
    top: 8.85rem;
  }
  .header-section-name {
    font-size: 3rem;
  }
  .settings-tab {
    top: 4.5rem;
  }
}
@media (max-width: 600px) {
  .header-link-label {
    font-size: 1.5rem;
  }
  .header-section-name {
    font-size: 2rem;
  }
  .settings-img {
    top: -3rem;
  }
  .header {
    height: 8rem;
  }
  .bar {
    top: 7.25rem;
  }
  .settings-tab {
    top: 3rem;
  }
}
</style>
