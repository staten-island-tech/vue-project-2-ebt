<template>

    <div class="w100 home-page">
    <div class="w100 flex-parent">
      <h2 class="welcome">WELCOME</h2>
    </div>
    <div class="w100 flex-parent"><h3 class="welcome-sub">to Hotel²</h3></div>
  </div>

</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    const tlHome = gsap.timeline({ delay: 0.2 });
    tlHome.from(".home-page", { opacity: 0, y: 100, duration: 0.5 });
  },
};
</script>

<style scoped>
.main-image {
  background-image: url(/main.jpg);

}
.welcome {
  color: var(--primaryText);
  background-color: var(--primary);
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
}
.welcome-sub {
  border-radius: 10px;
  margin-top: -15px;
  padding: 1rem;
  color: var(--primaryText);
  background-color: var(--primary);
  text-align: center;
}
</style>
