<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          title: "Senior Project",
          subtitle: "MFU Data Warehouse",
          logo: require("@/assets/cits_logo.png"),
          description: "Collaborated in a team of four to develop a centralized data warehouse system for Mae Fah Luang University",
          points: [
            "Conducted comparative analysis of various ETL (Extract, Transform, Load) tools including Apache Airflow, Denodo, KNIME, and SSIS",
            "Evaluated tools based on functionality, usability, connectivity, performance, accuracy, and learning curve to recommend the most suitable solution for the university's needs"
          ],
          githubLink: "https://github.com/yourusername/mfu-data-warehouse"
        },
        {
          title: "Research Project",
          subtitle: "Coffee Bean Quality Classification Using Multi-modal Feature Fusion (Independent)",
          logo: require("@/assets/mfu_logo.png"),
          description: "Developed an enhanced approach for classifying roasted coffee beans using computer vision and machine learning techniques under the guidance of Prof. Sujitra Arwatchananukul",
          points: [
            "Implemented and compared various feature extraction methods including color, texture, and shape features",
            "Achieved 95.97% classification accuracy using a combination of Color Coherence Vector and Zernike Moments with Extra Trees classifier",
            "Evaluated the impact of image preprocessing techniques such as denoising and data augmentation on classification performance"
          ],
          githubLink: "https://github.com/tonychuming/coffeebeans_classification.git"
        },
        {
          title: "Company Project",
          subtitle: "Intelligent Ship Lock Management System",
          logo: require("@/assets/mfu_logo.png"),
          description: "Contributed to the development of an AI-powered management system for ship locks in Guangzhou, China",
          points: [
            "Implemented ship detection and license plate recognition algorithms using PaddlePaddle deep learning framework",
            "Developed image enhancement techniques to improve license plate recognition accuracy in challenging conditions such as low light and rain",
            "Designed a multi-frame comparison algorithm to enhance the reliability of ship identification in video streams"
          ],
          githubLink: "https://github.com/yourusername/ship-lock-management"
        }
      ]
    }
  }
}
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 data-aos="fade-right">Projects</h2>
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card" data-aos="fade-up">
          <div class="project-logo">
            <img :src="project.logo" :alt="project.subtitle + ' Logo'">
          </div>
          <div class="project-content">
            <h2>{{ project.title }}</h2>
            <h3>{{ project.subtitle }}</h3>
            <p>{{ project.description }}</p>
            <ul>
              <li v-for="(point, pointIndex) in project.points" :key="pointIndex">{{ point }}</li>
            </ul>
            <a :href="project.githubLink" target="_blank" rel="noopener noreferrer" class="project-link">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>