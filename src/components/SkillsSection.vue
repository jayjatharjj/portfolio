<template>
  <section id="skills" class="skills-section min-vh-80 w-100 position-relative d-flex align-items-center px-0">
    <div class="container-fluid px-0 mx-0">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2 class="text-white mb-5 animate-text section-title">Technical Expertise</h2>
        </div>
      </div>
      <div class="row g-4 px-4 justify-content-center align-items-stretch">
        <div v-for="(skill, index) in skills" :key="index" class="col-md-4 col-lg-3">
          <div class="skill-card card bg-dark bg-opacity-25 border border-light border-opacity-25 h-100">
            <div class="card-body text-center text-white">
              <i :class="skill.icon + ' text-primary mb-3'"></i>
              <h3 class="h4">{{ skill.title }}</h3>
              <p class="card-text">{{ skill.description }}</p>
              <div class="d-flex flex-wrap gap-2 justify-content-center">
                <span v-for="(tech, techIndex) in skill.technologies" :key="techIndex" 
                      class="tech-tag badge bg-primary bg-opacity-25 text-primary">
                  {{ tech }}
                </span>
              </div>
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

const skills = [
  {
    title: 'Backend Development',
    icon: 'bi bi-server display-4 text-primary mb-3',
    description: 'Building robust and scalable server-side applications',
    technologies: ['Java', 'Spring Boot', 'REST APIs']
  },
  {
    title: 'Frontend Development',
    icon: 'bi bi-code-slash display-4 text-primary mb-3',
    description: 'Creating beautiful and responsive user interfaces',
    technologies: ['Vue.js', 'TypeScript', 'JavaScript', 'HTML/CSS']
  },
  {
    title: 'DevOps & Tools',
    icon: 'bi bi-tools display-4 text-primary mb-3',
    description: 'Streamlining development and deployment processes',
    technologies: ['Jenkins', 'Git', 'AWS', 'Docker']
  }
]

onMounted(() => {
  // Skills section animations
  gsap.from('.skill-card', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top center',
      end: 'bottom center',
      scrub: true
    }
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

.skill-card {
  backdrop-filter: blur(10px);
  opacity: 100;
  min-height: 300px;
  display: flex;
  flex-direction: column;
}

.skill-card .card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.skill-card .card-text {
  flex-grow: 1;
}

.skill-card:hover::before {
  opacity: 1;
}

.skills-section .row {
  perspective: 1000px;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  box-shadow: 0 8px 32px rgba(0, 219, 222, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tech-tag {
  transition: all 0.2s ease;
  transform: translateZ(0);
  padding: 0.5rem 0.8rem;
  font-size: 0.95rem;
  border-radius: 6px;
  margin: 0.3rem;
}

.tech-tag:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-title::after {
    width: 50px;
  }

  .skill-card {
    min-height: auto;
  }
}
</style> 