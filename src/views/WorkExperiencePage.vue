<template>
  <div class="work-experience-container" :class="{ 'sidebar-open': isSidebarOpen }">
    <!-- Header Section -->
    <div class="header-section text-center py-4">
      <h1 class="display-4 fw-bold text-white mb-3">Work Experience</h1>
    </div>

    <!-- Project Blocks -->
    <div class="project-blocks">
      <!-- Smart360 Project -->
      <div class="project-block">
        <div class="container-fluid px-4">
          <div class="row align-items-center g-4">
            <div class="col-lg-6 image-side">
              <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slides-per-view="1"
                :loop="true"
                :effect="'creative'"
                :speed="1500"
                :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }"
                :creative-effect="{
                  prev: {
                    shadow: true,
                    translate: ['-100%', 0, -800],
                    rotate: [0, 0, -30],
                    opacity: 0,
                    scale: 0.8,
                  },
                  next: {
                    shadow: true,
                    translate: ['100%', 0, -800],
                    rotate: [0, 0, 30],
                    opacity: 0,
                    scale: 0.8,
                  },
                }"
                class="swiper-container"
              >
                <SwiperSlide v-for="(image, index) in smart360Images" :key="index">
                  <div class="swiper-slide-content">
                    <img :src="image" :alt="'Smart360 Image ' + (index + 1)" class="img-fluid" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="col-lg-6 content-side">
              <div class="project-content">
                <h2 class="project-title">Smart360</h2>
                <div class="company-info mb-3">
                  <h3 class="h5">TwoDots Software Services</h3>
                  <p class="text-muted small" style="color: rgba(255, 255, 255, 0.7)">October 2023 – Present</p>
                </div>
                <div class="tech-stack mb-3">
                  <span class="badge bg-primary me-2">Java</span>
                  <span class="badge bg-primary me-2">Vue.js</span>
                  <span class="badge bg-primary me-2">Spring Boot</span>
                </div>
                <div class="achievements">
                  <ul class="list-unstyled">
                    <li
                      v-for="(achievement, index) in smart360Achievements"
                      :key="index"
                      class="mb-2"
                    >
                      <i class="bi bi-check-circle-fill text-success me-2"></i>
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ScheduleMyEmails Project -->
      <div class="project-block">
        <div class="container-fluid px-4">
          <div class="row align-items-center g-4">
            <div class="col-lg-6 content-side">
              <div class="project-content">
                <h2 class="project-title">ScheduleMyEmails</h2>
                <div class="company-info mb-3">
                  <h3 class="h5">TwoDots Software Services</h3>
                  <p class="text-muted small" style="color: rgba(255, 255, 255, 0.7)">October 2023 – Present</p>
                </div>
                <div class="tech-stack mb-3">
                  <span class="badge bg-primary me-2">Brevo</span>
                  <span class="badge bg-primary me-2">Spring Boot</span>
                  <span class="badge bg-primary me-2">AJAX</span>
                </div>
                <div class="achievements">
                  <ul class="list-unstyled">
                    <li v-for="(achievement, index) in smeAchievements" :key="index" class="mb-2">
                      <i class="bi bi-check-circle-fill text-success me-2"></i>
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6 image-side">
              <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slides-per-view="1"
                :loop="true"
                :effect="'creative'"
                :speed="1500"
                :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }"
                :creative-effect="{
                  prev: {
                    shadow: true,
                    translate: ['-100%', 0, -800],
                    rotate: [0, 0, -30],
                    opacity: 0,
                    scale: 0.8,
                  },
                  next: {
                    shadow: true,
                    translate: ['100%', 0, -800],
                    rotate: [0, 0, 30],
                    opacity: 0,
                    scale: 0.8,
                  },
                }"
                class="swiper-container"
              >
                <SwiperSlide v-for="(image, index) in smeImages" :key="index">
                  <div class="swiper-slide-content">
                    <img
                      :src="image"
                      :alt="'ScheduleMyEmails Image ' + (index + 1)"
                      class="img-fluid"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <!-- TraceFlow Project -->
      <div class="project-block">
        <div class="container-fluid px-4">
          <div class="row align-items-center g-4">
            <div class="col-lg-6 image-side">
              <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slides-per-view="1"
                :loop="true"
                :effect="'creative'"
                :speed="1500"
                :autoplay="{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }"
                :creative-effect="{
                  prev: {
                    shadow: true,
                    translate: ['-100%', 0, -800],
                    rotate: [0, 0, -30],
                    opacity: 0,
                    scale: 0.8,
                  },
                  next: {
                    shadow: true,
                    translate: ['100%', 0, -800],
                    rotate: [0, 0, 30],
                    opacity: 0,
                    scale: 0.8,
                  },
                }"
                class="swiper-container"
              >
                <SwiperSlide v-for="(image, index) in traceflowImages" :key="index">
                  <div class="swiper-slide-content">
                    <img :src="image" :alt="'TraceFlow Image ' + (index + 1)" class="img-fluid" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="col-lg-6 content-side">
              <div class="project-content">
                <h2 class="project-title">TraceFlow</h2>
                <div class="company-info mb-3">
                  <h3 class="h5">TwoDots Software Services</h3>
                  <p class="text-muted small" style="color: rgba(255, 255, 255, 0.7)">October 2023 – Present</p>
                </div>
                <div class="tech-stack mb-3">
                  <span class="badge bg-primary me-2">Spring Boot</span>
                  <span class="badge bg-primary me-2">Scala</span>
                  <span class="badge bg-primary me-2">JavaScript</span>
                </div>
                <div class="achievements">
                  <ul class="list-unstyled">
                    <li
                      v-for="(achievement, index) in traceflowAchievements"
                      :key="index"
                      class="mb-2"
                    >
                      <i class="bi bi-check-circle-fill text-success me-2"></i>
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay, EffectCreative as SwiperEffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'

