<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '@vueuse/head'
import Header from '@/components/Header.vue'
import ContactForm from '@/components/ContactForm.vue'
import ProjectCard, { type Project } from '@/components/ProjectCard.vue'

// Profile Data - Easy to edit
const profile = {
  name: 'Rafael',
  role: 'Tech Manager',
  tagline: 'Engineering Leadership | AI-enabled Delivery',
  email: 'rafael@example.com',
  linkedinUrl: 'https://linkedin.com/in/rafaelneves',
  githubUrl: 'https://github.com/rafaelfne',
  cvUrl: '/cv.pdf',
  currentStatus: 'Open to new opportunities'
}

useHead({
  title: `${profile.name} | ${profile.role}`,
  meta: [
    {
      name: 'description',
      content: `${profile.name} - ${profile.role}. ${profile.tagline}. Building high-performing teams, scalable platforms, shipping with quality.`
    }
  ]
})

// Highlight Cards
const highlights = [
  {
    title: 'Engineering Leadership',
    description: 'Building and scaling high-performing engineering teams with a focus on developer experience and delivery velocity.'
  },
  {
    title: 'Platform & Architecture',
    description: 'Designing scalable systems and platforms that enable teams to ship faster and more reliably.'
  },
  {
    title: 'AI & Automation',
    description: 'Leveraging AI and automation to accelerate delivery, improve quality, and reduce toil.'
  },
  {
    title: 'FinOps & Cost',
    description: 'Optimizing cloud costs and implementing FinOps practices to maximize ROI on infrastructure.'
  }
]

// Work Experience
const experiences = [
  {
    company: 'Company A',
    role: 'Tech Manager',
    dates: '2022 - Present',
    bullets: [
      'Led a team of 15+ engineers across multiple squads',
      'Reduced deployment time by 60% through CI/CD improvements',
      'Implemented AI-powered code review tools'
    ]
  },
  {
    company: 'Company B',
    role: 'Senior Software Engineer',
    dates: '2019 - 2022',
    bullets: [
      'Architected microservices platform serving 1M+ users',
      'Mentored junior engineers and led technical hiring',
      'Drove adoption of TypeScript and modern practices'
    ]
  },
  {
    company: 'Company C',
    role: 'Software Engineer',
    dates: '2017 - 2019',
    bullets: [
      'Built real-time data pipelines for analytics',
      'Contributed to open-source projects',
      'Improved system reliability to 99.9% uptime'
    ]
  }
]

// Projects Data
const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Platform X',
    description: 'A scalable microservices platform for high-traffic applications.',
    tags: ['TypeScript', 'Kubernetes', 'AWS'],
    category: 'Platform',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 2,
    title: 'AI Assistant',
    description: 'An AI-powered coding assistant that helps developers write better code.',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    category: 'AI',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 3,
    title: 'Product Dashboard',
    description: 'Real-time analytics dashboard for product metrics and KPIs.',
    tags: ['Vue.js', 'D3.js', 'PostgreSQL'],
    category: 'Product',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 4,
    title: 'Infra Monitor',
    description: 'Infrastructure monitoring and alerting system with cost optimization.',
    tags: ['Go', 'Prometheus', 'Grafana'],
    category: 'Infra',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 5,
    title: 'Mobile App',
    description: 'Cross-platform mobile application for team collaboration.',
    tags: ['React Native', 'Firebase', 'Node.js'],
    category: 'Product',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 6,
    title: 'ML Pipeline',
    description: 'Automated machine learning pipeline for data processing and model training.',
    tags: ['Python', 'TensorFlow', 'Airflow'],
    category: 'AI',
    demoUrl: '#',
    repoUrl: '#'
  }
])

// Project Filtering
const categories = ['All', 'Platform', 'Product', 'AI', 'Infra']
const selectedCategory = ref('All')

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects.value
  }
  return projects.value.filter(p => p.category === selectedCategory.value)
})

