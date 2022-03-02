<template>
    <div class="card">
    <h2 class="title">{{ title }}</h2>
    <img class="img1" :src="image" alt=""/>
    <h3 class="pricetag">{{ desc }}</h3>
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
    width: 30%;
    background-color:#42b983;
    height: auto;
    margin: 2rem auto;
}

.img1 {
    width: 90%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.title {
    color: #212121;
    font-size: 2rem;
    box-sizing: border-box;
    margin: auto;
    text-align: center;
}
.pricetag {
    color: #212121;
    font-size: 1.5rem;
    margin: 1rem auto;
    text-align: center;
}

</style>