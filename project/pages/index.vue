<template>
  <div id="page">
    <Header class="header" />
    <div class="filler"></div>
    <Restaurant />
    <Shop ref="shop" />
    <Tickets />
    <Attractions />
    <Gallery />
    <Footer class="footer" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    scrollMeTo() {
      let el = this.$refs.shop;
      let top = el.offsetTop;
      window.scrollTo(0, top);
      console.log(top);
    },
    test() {
      console.log("hi");
    },
  },
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
.filler {
  margin-bottom: 120px;
}
#page {
  margin: 0;
  padding: 0;
}
</style>
