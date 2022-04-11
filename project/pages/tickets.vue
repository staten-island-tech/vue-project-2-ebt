<template>
  <div id="page">
    <PageHeader></PageHeader>
    <h1 class="alt-head">buy tickets</h1>
    <h2>Do it</h2>
  </div>
</template>

<script>
export default {};
</script>
<style>
:root {
  --primary: black;
  --secondary: #818181;
  --primaryText: white;

  --h1: 4rem;
  --h2: 3rem;
  --h3: 2rem;
  --h4: 1.15rem;
}
h1 {
  font-size: var(--h1);
}
h2 {
  font-size: var(--h2);
}
h3 {
  font-size: var(--h3);
}
h4 {
  font-size: var(--h4);
}
.filler {
  margin-bottom: 35rem;
}
.alt-display {
  text-align: center;
}
.alt-head {
  margin-top: 6rem;
  text-align: center;
  font-size: 6rem;
}
html,
body,
* {
  font-size: 10px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#page {
  text-align: center;
  margin: 0;
  padding: 0;
  position: relative;
}
.flex-parent {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.margin-auto {
  margin: auto;
}
.w90 {
  width: 90%;
}
.w100 {
  width: 100%;
}
</style>
