<template>
  <div>
    <button class="main-btn" @click="toggleTheme()">THEME CHANGE</button>
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
  right: 0;
  position: absolute;
}
.main-btn:hover {
  transition: all 0.1s ease;
  box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
}
</style>