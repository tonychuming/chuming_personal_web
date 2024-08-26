<template>
  <div id="app" :data-theme="theme">
    <div class="background">
      <div class="orb orb1"></div>
      <div class="orb orb2"></div>
      <div class="orb orb3"></div>
    </div>
    <!-- Add the particles-js div here -->
    <div id="particles-js"></div>
    <div class="scroll-progress"></div>
    <AppHeader />
    <main>
      <transition-group name="fade" tag="div">
        <HeroSection key="hero" />
        <AboutSection key="about" />
        <EducationSection key="education" />
        <ProjectsSection key="projects" />
        <SkillsSection key="skills" />
        <AchievementsSection key="achievements" />
        <TestimonialsSection key="testimonials" />
        <ContactSection key="contact" />
      </transition-group>
    </main>
    <AppFooter />
    <button @click="toggleTheme" class="theme-toggle">Toggle Theme</button>
  </div>
</template>


<script>
import { nextTick } from 'vue';
import 'particles.js/particles';
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import EducationSection from './components/EducationSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import AchievementsSection from './components/AchievementsSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import ContactSection from './components/ContactSection.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
    AboutSection,
    EducationSection,
    ProjectsSection,
    SkillsSection,
    AchievementsSection,
    TestimonialsSection,
    ContactSection,
    AppFooter
  },
  mounted() {
    nextTick(() => {
      this.initParticles();
    });
    this.initScrollProgress();
  },
  methods: {
    initParticles() {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
          modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
      });
    },
    initScrollProgress() {
      window.addEventListener('scroll', () => {
        const scrollProgress = document.querySelector('.scroll-progress');
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
        scrollProgress.style.width = scrolled;
      });
    }
  }
};

</script>

<style src="@/assets/styles.css"></style>