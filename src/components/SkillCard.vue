<template>
  <v-card class="mx-auto card">
    <template v-slot:title class="title">
      <h3 class="title">
        {{ props.title }}
      </h3>
    </template>
    <v-divider />
    <v-card-text class="py-5 skill-list">
      <div v-for="skill in props.skills" class="skill">
        <img :src="skill.imageUrl" :alt="`${skill.name} logo`" width="100" height="100" />
        {{ skill.name }}
      </div>
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
  width: 100%;
  background-color: rgb(241, 241, 237);
  padding: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  .title {
    color: #795548;
    font-weight: 300;
  }
  .skill-list {
    display: flex;
    gap: 3.5em;
    .skill {
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
      font-size: 1.1em;
    }
  }
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
