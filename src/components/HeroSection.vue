<template>
  <section
    id="hero"
    class="hero-section min-vh-100 w-100 position-relative d-flex align-items-center px-0"
  >
    <div class="container-fluid px-0 mx-0">
      <div class="row g-0">
        <div class="col-lg-6 ps-lg-4">
          <div class="text-white">
            <h1 class="display-4 fw-bold mb-4 animate-text">
              <span class="text-gradient">Hi, I'm Jay Jathar</span>
            </h1>
            <h2 class="h3 mb-4 animate-text">
              <span class="typing-text">Full Stack Developer</span>
            </h2>
            <p class="lead mb-4 animate-text">
              Passionate about creating elegant solutions to complex problems. With expertise in
              both frontend and backend development, I build scalable and user-friendly applications
              that make a difference.
            </p>
            <div class="d-flex gap-3 animate-buttons">
              <a href="#contact" class="btn btn-primary btn-lg hover-effect">
                <span>Get in Touch</span>
                <!-- <i class="bi bi-arrow-right ms-2"></i> -->
              </a>
              <button class="btn btn-outline-light btn-lg hover-effect" @click="openResumeModal">
                <span>View My Resume</span>
                <!-- <i class="bi bi-arrow-right ms-2"></i> -->
              </button>
            </div>
          </div>
        </div>
        <div class="mt-5 col-lg-6 pe-lg-4">
          <div class="d-flex justify-content-center">
            <div
              class="tech-stack bg-dark bg-opacity-25 rounded-4 p-4 border border-light border-opacity-25 floating-element"
            >
              <div class="row g-3">
                <div v-for="(tech, index) in techStack" :key="index" class="col-4">
                  <div
                    class="tech-item d-flex flex-column align-items-center p-3 bg-dark bg-opacity-50 rounded-3 border border-light border-opacity-25"
                    :style="{ '--delay': index * 0.1 + 's' }"
                  >
                    <i :class="tech.icon + ' text-primary mb-2 fs-3'"></i>
                    <span class="text-white fs-5">{{ tech.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Resume Modal -->
    <ResumeModal :is-open="isResumeModalOpen" @close="closeResumeModal" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ResumeModal from './ResumeModal.vue'

const isResumeModalOpen = ref(false)

const openResumeModal = () => {
  isResumeModalOpen.value = true
}

const closeResumeModal = () => {
  isResumeModalOpen.value = false
}

const techStack = [
  { name: 'Java', icon: 'bi bi-filetype-java' },
  { name: 'Spring Boot', icon: 'fa fa-leaf' },
  { name: 'Vue.js', icon: 'fab fa-vuejs' },
  { name: 'TypeScript', icon: 'bi bi-filetype-tsx' },
  { name: 'Jenkins', icon: 'bi bi-gear' },
  { name: 'AWS', icon: 'bi bi-cloud' },
]

onMounted(() => {
  // Hero section animations
  gsap.from('.animate-text', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
  })

  gsap.from('.animate-buttons', {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.5,
    ease: 'power3.out',
  })

  // Floating animation for tech stack
  gsap.to('.floating-element', {
    duration: 2,
    y: 20,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  })

  // Typing animation for the title
  gsap.to('.typing-text', {
    duration: 1,
    text: 'Full Stack Developer',
    ease: 'none',
  })
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.tech-stack {
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
}

.tech-item {
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

.tech-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.hover-effect {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.hover-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.hover-effect:hover::before {
  left: 100%;
}

.hover-effect:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.btn-primary {
  background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
  border: none;
}

.btn-outline-light {
  border: 2px solid #fff;
  color: #fff;
}

.btn-outline-light:hover {
  background: #fff;
  color: #1a1a2e;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Add styles for when modal is open */
.hero-section.modal-open {
  filter: blur(5px);
  pointer-events: none;
}
</style>