// Writing / Articles
const articles = [
  {
    title: 'Building High-Performing Engineering Teams',
    excerpt: 'Key principles and practices for creating teams that deliver consistently.',
    url: '#',
    date: 'Jan 2024'
  },
  {
    title: 'The Future of AI-Enabled Development',
    excerpt: 'How AI is transforming the way we write and review code.',
    url: '#',
    date: 'Dec 2023'
  },
  {
    title: 'FinOps Best Practices for Startups',
    excerpt: 'Managing cloud costs effectively as your company scales.',
    url: '#',
    date: 'Nov 2023'
  }
]
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Header -->
    <Header :name="profile.name" />

    <!-- Main Content -->
    <main class="pt-16">
      <!-- Hero Section -->
      <section
        id="top"
        class="scroll-mt-24 px-4 py-12 md:px-6 md:py-20 lg:px-8 lg:py-24"
      >
        <div class="mx-auto max-w-7xl">
          <h1 class="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {{ profile.name }}
          </h1>
          <p class="mt-4 text-xl text-cyan-400 md:text-2xl">
            {{ profile.role }} | {{ profile.tagline }}
          </p>
          <p class="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Building high-performing teams, scalable platforms, and shipping products with quality. 
            Passionate about engineering excellence and enabling developers to do their best work.
          </p>
          <p class="mt-4 text-sm text-gray-400">
            Currently: {{ profile.currentStatus }}
          </p>

          <!-- CTAs -->
          <div class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:flex md:gap-4">
            <a
              href="#projects"
              class="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-500 transition-colors min-h-[44px]"
            >
              See Projects
            </a>
            <a
              :href="profile.cvUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800 transition-colors min-h-[44px]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white hover:bg-gray-800 transition-colors min-h-[44px]"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section
        id="about"
        class="scroll-mt-24 bg-gray-800/50 px-4 py-12 md:px-6 md:py-16 lg:px-8"
      >
        <div class="mx-auto max-w-7xl">
          <h2 class="text-2xl font-bold md:text-3xl">About</h2>
          
          <div class="mt-8 grid gap-8 md:grid-cols-2">
            <!-- About Text -->
            <div class="text-base leading-relaxed text-gray-300">
              <p class="mb-4">
                I'm a Tech Manager with a passion for building great products and even greater teams. 
                With years of experience in software engineering and leadership, I focus on creating 
                environments where engineers can thrive and deliver their best work.
              </p>
              <p>
                My approach combines technical excellence with empathetic leadership, 
                ensuring that both the product and the people behind it are set up for success.
              </p>
            </div>

            <!-- Highlight Cards -->
            <div class="grid gap-4 sm:grid-cols-2">
              <div
                v-for="highlight in highlights"
                :key="highlight.title"
                class="rounded-lg border border-gray-700 bg-gray-800 p-4"
              >
                <h3 class="font-semibold text-cyan-400">{{ highlight.title }}</h3>
                <p class="mt-2 text-sm text-gray-400">{{ highlight.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Work / Experience Section -->
      <section
        id="work"
        class="scroll-mt-24 px-4 py-12 md:px-6 md:py-16 lg:px-8"
      >
        <div class="mx-auto max-w-7xl">
          <h2 class="text-2xl font-bold md:text-3xl">Work Experience</h2>

          <div class="mt-8 space-y-8">
            <article
              v-for="exp in experiences"
              :key="exp.company"
              class="relative border-l-2 border-gray-700 pl-6 pb-8 last:pb-0"
            >
              <!-- Timeline dot -->
              <div class="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-cyan-500 bg-gray-900" />
              
              <div class="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                <h3 class="text-lg font-semibold text-white">{{ exp.role }}</h3>
                <span class="text-cyan-400">@ {{ exp.company }}</span>
              </div>
              <p class="mt-1 text-sm text-gray-400">{{ exp.dates }}</p>
              
              <ul class="mt-4 space-y-2">
                <li
                  v-for="(bullet, index) in exp.bullets"
                  :key="index"
                  class="flex items-start text-sm text-gray-300"
                >
                  <span class="mr-2 text-cyan-500">•</span>
                  {{ bullet }}
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section
        id="projects"
        class="scroll-mt-24 bg-gray-800/50 px-4 py-12 md:px-6 md:py-16 lg:px-8"
      >
        <div class="mx-auto max-w-7xl">
          <h2 class="text-2xl font-bold md:text-3xl">Projects</h2>

          <!-- Filter Pills -->
          <div class="mt-6 flex flex-wrap gap-2">
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="rounded-full px-4 py-2 text-sm font-medium transition-colors min-h-[44px]"
              :class="selectedCategory === category
                ? 'bg-cyan-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>

          <!-- Project Cards Grid -->
          <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              v-for="project in filteredProjects"
              :key="project.id"
              :project="project"
            />
          </div>
        </div>
      </section>

      <!-- Writing Section -->
      <section
        id="writing"
        class="scroll-mt-24 px-4 py-12 md:px-6 md:py-16 lg:px-8"
      >
        <div class="mx-auto max-w-7xl">
          <h2 class="text-2xl font-bold md:text-3xl">Writing</h2>

          <div class="mt-8 grid gap-4 md:grid-cols-3">
            <article
              v-for="article in articles"
              :key="article.title"
              class="rounded-lg border border-gray-700 bg-gray-800/50 p-4 md:p-6 hover:border-gray-600 transition-colors"
            >
              <p class="text-xs text-gray-500">{{ article.date }}</p>
              <h3 class="mt-2 text-lg font-semibold text-white">
                <a :href="article.url" class="hover:text-cyan-400 transition-colors">
                  {{ article.title }}
                </a>
              </h3>
              <p class="mt-2 text-sm text-gray-400 leading-relaxed">
                {{ article.excerpt }}
              </p>
              <a
                :href="article.url"
                class="mt-4 inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors min-h-[44px]"
              >
                Read more
                <svg class="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section
        id="contact"
        class="scroll-mt-24 bg-gray-800/50 px-4 py-12 md:px-6 md:py-16 lg:px-8"
      >
        <div class="mx-auto max-w-7xl">
          <h2 class="text-2xl font-bold md:text-3xl">Get in Touch</h2>

          <div class="mt-8 grid gap-8 md:grid-cols-2">
            <!-- Contact Info -->
            <div>
              <p class="text-base leading-relaxed text-gray-300 mb-6">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and leadership.
              </p>

              <div class="space-y-4">
                <a
                  :href="`mailto:${profile.email}`"
                  class="flex items-center text-gray-300 hover:text-white transition-colors min-h-[44px]"
                >
                  <svg class="w-5 h-5 mr-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {{ profile.email }}
                </a>
                
                <a
                  :href="profile.linkedinUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center text-gray-300 hover:text-white transition-colors min-h-[44px]"
                >
                  <svg class="w-5 h-5 mr-3 text-cyan-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                
                <a
                  :href="profile.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center text-gray-300 hover:text-white transition-colors min-h-[44px]"
                >
                  <svg class="w-5 h-5 mr-3 text-cyan-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            <!-- Contact Form -->
            <ContactForm />
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 px-4 py-8 md:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p class="text-sm text-gray-400">
            © {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved.
          </p>
          
          <nav class="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#top" class="text-sm text-gray-400 hover:text-white transition-colors">
              Top
            </a>
            <a href="#about" class="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#work" class="text-sm text-gray-400 hover:text-white transition-colors">
              Work
            </a>
            <a href="#projects" class="text-sm text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" class="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>