<template>
  <v-card class="mx-auto w-100 pa-1 card">
    <template v-slot:title>
      <h3 class="font-weight-light title">
        {{ props.title }}
      </h3>
    </template>
    <v-divider />
    <v-card-text class="py-5 d-flex ga-14 skill-list">
      <v-row>
        <v-col
          cols="6"
          sm="2"
          v-for="skill in props.skills"
          class="d-flex flex-column align-center ga-4 w-auto text-body-1"
          :key="skill.name"
        >
          <img :src="skill.imageUrl" :alt="`${skill.name} logo`" width="100" height="100" />
          {{ skill.name }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
interface Skill {
  imageUrl: string
  name: string
}
export interface SkillCardProps {
  title: string
  skills: Skill[]
}

const props = defineProps<SkillCardProps>()
</script>
<style lang="scss" scoped>
.card {
  background-color: rgb(241, 241, 237);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  .title {
    color: #795548;
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
