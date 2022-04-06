<template>
  <div class="alt-header w100">
    <div class="back-button">
      <a href="/">
        <img src="/icons/arrow.jpg" alt="" />
        <h1>Back to home</h1></a
      >
    </div>
    <div class="bar w100"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bar {
  top: 45px;
  position: fixed;
  background-color: white;
  height: 10px;
}
.back-button {
  color: var(--primaryText);
}
.alt-header {
  background-color: black;
  position: fixed;
  top: 0;
  height: 65px;
}
</style>