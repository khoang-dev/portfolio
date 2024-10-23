<template>
  <v-container class="w-100">
    <header class="d-flex flex-column align-center py-8">
      <label class="opacity-60 text-caption">LATEST WORK</label>
      <h1>Here are some of the things I've been working on.</h1>
    </header>
    <v-divider opacity="1"></v-divider>
    <section>
      <v-row class="d-flex my-8">
        <v-col cols="12" sm="6" md="4" v-for="project in PROJECT_LIST" :key="project.name">
          <ProjectCard v-bind="project"></ProjectCard>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>
<script lang="ts" setup>
import ProjectCard, { type ProjectCardProps } from '@/components/ProjectCard.vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const PROJECT_LIST: readonly ProjectCardProps[] = Object.freeze([
  {
    imageUrl: '/assets/image/project/work-management.png',
    name: 'Work management',
    description: 'A website helps users focus and manage their work',
    startTime: '2024',
    accomplishments: [
      'Use HTML, CSS, TypeScript',
      'Building on Vue, Quasar, SCSS and Vue ecosystem'
    ],
    // websiteUrl: router.path,
    githubUrl: 'https://github.com/khoang-dev/work-management'
  },
  {
    imageUrl: '/assets/image/project/portfolio.png',
    name: 'Portfolio',
    description:
      'A website introducing yourself, personal projects, and the means to contact the author',
    startTime: '2024',
    accomplishments: [
      'Use HTML, CSS, TypeScript',
      'Building on Vue, Vuetify, SCSS',
      'Achieve good scores for performance and SEO'
    ],
    websiteUrl: window.location.origin,
    githubUrl: 'https://github.com/khoang-dev/portfolio'
  }
  // {
  //   imageUrl: '/assets/image/project/christmas-card.png',
  //   name: 'Christmas card',
  //   description:
  //     'An online gift for friends at a Christmas event includes music, a card, and fireworks',
  //   startTime: '2023',
  //   accomplishments: ['Use HTML, CSS, JavaScript', 'Building on Vue and Particles js'],
  //   websiteUrl: 'https://kvd-christmas-card.netlify.app/'
  // }
])
</script>
