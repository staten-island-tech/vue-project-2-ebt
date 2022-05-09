<template>
  <div class="footer w100">
    <div class="footer-inner flex-parent margin-auto w90">
      <a href="https://www.discord.com" class="footer-btn" target="_blank">
        <img src="/icons/discord.png" alt="discord" class="footer-img" />
      </a>
      <a
        href="https://www.facebook.com/zuck"
        class="footer-btn"
        target="_blank"
      >
        <img src="/icons/fb.png" alt="facebook" class="footer-img" />
      </a>
      <a
        href="https://www.instagram.com/officialpeppa/?"
        class="footer-btn"
        target="_blank"
      >
        <img src="/icons/insta.png" alt="instagram" class="footer-img" />
      </a>
      <a
        href="https://www.linkedin.com/company/mrbeastyoutube/"
        class="footer-btn"
        target="_blank"
      >
        <img src="/icons/linkedin.png" alt="linkedin" class="footer-img" />
      </a>
      <a href="https://www.reddit.com" class="footer-btn" target="_blank">
        <img src="/icons/reddit.png" alt="reddit" class="footer-img" />
      </a>
      <a
        href="https://www.twitter.com/POTUS?"
        class="footer-btn"
        target="_blank"
      >
        <img src="/icons/twitter.png" alt="twitter" class="footer-img" />
      </a>
      <a
        href="https://www.youtube.com/watch?v=b_DcQHbJIfE"
        class="footer-btn"
        target="_blank"
      >
        <img src="/icons/yt.png" alt="youtube" class="footer-img" />
      </a>
    </div>
    <h3>We are not legally responsible for any stupid things you do here.</h3>
    <h4 class="copyright-text">© 2022 Hotel Squared. Now to Forever.</h4>
  </div>
</template>
<script>
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    const tlFooter = gsap.timeline({ scrollTrigger: ".footer", delay: 0.2 });
    /*clip-path: polygon describes where each vertex should be, ordered left to right and up to down. the percent things are ordered as horizontal, vertical*/
    tlFooter.from(".footer", {
      clipPath: "polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
    });
    tlFooter.to(".footer", {
      opacity: 100,
    });
  },
};
</script>


<style scoped>
.footer {
  bottom: -10;
  position: absolute;
  color: var(--primaryText);
  background-color: var(--primary);
  left: 0;
  text-align: center;
}
.footer-btn {
  width: 12%;
  filter: brightness(80%);
}
.footer-img {
  height: 45px;
  margin: 12.5px auto;
}
.footer-btn:hover {
  filter: brightness(100%);
}
.copyright-text {
  margin: 7px auto;
}
</style>