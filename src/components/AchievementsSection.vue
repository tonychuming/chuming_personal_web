<template>
  <section id="achievements" class="achievements-section">
    <div class="container">
      <h2 data-aos="fade-right">Achievements</h2>
      <div class="achievements-list">
        <div v-for="(achievement, index) in achievements" :key="index" class="achievement-item" data-aos="zoom-in" :data-aos-delay="index * 200">
          <i :class="[achievement.icon, 'achievement-icon']"></i>
          <h3 class="achievement-title">{{ achievement.title }}</h3>
          <p class="achievement-description">{{ achievement.description }}</p>
          <div class="achievement-actions">
            <button @click="openModal(achievement)" class="achievement-btn achievement-btn-view">
              <i class="fas fa-eye"></i> View
            </button>
            <a :href="achievement.certificateFile" download class="achievement-btn achievement-btn-download">
              <i class="fas fa-download"></i> Download
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Improved Modal -->
    <transition name="modal">
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h2>{{ selectedAchievement.title }}</h2>
            <button class="modal-close" @click="closeModal">&times;</button>
          </div>
          <div class="modal-body">
            <p>{{ selectedAchievement.description }}</p>
            <div v-if="selectedAchievement.certificateFile" class="certificate-preview">
              <object
                :data="selectedAchievement.certificateFile"
                type="application/pdf"
                width="100%"
                height="500px"
              >
                <p>Unable to display PDF. <a :href="selectedAchievement.certificateFile" target="_blank">Open PDF</a></p>
              </object>
            </div>
          </div>
          <div class="modal-footer">
            <a :href="selectedAchievement.certificateFile" download class="modal-btn modal-btn-download">
              <i class="fas fa-download"></i> Download Certificate
            </a>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AchievementsSection',
  data() {
    return {
      showModal: false,
      selectedAchievement: null,
      achievements: [
        {
          icon: 'fas fa-award',
          title: 'MFU Partial Scholarship',
          description: 'For Outstanding Academic Performance (2023)',
          certificateFile: null
        },
        {
          icon: 'fas fa-star',
          title: 'High GPA',
          description: 'Consistently maintained a GPA of 3.87/4.00',
          certificateFile: null
        }
      ]
    }
  },
  methods: {
    async loadPDF(achievement) {
      if (achievement.title === 'MFU Partial Scholarship') {
        const module = await import('@/assets/mfu-scholarship-certificate.pdf');
        achievement.certificateFile = module.default;
      } else if (achievement.title === 'High GPA') {
        const module = await import('@/assets/chuming_grade_report.pdf');
        achievement.certificateFile = module.default;
      }
    },
    async openModal(achievement) {
      await this.loadPDF(achievement);
      this.selectedAchievement = achievement;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedAchievement = null;
    }
  }
}
</script>