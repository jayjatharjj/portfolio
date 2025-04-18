<template>
  <section
    id="experience"
    class="experience-section min-vh-100 w-100 position-relative d-flex align-items-center px-0"
  >
    <div class="container-fluid px-0 mx-0">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2 class="text-white mb-5 animate-text section-title">Work Experience</h2>
        </div>
      </div>
      <div class="row justify-content-center px-4">
        <div class="col-lg-8">
          <div
            v-for="(exp, index) in experience"
            :key="index"
            class="timeline-item card bg-dark bg-opacity-25 border border-light border-opacity-25 mb-4"
            :style="{ '--delay': index * 0.1 + 's' }"
          >
            <div class="card-body text-white">
              <h3 class="h4">{{ exp.company }}</h3>
              <h4 class="h5 text-primary">{{ exp.role }}</h4>
              <p class="text-muted">{{ exp.duration }}</p>
              <ul class="list-unstyled">
                <li v-for="(achievement, aIndex) in exp.achievements" :key="aIndex" class="mb-2">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>{{ achievement }}
                </li>
              </ul>
              <RouterLink to="/work" class="btn btn-outline-primary mt-3">
                View Full Experience <i class="bi bi-arrow-right ms-2"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['showFullExperience'])

const experience = [
  {
    company: 'TwoDots Software Services',
    role: 'Java Full Stack Developer',
    duration: 'October 2023 – Present',
    achievements: [
      'Implemented 150+ features across frontend, backend, and CI/CD pipelines',
      'Optimized backend services, reducing data retrieval time from 60s to 2-3s',
      'Transformed monolithic to microservices architecture',
      'Improved Jenkins deployment speed by 40%',
    ],
  },
]

onMounted(() => {
  // Experience section animations
  gsap.from('.timeline-item', {
    duration: 0.8,
    x: -50,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.experience-section',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  })
})
</script>

<style scoped>
.section-title {
  position: relative;
  display: inline-block;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 600;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4E65FF 0%, #92EFFD 100%);
}

.timeline-item {
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

.timeline-item:hover {
  transform: translateX(10px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-title::after {
    width: 50px;
  }
}
</style>
