<template>
  <div class="footer w100">
    <div class="filler"></div>
    <div class="footer-inner flex-parent margin-auto w90">
      <a href="https://www.discord.com" class="footer-btn" target="_blank">
        <img
          src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608941/discord_chs0g3-c_scale_q_auto_w_200_ku3yl9.png"
          alt="discord"
          class="footer-img"
        />
      </a>
      <a
        href="https://www.facebook.com/zuck"
        class="footer-btn"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608941/fb_cci5tg-c_scale_q_auto_w_200_coytuw.png"
          alt="facebook"
          class="footer-img"
        />
      </a>
      <a
        href="https://www.instagram.com/officialpeppa/?"
        class="footer-btn"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608942/insta_y4g5c3-c_scale_q_auto_w_200_pynjbx.png"
          alt="instagram"
          class="footer-img"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/mrbeastyoutube/"
        class="footer-btn"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608941/linkedin_tasxa8-c_scale_q_auto_w_200_fhvnxi.png"
          alt="linkedin"
          class="footer-img"
        />
      </a>
      <a href="https://www.reddit.com" class="footer-btn" target="_blank">
        <img
          src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608941/reddit_wrimal-c_scale_q_auto_w_200_xgxvhe.png"
          alt="reddit"
          class="footer-img"
        />
      </a>
      <a
        href="https://www.twitter.com/POTUS?"
        class="footer-btn"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608942/twitter_nxjqyr-c_scale_q_auto_w_200_szsjgw.png"
          alt="twitter"
          class="footer-img"
        />
      </a>
      <a
        href="https://www.youtube.com/watch?v=b_DcQHbJIfE"
        class="footer-btn"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608942/yt_ppfpn6-c_scale_q_auto_w_200_khqle1.png"
          alt="youtube"
          class="footer-img"
        />
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
    const tlFooter = gsap.timeline({ scrollTrigger: ".footer" });
    /*clip-path: polygon describes where each vertex should be, ordered left to right and up to down. the percent things are ordered as horizontal, vertical*/
    tlFooter.to(".footer", {
      clipPath: "polygon(0% 60px, 100% 0px, 100% 100%, 0% 100%)",
      duration: 0,
    });
    tlFooter.to(".footer", {
      clipPath: "polygon(0% 50px, 100% 50px, 100% 100%, 0% 100%)",
      delay: 0.5,
      duration: 0.5,
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
  filter: brightness(var(--iconOpac));
}
.footer-btn:hover {
  filter: brightness(100%);
}
.copyright-text {
  margin: 7px auto;
}
.filler {
  height: 50px;
}
@media (max-width: 400px) {
  .footer-img {
    height: 30px;
  }
}
</style>
