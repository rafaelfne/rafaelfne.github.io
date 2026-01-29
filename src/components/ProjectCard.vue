<script setup lang="ts">
export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
  demoUrl?: string
  repoUrl?: string
}

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="rounded-lg bg-gray-800/50 border border-gray-700 p-4 md:p-6 hover:border-gray-600 transition-colors">
    <h3 class="text-lg font-semibold text-white mb-2">
      {{ project.title }}
    </h3>
    <p class="text-gray-400 text-sm leading-relaxed mb-4">
      {{ project.description }}
    </p>
    
    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="inline-block rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-gray-300"
      >
        {{ tag }}
      </span>
    </div>
    
    <!-- Links -->
    <div class="flex gap-4">
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors min-h-[44px]"
      >
        <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        Demo
      </a>
      <a
        v-if="project.repoUrl"
        :href="project.repoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors min-h-[44px]"
      >
        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
        </svg>
        Code
      </a>
    </div>
  </article>
</template>
