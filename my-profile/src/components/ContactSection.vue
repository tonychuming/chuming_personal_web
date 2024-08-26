<template>
    <section id="contact" class="section">
      <div class="container">
        <h2 data-aos="fade-right">Contact Me</h2>
        <div class="contact-content" data-aos="fade-up">
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <p>tonychuming30@gmail.com</p>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <p>+66 931203988</p>
            </div>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/chuminglin" target="_blank"><i class="fab fa-linkedin"></i></a>
              <a href="https://github.com/tonychuming" target="_blank"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <form class="contact-form" @submit.prevent="submitForm">
            <input type="text" placeholder="Name" required v-model="name">
            <input type="email" placeholder="Email" required v-model="email">
            <textarea placeholder="Message" required v-model="message"></textarea>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        // Handle form submission here
        alert('Thank you for your message! I will get back to you soon.');
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  }
  </script>