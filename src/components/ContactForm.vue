<script setup lang="ts">
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitted = ref(false)
const isSubmitting = ref(false)

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const hasErrors = computed(() => {
  return errors.value.name || errors.value.email || errors.value.message
})

function validateField(field: 'name' | 'email' | 'message') {
  errors.value[field] = ''
  
  if (field === 'name' && !form.value.name.trim()) {
    errors.value.name = 'Name is required'
  }
  
  if (field === 'email') {
    if (!form.value.email.trim()) {
      errors.value.email = 'Email is required'
    } else if (!isValidEmail(form.value.email)) {
      errors.value.email = 'Please enter a valid email address'
    }
  }
  
  if (field === 'message' && !form.value.message.trim()) {
    errors.value.message = 'Message is required'
  }
}

function validateAll(): boolean {
  validateField('name')
  validateField('email')
  validateField('message')
  return !hasErrors.value
}

function focusFirstInvalid() {
  if (errors.value.name) {
    document.getElementById('contact-name')?.focus()
  } else if (errors.value.email) {
    document.getElementById('contact-email')?.focus()
  } else if (errors.value.message) {
    document.getElementById('contact-message')?.focus()
  }
}

const submitError = ref('')

async function handleSubmit() {
  if (!validateAll()) {
    focusFirstInvalid()
    return
  }
  
  isSubmitting.value = true
  submitError.value = ''
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 500))
    
    isSubmitted.value = true
    
    // Reset form
    form.value = { name: '', email: '', message: '' }
    errors.value = { name: '', email: '', message: '' }
  } catch (error) {
    submitError.value = 'Failed to send message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

function resetForm() {
  isSubmitted.value = false
  submitError.value = ''
}
</script>

<template>
  <div>
    <!-- Success Message -->
    <div
      v-if="isSubmitted"
      class="rounded-lg bg-green-900/50 border border-green-700 p-6 text-center"
      role="alert"
    >
      <svg
        class="mx-auto h-12 w-12 text-green-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 class="text-lg font-semibold text-green-400 mb-2">Message Sent!</h3>
      <p class="text-gray-300 mb-4">Thank you for reaching out. I'll get back to you soon.</p>
      <button
        type="button"
        class="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
        @click="resetForm"
      >
        Send another message
      </button>
    </div>

    <!-- Contact Form -->
    <form
      v-else
      class="space-y-4"
      novalidate
      @submit.prevent="handleSubmit"
    >
      <!-- Name Field -->
      <div>
        <label
          for="contact-name"
          class="block text-sm font-medium text-gray-300 mb-1"
        >
          Name
        </label>
        <input
          id="contact-name"
          v-model="form.name"
          type="text"
          autocomplete="name"
          class="w-full rounded-lg border bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors min-h-[44px]"
          :class="errors.name ? 'border-red-500' : 'border-gray-700'"
          :aria-invalid="!!errors.name"
          :aria-describedby="errors.name ? 'name-error' : undefined"
          placeholder="Your name"
          @blur="validateField('name')"
        >
        <p
          v-if="errors.name"
          id="name-error"
          class="mt-1 text-sm text-red-400"
          role="alert"
        >
          {{ errors.name }}
        </p>
      </div>

      <!-- Email Field -->
      <div>
        <label
          for="contact-email"
          class="block text-sm font-medium text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          id="contact-email"
          v-model="form.email"
          type="email"
          autocomplete="email"
          class="w-full rounded-lg border bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors min-h-[44px]"
          :class="errors.email ? 'border-red-500' : 'border-gray-700'"
          :aria-invalid="!!errors.email"
          :aria-describedby="errors.email ? 'email-error' : undefined"
          placeholder="your@email.com"
          @blur="validateField('email')"
        >
        <p
          v-if="errors.email"
          id="email-error"
          class="mt-1 text-sm text-red-400"
          role="alert"
        >
          {{ errors.email }}
        </p>
      </div>

      <!-- Message Field -->
      <div>
        <label
          for="contact-message"
          class="block text-sm font-medium text-gray-300 mb-1"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          v-model="form.message"
          rows="4"
          class="w-full rounded-lg border bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
          :class="errors.message ? 'border-red-500' : 'border-gray-700'"
          :aria-invalid="!!errors.message"
          :aria-describedby="errors.message ? 'message-error' : undefined"
          placeholder="How can I help you?"
          @blur="validateField('message')"
        />
        <p
          v-if="errors.message"
          id="message-error"
          class="mt-1 text-sm text-red-400"
          role="alert"
        >
          {{ errors.message }}
        </p>
      </div>

      <!-- Submit Error -->
      <div
        v-if="submitError"
        class="rounded-lg bg-red-900/50 border border-red-700 p-3 text-center"
        role="alert"
      >
        <p class="text-sm text-red-400">{{ submitError }}</p>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </div>
</template>
