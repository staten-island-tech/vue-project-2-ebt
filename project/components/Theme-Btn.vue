<template>
  <div class="theme">
    <button class="theme-btn" @click="toggleTheme()">THEME CHANGE</button>
  </div>
</template>

<script>
export default {
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
    toggleTheme() {
      this.theme = !this.theme;
    },
  },
};
</script>

<style scoped>
.theme-btn {
  display: inline-block;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 0.3rem;
  padding: 1.2rem 2.4rem;
  border: 0;
  color: var(--primaryText);
  background-color: var(--thirdary);
  line-height: 1.15;
  font-size: 1.6rem;
  margin: 1.5rem;
  position: relative;
}
.theme-btn:hover {
  transition: all 0.1s ease;
  box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
}
.theme {
  background-color: var(--primary);
  right: 0;
  position: absolute;
  border-radius: 1rem;
  z-index: 0;
}
</style>