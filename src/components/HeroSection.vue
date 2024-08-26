<template>
  <Parallax :speed-factor="0.3" :section-height="'100vh'">
    <section id="hero" class="section hero">
      <div class="hero-content" data-aos="fade-up">
        <h1 class="glitch" data-text="Chuming Lin">Chuming Lin</h1>
        <p><span id="typed-text"></span></p>
        <a href="#contact" class="cta-button">Get in Touch</a>
      </div>
    </section>
  </Parallax>
</template>

<script>
import Typed from 'typed.js'
import { Parallax } from 'vue-parallaxy'

export default {
  components: { Parallax },
  name: 'HeroSection',
  mounted() {
    this.$nextTick(() => {
      new Typed('#typed-text', {
        strings: ['Software Engineering Student', 'Chinese'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        startDelay: 300
      });
    });
  }
}
</script>

<style scoped>
.hero-content p {
  min-height: 1.5em; /* 为 Typed.js 文本预留空间 */
}
</style>