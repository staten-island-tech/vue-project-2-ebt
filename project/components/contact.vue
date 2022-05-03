<template>
  <div>
    <h2 class="section-title" >Contact Us</h2>
    <h3 class="section-subtitle">and FAQs!</h3>
    <main class="flex-evenly W90 ">
    <div class="w50">

      <section class="flex-parent">
        <div class="w30">
        <img class="footer-img" src="/icons/phone.png" alt="abc"> </div>
        <div class="w70 margin-auto">   
        <h3> Call [ 18 hours a day, Mon-Fri ]: (718)-667-3222
        </h3></div>
      </section>

      <section class="flex-parent">
        <div class="w30">
        <img class="footer-img" src="/icons/chat.png" alt="abc"> </div>
        <div class="w70 margin-auto">   
        <h3> Chat [ 23 hours a day, Mon-Sat ]
        </h3></div>
      </section>

      <section class="flex-parent">
        <div class="w30">
        <img class="footer-img" src="/icons/mail.png" alt="abc"> </div>
        <div class="w70 margin-auto">   
        <h3> Email [ We might get back to you within a year. ]
        </h3></div>
      </section>

      <section class="flex-parent">
        <div class="w30">
        <img class="footer-img" src="/icons/world.png" alt="abc"> </div>
        <div class="w70 margin-auto">   
        <h3>Other Languages: Здравствуйте! 你好! नमस्ते! こんにちは！ Hello!
        </h3></div>
      </section>

    </div>


      <div class="faq w30">
        <h2 class="margin-auto">FAQ:</h2>
        <ul>
          <li class="faq-list"> Cancellation Policy </li>
          <li class="faq-list"> Room Service </li>
          <li class="faq-list"> VIP Rooms </li>
          <li class="faq-list"> Planning Events </li>
          <li class="faq-list"> Extensions </li>
          <li class="faq-list"> Other </li>
        </ul>

      </div>
    </main>
  </div>
</template>

<style>
.flex-evenly {
display: flex;
justify-content: space-evenly;
}
.faq {
  padding: 0rem 5rem;
  margin: 2rem 0rem 0rem 0rem;
}
.faq-list{
 list-style-type: none;
 font-size: 3rem;
 margin: 1rem auto;
}
.footer-img {
  height: 4.5rem;
  margin: 1.25rem auto;
}

</style>