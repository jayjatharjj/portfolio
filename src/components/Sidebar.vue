<template>
  <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
    <div class="sidebar-content">
      <div class="sidebar-header">
        <h3 class="text-white mb-0">Navigation</h3>
        <button class="btn-close btn-close-white" @click="$emit('close')"></button>
      </div>
      <nav class="sidebar-nav">
        <a href="#hero" class="nav-item" @click="$emit('close')">
          <i class="bi bi-house-door"></i>
          <span>Home</span>
        </a>
        <a href="#skills" class="nav-item" @click="$emit('close')">
          <i class="bi bi-code-slash"></i>
          <span>Skills</span>
        </a>
        <a href="#experience" class="nav-item" @click="$emit('close')">
          <i class="bi bi-briefcase"></i>
          <span>Experience</span>
        </a>
        <a href="#contact" class="nav-item" @click="$emit('close')">
          <i class="bi bi-envelope"></i>
          <span>Contact</span>
        </a>
      </nav>
      <div class="sidebar-footer">
        <div class="social-links">
          <a href="https://github.com/yourusername" target="_blank" class="social-link">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" class="social-link">
            <i class="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
}

.sidebar-open {
  transform: translateX(0);
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.btn-close {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.btn-close:hover {
  opacity: 1;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transform: translateX(5px);
}

.nav-item i {
  font-size: 1.25rem;
}

.sidebar-footer {
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #fff;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .sidebar {
    width: 100vw;
    transform: translateX(-100%);
  }

  .sidebar-open {
    transform: translateX(0);
  }

  .sidebar-content {
    padding: 1rem;
  }

  .nav-item {
    padding: 1rem;
  }

  .social-links {
    gap: 2rem;
  }
}
</style>
