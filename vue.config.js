module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles.css";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/chuming_personal_web/'
    : '/'
}
