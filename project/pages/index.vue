<template>
  <div>
    <Header class="header" />
    <div id="page">
      <Footer class="footer" />
      <h2>test</h2>
      <h1 class="test">hi</h1>
      <Restaurant />
      <Shop />
      <Tickets />
      <Attractions />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style>
:root {
  --primary: black;
  --secondary: gray;
  --primaryText: white;
}
.header {
  margin-bottom: 100px;
}
.footer {
  margin-top: 100%;
}
</style>
