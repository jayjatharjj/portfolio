<template>
  <div
    class="portfolio-container position-relative"
    :class="{ 'sidebar-open': isSidebarOpen }"
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
    <div class="main-content">
      <RouterView :is-sidebar-open="isSidebarOpen"></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import Sidebar from '../components/Sidebar.vue'
import { RouterView } from 'vue-router'

const isSidebarOpen = ref(false)
const threeContainer = ref<HTMLElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let particles: THREE.Points

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
})

onUnmounted(() => {
  // Clean up Three.js resources
  if (renderer) {
    renderer.dispose()
  }
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
</style>
