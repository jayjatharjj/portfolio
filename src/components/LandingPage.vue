<template>
  <div
    class="portfolio-container position-relative"
    :class="{ 'sidebar-open': isSidebarOpen, 'show-work-experience': showWorkExperience }"
  >
    <!-- Sidebar Toggle Button -->
    <button class="sidebar-toggle" @click="toggleSidebar">
      <i class="bi bi-list"></i>
    </button>

    <!-- Sidebar Component -->
    <Sidebar :is-open="isSidebarOpen" @close="toggleSidebar" />

    <!-- 3D Background -->
    <div
      ref="threeContainer"
      class="three-container position-fixed top-0 start-0 w-100 h-100"
    ></div>

    <!-- Main Content -->
    <div v-if="!showWorkExperience" class="main-content">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection @show-full-experience="showWorkExperience = true" />
    </div>

    <!-- Work Experience -->
    <WorkExperience v-if="showWorkExperience" @close="showWorkExperience = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import Sidebar from './Sidebar.vue'
import HeroSection from './HeroSection.vue'
import SkillsSection from './SkillsSection.vue'
import ExperienceSection from './ExperienceSection.vue'
import WorkExperience from './WorkExperience.vue'

const isSidebarOpen = ref(false)
const threeContainer = ref<HTMLElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let particles: THREE.Points
let scrollY = ref(0)
let lastScrollY = 0
let scrollDirection = 1
const showWorkExperience = ref(false)

const handleScroll = () => {
  lastScrollY = scrollY.value
  scrollY.value = window.scrollY
  scrollDirection = scrollY.value > lastScrollY ? 1 : -1

  // Update particle animation based on scroll
  if (particles) {
    particles.rotation.x += scrollDirection * 0.0001
    particles.rotation.y += scrollDirection * 0.0001
  }
}

const initThreeJS = () => {
  if (!threeContainer.value) return

  // Scene setup
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  threeContainer.value.appendChild(renderer.domElement)

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 2000
  const posArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
  })

  particles = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particles)

  camera.position.z = 2

  // Animation
  const animate = () => {
    requestAnimationFrame(animate)
    particles.rotation.x += 0.0005
    particles.rotation.y += 0.0005
    renderer.render(scene, camera)
  }
  animate()

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

onMounted(() => {
  initThreeJS()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.portfolio-container {
  min-height: 100vh;
  width: 90vw;
  margin: 0 auto;
  overflow-x: hidden;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  transition: all 0.3s ease;
}

.portfolio-container.sidebar-open {
  width: 75vw;
  margin-left: 300px;
}

.portfolio-container.show-work-experience {
  width: 100vw;
  margin: 0;
}

@media (max-width: 768px) {
  .portfolio-container {
    width: 100%;
    padding: 0 1rem;
  }

  .portfolio-container.sidebar-open {
    width: 100%;
    margin-left: 0;
    overflow: hidden;
  }

  .portfolio-container.show-work-experience {
    width: 100%;
    padding: 0;
  }
}

.three-container {
  z-index: 0;
}

.sidebar-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  background: rgba(26, 26, 46, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.portfolio-container.sidebar-open .sidebar-toggle {
  display: none;
}

.portfolio-container.show-work-experience .sidebar-toggle {
  display: none;
}

.sidebar-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.sidebar-toggle i {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .sidebar-toggle {
    top: 15px;
    left: 15px;
    width: 40px;
    height: 40px;
  }
}

.main-content {
  transition: opacity 0.3s ease;
}

.portfolio-container.show-work-experience .main-content {
  display: none;
}
</style>
