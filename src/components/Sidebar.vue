<template>
  <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
    <div class="sidebar-content">
      <div class="sidebar-header">
        <h3 class="text-white mb-0">Navigation</h3>
        <button class="btn-close btn-close-white" @click="$emit('close')"></button>
      </div>
      <nav class="sidebar-nav">
        <RouterLink to="/home" class="nav-item" @click="$emit('close')">
          <i class="bi bi-house-door"></i>
          <span>Home</span>
        </RouterLink>
        <RouterLink to="/work" class="nav-item" @click="$emit('close')">
          <i class="bi bi-briefcase"></i>
          <span>Work</span>
        </RouterLink>
      </nav>
      <div class="sidebar-footer">
        <div class="social-links">
          <a href="https://github.com/yourusername" target="_blank" class="social-link">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

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
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  color: #fff;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-item i {
  font-size: 1.25rem;
}

.sidebar-footer {
  margin-top: auto;
  padding-top: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: scale(1.1);
  opacity: 0.8;
}
</style>
