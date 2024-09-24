<template>
  <div class="position-relative overflow-hidden border border-sm border-opacity-100 card">
    <article class="h-100">
      <div @click="showDisclosure" class="h-50 overflow-hidden cursor-pointer image-card">
        <img :src="props.imageUrl" class="w-100" :alt="props.name" />
      </div>
      <div class="pa-6 d-flex flex-column ga-2 h-50">
        <header class="d-flex justify-space-between">
          <h2 class="cursor-pointer" @click="showDisclosure">{{ props.name }}</h2>
          <v-btn
            density="comfortable"
            icon="mdi-dots-vertical"
            variant="plain"
            @click="showDisclosure"
          />
        </header>
        <p class="h-100">{{ props.description }}</p>
        <span class="ml-auto w-fit">{{ props.startTime }}</span>
      </div>
    </article>
    <article
      :class="[
        'position-absolute w-100 h-100 d-flex flex-column disclosure-card',
        disclosureState ? 'show' : 'hidden'
      ]"
    >
      <div class="h-100 pa-4">
        <header class="d-flex justify-space-between align-center">
          <h3>Accomplishments</h3>
          <v-btn
            density="comfortable"
            icon="$close"
            variant="plain"
            @click="hiddenDisclosure"
          ></v-btn>
        </header>
        <section>
          <ul class="h-100 mt-4">
            <li class="ml-4" v-for="accomplishment in props.accomplishments">
              {{ accomplishment }}
            </li>
          </ul>
        </section>
      </div>
      <v-divider />
      <nav class="pa-4 d-flex ga-3 action">
        <a class="pa-3 rounded-circle bg-white action-item" :href="props.websiteUrl" target="_blank"
          ><v-icon color="black"> mdi-open-in-new </v-icon>
          <v-tooltip activator="parent">View online</v-tooltip></a
        >
        <a class="pa-3 rounded-circle bg-white action-item" :href="props.githubUrl" target="_blank"
          ><v-icon color="black"> mdi-github </v-icon>
          <v-tooltip activator="parent">View source</v-tooltip></a
        >
      </nav>
    </article>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

export interface ProjectCardProps {
  imageUrl: string
  name: string
  description: string
  startTime: string
  accomplishments: string[]
  websiteUrl: string
  githubUrl: string
}
const props = defineProps<ProjectCardProps>()

const disclosureState = ref<boolean>(false)

function showDisclosure() {
  disclosureState.value = true
}
function hiddenDisclosure() {
  disclosureState.value = false
}
</script>
<style lang="scss" scoped>
.card {
  height: 25em;
  filter: grayscale(100%);
  .disclosure-card {
    background-color: rgb(241, 241, 237);
    top: 100%;
    &.show {
      transform: translateY(-100%);
      transition-duration: 0.5s;
    }
    &.hidden {
      transform: translateY(0%);
      transition-duration: 0.5s;
    }
    .action {
      .action-item {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        &:hover {
          box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  &:hover {
    filter: none;
  }
}
</style>
