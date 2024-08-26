import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/styles.css'
import 'particles.js'
import 'animate.css';

AOS.init({
    duration: 1000,
    once: true,
    offset: 200
});

const app = createApp(App)
app.mount('#app')
