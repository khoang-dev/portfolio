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

const PROJECT_LIST: readonly ProjectCardProps[] = Object.freeze([
  {
    imageUrl: '/assets/image/project/test1.webp',
    name: 'Christmas card',
    description: 'Experimental web app with homemade recursive string interpolation',
    startTime: '2024',
    accomplishments: [
      'Ruby on Rails backend',
      'Ruby on Rails backend',
      'Ruby on Rails backend',
      'Ruby on Rails backend'
    ],
    websiteUrl: 'https://github.com/khoang-dev/card',
    githubUrl: 'https://github.com/khoang-dev/card'
  },
  {
    imageUrl: '/assets/image/project/test1.webp',
    name: 'Christmas card',
    description: 'Experimental web app with homemade recursive string interpolation',
    startTime: '2023',
    accomplishments: [
      'Ruby on Rails backend',
      'Ruby on Rails backend',
      'Ruby on Rails backend',
      'Ruby on Rails backend'
    ],
    websiteUrl: 'https://github.com/khoang-dev/card',
    githubUrl: 'https://github.com/khoang-dev/card'
  }
])
</script>
