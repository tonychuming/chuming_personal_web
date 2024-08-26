<template>
  <footer>
    <div class="container">
      <p>&copy; {{ currentYear }} Chuming Lin. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>