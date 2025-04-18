<template>
  <div v-if="showForm" class="contact-form-overlay">
    <div class="contact-form">
      <div class="contact-form-content">
        <div class="form-header">
          <h2>Get in Touch</h2>
          <button class="close-button" @click="handleClose">×</button>
        </div>
        <form @submit.prevent="handleSubmit" class="form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="Enter your email"
              required
              class="form-input"
              :class="{ 'error': emailError }"
              @input="validateEmail"
            />
            <div v-if="emailError" class="error-message">{{ emailError }}</div>
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              v-model="formData.subject"
              placeholder="Enter subject"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="formData.body"
              placeholder="Enter your message"
              required
              class="form-input textarea"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" class="submit-button" :disabled="!!emailError">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import VisitorService from '@/services/VisitorService'
const showForm = ref(false)
const emailError = ref('')

const formData = reactive({
  email: '',
  subject: '',
  body: ''
})

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email) {
    emailError.value = 'Email is required'
  } else if (!emailRegex.test(formData.email)) {
    emailError.value = 'Please enter a valid email address'
  } else {
    emailError.value = ''
  }
}

const handleSubmit = () => {
  validateEmail()
  if (!emailError.value) {
    VisitorService.recordContact(formData)
    handleClose()
  }
}

const handleClose = () => {
  showForm.value = false
  // Reset form
  formData.email = ''
  formData.subject = ''
  formData.body = ''
  emailError.value = ''
}

// Expose methods to parent component
defineExpose({
  showForm,
  handleClose
})
</script>

<style scoped>
.contact-form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.contact-form {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-form-content {
  text-align: left;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.form-header h2 {
  color: #ffffff;
  margin: 0;
  font-size: 1.5rem;
}

.close-button {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #00a8ff;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-input {
  width: 100%;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #00a8ff;
}

.form-input.error {
  border-color: #ff4757;
  background-color: rgba(255, 71, 87, 0.05);
}

.textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  color: #ff4757;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.submit-button {
  width: 100%;
  padding: 0.8rem;
  border-radius: 6px;
  border: none;
  background: linear-gradient(135deg, #00a8ff 0%, #0097e6 100%);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 168, 255, 0.3);
}

.submit-button:active {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submit-button:disabled:hover {
  transform: none;
  box-shadow: none;
}
</style> 