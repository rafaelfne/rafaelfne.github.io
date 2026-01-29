<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

defineProps<{
  name: string
}>()

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' }
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
  >
    <nav class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Brand -->
        <a
          href="#top"
          class="text-xl font-bold text-white hover:text-cyan-400 transition-colors min-h-[44px] flex items-center"
        >
          {{ name }}
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:gap-6">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500 transition-colors min-h-[44px] flex items-center"
          >
            Contact
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors min-w-[44px] min-h-[44px]"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          @click="toggleMenu"
        >
          <span class="sr-only">{{ isMenuOpen ? 'Close menu' : 'Open menu' }}</span>
          <!-- Hamburger icon -->
          <svg
            v-if="!isMenuOpen"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <!-- Close icon -->
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Panel -->
      <div
        v-show="isMenuOpen"
        id="mobile-menu"
        class="md:hidden border-t border-gray-800"
        :aria-hidden="!isMenuOpen"
      >
        <div class="space-y-1 px-2 pb-4 pt-2">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block rounded-lg px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors min-h-[44px]"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="block rounded-lg bg-cyan-600 px-3 py-3 text-base font-semibold text-white hover:bg-cyan-500 transition-colors text-center mt-2 min-h-[44px]"
            @click="closeMenu"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
