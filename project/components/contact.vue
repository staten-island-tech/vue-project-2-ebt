<template>
  <div>
    <h2 class="section-title">Contact Us</h2>
    <h3 class="section-subtitle">and FAQs!</h3>
    <main class="flex-evenly W90">
      <div class="w50">
        <section class="flex-parent">
          <div class="w30">
            <img
              class="contact-img"
              src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608699/phone_l6qj6w-c_scale_q_auto_w_200_ob8bag.png"
              alt="Phone Icon"
            />
          </div>
          <div class="w70 margin-auto">
            <h3>Call [ 18 hours a day, Mon-Fri ]: (718)-667-3222</h3>
          </div>
        </section>

        <section class="flex-parent">
          <div class="w30">
            <img
              class="contact-img"
              src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608699/chat_wrcirb-c_scale_q_auto_w_200_xspqxd.png"
              alt="Speech Bubble"
            />
          </div>
          <div class="w70 margin-auto">
            <h3>Chat [ 23 hours a day, Mon-Sat ]</h3>
          </div>
        </section>

        <section class="flex-parent">
          <div class="w30">
            <img
              class="contact-img"
              src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608699/mail_unyo5n-c_scale_q_auto_w_200_sg3qoc.png"
              alt="Envelope Icon"
            />
          </div>
          <div class="w70 margin-auto">
            <h3>Email [ We might get back to you within a year. ]</h3>
          </div>
        </section>

        <section class="flex-parent">
          <div class="w30">
            <img
              class="contact-img"
              src="https://res.cloudinary.com/dneegtvpa/image/upload/v1653608699/world_hccbln-c_scale_q_auto_w_200_liki0y.png"
              alt="World Icon"
            />
          </div>
          <div class="w70 margin-auto">
            <h3>
              Other Languages: Здравствуйте! 你好! नमस्ते! こんにちは！ Hello!
            </h3>
          </div>
        </section>
      </div>
      <!-- fix this, the margin makes it fall off at low width -->
      <div class="faq w30">
        <h2 class="margin-auto">FAQ:</h2>
        <ul>
          <li class="faq-list">Cancellation Policy</li>
          <li class="faq-list">Room Service</li>
          <li class="faq-list">VIP Rooms</li>
          <li class="faq-list">Planning Events</li>
          <li class="faq-list">Extensions</li>
          <li class="faq-list">Other</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<style scoped>
.flex-evenly {
  display: flex;
  justify-content: space-evenly;
}
.faq {
  padding: 0rem 5rem;
  margin: 2rem 0rem 0rem 0rem;
}
.faq-list {
  list-style-type: none;
  font-size: var(--h3);
  margin: 1rem auto;
}
.contact-img {
  height: 45px;
  margin: 12.5px auto;
}

@media (max-width: 1024px) {
  .w70 {
    width: 50%;
  }
  .w30 {
    width: 50%;
  }
}
@media (max-width: 750px) {
  h3 {
    font-size: 2rem;
  }
  /* possible solution but idk */
}
@media (max-width: 400px) {
  h3 {
    font-size: 1.5rem;
  }
  .faq-list {
    font-size: 2rem;
  }
  h2 {
    font-size: 3rem;
  }
  /* possible solution but idk */
}
</style>
