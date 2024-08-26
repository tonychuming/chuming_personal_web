<template>
  <header>
    <nav>
      <div class="logo">CL</div>
      <ul>
        <li><a href="#about"><i class="fas fa-user"></i> About</a></li>
        <li><a href="#education"><i class="fas fa-graduation-cap"></i> Education</a></li>
        <li><a href="#projects"><i class="fas fa-project-diagram"></i> Projects</a></li>
        <li><a href="#skills"><i class="fas fa-code"></i> Skills</a></li>
        <li><a href="#achievements"><i class="fas fa-trophy"></i> Achievements</a></li>
        <li><a href="#testimonials"><i class="fas fa-quote-right"></i> Testimonials</a></li>
        <li><a href="#contact"><i class="fas fa-envelope"></i> Contact</a></li>
      </ul>
      <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" @change="toggleTheme" :checked="isDarkMode" />
          <div class="slider round"></div>
        </label>
        <em>Switch Theme</em>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isDarkMode: false
    }
  },
  methods: {
    toggleTheme(e) {
      this.isDarkMode = e.target.checked;
      if (this.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }
  },
  mounted() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      this.isDarkMode = currentTheme === 'dark';
    }
  }
}
</script>