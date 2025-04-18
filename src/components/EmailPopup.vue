<template>
  <div v-if="showPopup" class="email-popup-overlay">
    <div class="email-popup">
      <div class="email-popup-content">
        <h2>Welcome to My Portfolio!</h2>
        <p>Please enter your email.</p>
        <form @submit.prevent="handleSubmit" class="email-form">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            class="email-input"
            :class="{ 'error': emailError }"
            @input="validateEmail"
          />
          <div v-if="emailError" class="error-message">{{ emailError }}</div>
          <div class="button-group">
            <button type="submit" class="submit-button" :disabled="!!emailError">Submit</button>
            <button type="button" class="cancel-button" @click="handleCancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VisitorService from '@/services/VisitorService';

const showPopup = ref(false)
const email = ref('')
const emailError = ref('')

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value) {
    emailError.value = 'Email is required'
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Please enter a valid email address'
  } else {
    emailError.value = ''
  }
}

const handleSubmit = () => {
  validateEmail()
  if (!emailError.value && email.value) {
    localStorage.setItem('visitorEmail', email.value)
    VisitorService.recordVisitor(email.value);
    showPopup.value = false
  }
}

const handleCancel = () => {
  showPopup.value = false
}

onMounted(() => {
  const storedEmail = localStorage.getItem('visitorEmail')
  if (!storedEmail) {
    showPopup.value = true
  }
})
</script>

<style scoped>
.email-popup-overlay {
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

.email-popup {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.email-popup-content {
  text-align: center;
}

.email-popup h2 {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.email-popup p {
  color: #b3b3b3;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.email-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.email-input {
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.email-input:focus {
  outline: none;
  border-color: #00a8ff;
}

.email-input.error {
  border-color: #ff4757;
  background-color: rgba(255, 71, 87, 0.05);
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.submit-button, .cancel-button {
  flex: 1;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.submit-button {
  border: none;
  background: linear-gradient(135deg, #00a8ff 0%, #0097e6 100%);
  color: white;
}

.cancel-button {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.submit-button:hover, .cancel-button:hover {
  transform: translateY(-2px);
}

.submit-button:hover {
  box-shadow: 0 4px 12px rgba(0, 168, 255, 0.3);
}

.cancel-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.submit-button:active, .cancel-button:active {
  transform: translateY(0);
}

.error-message {
  color: #ff4757;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  text-align: left;
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