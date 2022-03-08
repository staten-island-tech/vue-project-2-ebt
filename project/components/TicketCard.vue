<template>

        <div class="card">
        <h2 class="title">{{ title }}</h2>
        <img class="img1" :src="image" alt=""/>
        <h3 class="pricetag">{{ desc }}</h3>
        <button @click="$emit('button-click')" class="btn1">add to cart</button>
        </div>

</template>

<script>
    export default {
        name: "Card",
        props: {
            title: String,
            desc: String,
            image: String,
        },
    };
</script>

<style>
.card {
    width: 23%;
    background-color:#42b983;
    height: auto;
    margin: 1rem auto;
    
}

.img1 {
    width: 90%;
    height: auto;
}
.btn1 {
  text-transform: uppercase;
  text-decoration: none;
  margin: 0.25rem 1rem 1rem 1rem;
  font-size: 1.5rem;
  transition: background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
  cursor: pointer;
}
.btn1:hover {
color: #241c15;
background-color: #d9d7cd;
}

.title {
    color: #212121;
    font-size: 2rem;
    box-sizing: border-box;
}
.pricetag {
    color: #212121;
    font-size: 1.5rem;
    margin: 1rem 1rem 1rem 1rem;
}

</style>