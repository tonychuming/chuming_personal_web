<template>
    <section id="skills" class="section">
      <div class="container">
        <h2 data-aos="fade-right">Skills</h2>
        <div class="skills-container">
          <div class="skills-category" data-aos="fade-up">
            <h3>Programming Languages</h3>
            <div class="skills-grid">
              <div class="skill-item">
                <div class="skill-icon"><i class="fab fa-python"></i></div>
                <h4>Python</h4>
                <div class="skill-bar">
                  <div class="skill-level" data-level="90%"></div>
                </div>
              </div>
              <!-- Add more skills here -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SkillsSection',
    mounted() {
      const skillBars = document.querySelectorAll('.skill-level');
      const animateSkills = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-level');
          }
        });
      };
  
      const skillObserver = new IntersectionObserver(animateSkills, {
        threshold: 0.5
      });
  
      skillBars.forEach(bar => {
        skillObserver.observe(bar);
      });
    }
  }
  </script>