defineProps<{
  isSidebarOpen: boolean
}>()

// Project data
const smart360Achievements = [
  'Implemented over 150 features across frontend, backend, database, and CI/CD pipelines',
  'Developed 60 client-specific components using Vue.js with 100% satisfaction',
  'Optimized backend services, reducing data retrieval times from 60s to 2-3s',
  'Transformed user management to microservices, improving modularity',
  'Implemented JWT and Spring Security, increasing sign-in speed by 150%',
  'Used AWS S3 for 80% faster file management',
  'Created dynamic data tables with custom filters',
  'Integrated D3.js for advanced data visualizations',
  'Implemented Brevo for automated email notifications',
  'Improved Jenkins deployment speed by 40%',
  'Enhanced Java application performance by 35%',
]

const smeAchievements = [
  'Developed email scheduling platform using Brevo and Quartz Scheduler',
  'Improved contact management with AJAX and validation rules',
  'Enhanced scheduled task functionality with play, pause, and delete features',
  'Optimized campaign and contact workflows',
  'Refactored database schema for 35% faster data retrieval',
]

const traceflowAchievements = [
  'Built visitor tracking application with Spring Boot and Scala',
  'Configured project to monitor visitor sessions and geolocations',
  'Created JavaScript tracking script for multi-site integration',
  'Deployed on OVH for scalability and 40% fewer tracking issues',
  'Improved operational responsiveness by 50%',
]

// Project images
const smart360Images = [
  '/src/assets/media/smart360-1.jpg',
  '/src/assets/media/smart360-2.jpg',
  '/src/assets/media/smart360-3.jpg',
]

const smeImages = [
  '/src/assets/media/sme-1.jpg',
  '/src/assets/media/sme-2.jpg',
  '/src/assets/media/sme-3.jpg',
]

const traceflowImages = [
  '/src/assets/media/traceflow-1.jpg',
  '/src/assets/media/traceflow-2.jpg',
  '/src/assets/media/traceflow-3.jpg',
]
</script>

<style scoped>
.work-experience-container {
  padding: 2rem 0;
  transition: all 0.3s ease;
}

.work-experience-container.sidebar-open {
  max-width: 90vw;
}

.header-section {
  margin-bottom: 3rem;
}

.project-blocks {
  max-width: 90vw;
  margin: 0 auto;
  padding-right: 4rem;
}

.project-block {
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.project-block:last-child {
  border-bottom: none;
}

.project-content {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  backdrop-filter: blur(10px);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00f2fe, #4facfe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.company-info h3 {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: #ffffff;
}

.tech-stack .badge {
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
  margin-bottom: 0.4rem;
}

.achievements {
  flex-grow: 1;
  overflow-y: auto;
  color: #ffffff;
}

.achievements li {
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.5;
  font-size: 0.9rem;
}

.swiper-container {
  width: 100%;
  height: 450px;
  perspective: 1500px;
  transform-style: preserve-3d;
}

.swiper-slide-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.swiper-slide-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.2), transparent);
  z-index: 1;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.swiper-slide-content:hover::before {
  opacity: 0.5;
}

.swiper-slide-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  transform: translateZ(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.swiper-slide-content:hover img {
  transform: translateZ(150px);
  box-shadow: 0 45px 90px rgba(0, 0, 0, 0.8);
}

.swiper-slide-active .swiper-slide-content img {
  transform: translateZ(100px);
  box-shadow: 0 35px 70px rgba(0, 0, 0, 0.7);
}

.swiper-slide-active .swiper-slide-content:hover img {
  transform: translateZ(150px);
  box-shadow: 0 45px 90px rgba(0, 0, 0, 0.8);
}

@media (max-width: 768px) {
  .work-experience-container {
    padding: 1rem;
  }

  .work-experience-container.sidebar-open {
    max-width: 100%;
    margin-left: 0;
  }

  .project-blocks {
    max-width: 100vw;
    padding-right: 1rem;
  }

  .project-block {
    padding: 1.5rem 0;
  }

  .project-title {
    font-size: 1.75rem;
  }

  .content-side,
  .image-side {
    margin-bottom: 1.5rem;
  }

  .swiper-container {
    height: 350px;
  }
}

.company-info p {
  color: rgba(255, 255, 255, 0.7) !important;
}

.text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

.back-home-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.back-home-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-5px);
}

.back-home-btn i {
  transition: transform 0.3s ease;
}

.back-home-btn:hover i {
  transform: translateX(-3px);
}

@media (max-width: 768px) {
  .back-home-btn {
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}
</style>
