<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 data-aos="fade-right">Skills</h2>
      <div class="skills-container">
        <div v-for="(category, index) in skillCategories" :key="index" class="skills-category" :data-aos="'fade-up'" :data-aos-delay="index * 100">
          <h3>{{ category.title }}</h3>
          <div class="skills-grid">
            <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex" class="skill-item">
              <div class="skill-icon" v-if="skill.icon">
                <i :class="skill.icon"></i>
              </div>
              <h4>{{ skill.name }}</h4>
              <div class="skill-bar" v-if="skill.level">
                <div class="skill-level" :data-level="skill.level"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skillCategories: [
        {
          title: "Programming Languages",
          skills: [
            { name: "Python", icon: "fab fa-python", level: "90%" },
            { name: "Java", icon: "fab fa-java", level: "75%" },
            { name: "C++", icon: "fas fa-code", level: "70%" },
            { name: "SQL", icon: "fas fa-database", level: "85%" }
          ]
        },
        {
          title: "Data Processing",
          skills: [
            { name: "ETL", icon: "fas fa-exchange-alt", level: "80%" },
            { name: "Data Warehousing", icon: "fas fa-warehouse", level: "75%" },
            { name: "Data Integration", icon: "fas fa-project-diagram", level: "85%" }
          ]
        },
        {
          title: "Machine Learning",
          skills: [
            { name: "Classification", icon: "fas fa-tags", level: "85%" },
            { name: "Feature Extraction", icon: "fas fa-filter", level: "80%" },
            { name: "Deep Learning", icon: "fas fa-brain", level: "75%" },
            { name: "Model Evaluation", icon: "fas fa-chart-line", level: "85%" }
          ]
        },
        {
          title: "Tools",
          skills: [
            { name: "Microsoft SQL Server", icon: "fas fa-server" },
            { name: "Apache Airflow", icon: "fas fa-wind" },
            { name: "KNIME", icon: "fas fa-puzzle-piece" },
            { name: "OpenCV", icon: "fas fa-eye" },
            { name: "Visual Studio", icon: "fas fa-code" }
          ]
        }
      ]
    }
  },
  mounted() {
    this.initializeSkillBars();
  },
  methods: {
    initializeSkillBars() {
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
}
</script>