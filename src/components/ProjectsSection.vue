<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 data-aos="fade-right">Projects</h2>
      <div class="projects-grid">
        <div class="project-card" data-aos="fade-up">
          <div class="project-logo">
            <img src="@/assets/cits_logo.png" alt="Coffee Bean Project Logo">
          </div>
          <div class="project-content">
            <h2>Senior Project</h2>
            <h3>MFU Data Warehouse</h3>
            <p>Collaborated in a team of four to develop a centralized data warehouse system for Mae Fah Luang University</p>
            <ul>
              <li>Conducted comparative analysis of various ETL (Extract, Transform, Load) tools including Apache Airflow, Denodo, KNIME, and SSIS</li>
              <li>Evaluated tools based on functionality, usability, connectivity, performance, accuracy, and learning curve to recommend the most suitable solution for the university's needs</li>
            </ul>
            <a href="#" class="project-link">Learn More</a>
          </div>
        </div>
        
        <div class="project-card" data-aos="fade-up">
          <div class="project-logo">
            <img src="@/assets/mfu_logo.png" alt="Coffee Bean Project Logo">
          </div>
          <div class="project-content">
            <h2>Researche Project</h2>
            <h3>Coffee Bean Quality Classification Using Multi-modal Feature Fusion (Independent)</h3>
            <p>Developed an enhanced approach for classifying roasted coffee beans using computer vision and machine learning techniques under the guidance of Prof. Sujitra Arwatchananukul</p>
            <ul>
              <li>Implemented and compared various feature extraction methods including color, texture, and shape features</li>
              <li>Achieved 95.97% classification accuracy using a combination of Color Coherence Vector and Zernike Moments with Extra Trees classifier</li>
              <li>Evaluated the impact of image preprocessing techniques such as denoising and data augmentation on classification performance</li>
            </ul>
            <a href="#" class="project-link">Learn More</a>
          </div>
        </div>

        <div class="project-card" data-aos="fade-up">
          <div class="project-logo">
            <img src="@/assets/mfu_logo.png" alt="Coffee Bean Project Logo">
          </div>
          <div class="project-content">
            <h2>Company Project</h2>
            <h3>Intelligent Ship Lock Management System</h3>
            <p>Contributed to the development of an AI-powered management system for ship locks in Guangzhou, China</p>
            <ul>
              <li>Implemented ship detection and license plate recognition algorithms using PaddlePaddle deep learning framework</li>
              <li>Developed image enhancement techniques to improve license plate recognition accuracy in challenging conditions such as low light and rain</li>
              <li>Designed a multi-frame comparison algorithm to enhance the reliability of ship identification in video streams</li>
            </ul>
            <a href="#" class="project-link">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection'
}
</script>