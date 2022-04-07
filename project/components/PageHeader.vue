<template>
  <div class="alt-header w100">
    <div class="back-button">
      <a href="/" class="flex-parent">
        <img src="/icons/arrow.png" alt="" class="back-arrow" />
        <h2 class="back-text">Back to home</h2></a
      >
    </div>
    <div class="bar w100"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.back-arrow {
  width: 35px;
}
.bar {
  top: 35px;
  position: fixed;
  background-color: white;
  height: 5px;
}
.back-text {
  text-decoration: none;
  color: var(--primaryText);
  box-shadow: none;
}
.back-button {
  margin-left: 2rem;
  width: 25%;
}
.alt-header {
  background-color: black;
  position: fixed;
  top: 0;
  height: 50px;
}
</style>