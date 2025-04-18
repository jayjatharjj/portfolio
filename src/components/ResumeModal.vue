<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h5 class="modal-title text-white">My Resume</h5>
        <button type="button" class="btn-close btn-close-white" @click="closeModal"></button>
      </div>
      <div class="modal-body">
        <object
          :data="resumeUrl + '#toolbar=0&navpanes=0'"
          type="application/pdf"
          class="resume-preview"
        >
          <p class="text-white text-center p-4">
            Unable to display PDF file.
            <a :href="resumeUrl" class="text-primary" target="_blank">Download</a> instead.
          </p>
        </object>
      </div>
      <div class="modal-footer">
        <div v-if="!isEmailValidated" class="w-100">
          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control bg-dark text-white border-light"
              placeholder="Enter your email to download"
              v-model="email"
              :class="{ 'is-invalid': emailError }"
              @keyup.enter="validateAndDownload"
            />
            <button
              class="btn btn-primary"
              type="button"
              @click="validateAndDownload"
              :disabled="!email"
            >
              <i class="bi bi-download me-2"></i>Download
            </button>
          </div>
          <div v-if="emailError" class="text-danger small">
            {{ emailError }}
          </div>
        </div>
        <div v-else class="w-100 text-center">
          <p class="text-success mb-3">
            <i class="bi bi-check-circle-fill me-2"></i>Email validated successfully!
          </p>
          <a :href="resumeUrl" download class="btn btn-primary" @click="recordDownload">
            <i class="bi bi-download me-2"></i>Download Resume
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import VisitorService from '@/services/VisitorService'
const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const resumeUrl = '/src/assets/media/Jay_Jathar_8625866389.pdf'
const email = ref('')
const emailError = ref('')
const isEmailValidated = ref(false)

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validateAndDownload = () => {
  if (!email.value) {
    emailError.value = 'Please enter your email'
    return
  }

  if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address'
    return
  }

  emailError.value = ''
  isEmailValidated.value = true
}

const closeModal = () => {
  emit('close')
  email.value = ''
  emailError.value = ''
  isEmailValidated.value = false
}

const recordDownload = () => {
  VisitorService.recordDownload(email.value)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(46, 46, 46, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal-content {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.modal-header {
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  flex: 1;
  overflow: hidden;
  padding: 0;
}

.resume-preview {
  width: 100%;
  height: 100%;
  min-height: 60vh;
  border: none;
  pointer-events: none;
}

.modal-footer {
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-close {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.btn-close:hover {
  opacity: 1;
}

.form-control {
  background-color: rgba(0, 0, 0, 0.2) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
  color: white !important;
}

.form-control:focus {
  background-color: rgba(0, 0, 0, 0.3) !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.1) !important;
  color: white !important;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.5) !important;
}

.btn-primary {
  background: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
  border: none;
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    margin: 1rem;
  }
}
</style>
