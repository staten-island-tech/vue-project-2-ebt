<template>
  <Nuxt />
</template>
<style>
:root {
  --yellow: #fdf3e5;
  --pink: #fab59e;
  --gray: #4a5759;
  --light-purple: #e5d6df;
  --black: #0c0a09;
  --white: #ffffff;

  --h1: 4rem;
  --h2: 3rem;
  --h3: 2rem;
  --h4: 1.15rem;
  --sub: 2rem;
  --title: 4rem;
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
html,
body,
* {
  font-size: 10px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#page {
  margin: 0;
  padding: 0;
  position: relative;
}
.background {
  background-color: var(--yellow);
}
/*Themes*/
.default {
  --primary: var(--pink);
  --secondary: var(--gray);
  --thirdary: var(--light-purple);
  --primaryText: var(--black);
  --background: var(--yellow);
  --iconOpac: 40%;
  --backimage: url('/masterpiece2.png');
}
.mono {
  --primary: var(--black);
  --secondary: var(--white);
  --thirdary: var(--gray);
  --primaryText: var(--white);
  --background: var(--white);
  --iconOpac: 100%;
  --backimage: url('/masterpiece.png');
}
/*Preset Classes*/
.w10 {
  width: 10%;
}
.w20 {
  width: 20%;
}
.w30 {
  width: 30%;
}
.w33 {
  width: 33%;
}
.w40 {
  width: 40%;
}
.w50 {
  width: 50%;
}
.w60 {
  width: 60%;
}
.w67 {
  width: 67%;
}
.w70 {
  width: 70%;
}
.w80 {
  width: 80%;
}
.w90 {
  width: 90%;
}
.w100 {
  width: 100%;
}
.margin-auto {
  margin: auto;
}
.height-auto {
  height: auto;
}
.flex-parent {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
