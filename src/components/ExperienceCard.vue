<template>
  <v-card class="mx-auto card" max-width="900">
    <template v-slot:prepend>
      <a :href="props.companyUrl" target="_blank">
        <img width="40" height="40" :src="props.imageUrl" :alt="`${props.companyName} logo`"
      /></a>
    </template>
    <template v-slot:title>
      <a class="companyName" :href="props.companyUrl" target="_blank">{{ props.companyName }}</a>
    </template>
    <template v-slot:append>
      {{ props.role }}
    </template>
    <v-divider />
    <v-card-text class="py-2">
      <div class="description">
        {{ props.description }}
      </div>
      <div class="responsibilities">
        {{ props.responsibilities }}
      </div>
      <!-- <div class="accomplishments"></div> -->
    </v-card-text>
    <v-divider />
    <v-card-actions>
      {{ `${props.periodTime.start} - ${props.periodTime.end} | ${props.location}` }}
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
interface PeriodTime {
  start: string
  end: string
}
export interface ExperienceCardProps {
  imageUrl: string
  companyName: string
  companyUrl: string
  role: string
  description: string
  responsibilities: string
  periodTime: PeriodTime
  location: string
}

const props = defineProps<ExperienceCardProps>()
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  background-color: rgb(241, 241, 237);
  padding: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  .companyName {
    color: inherit;
    text-decoration: none;
    background-color: transparent;
  }
  .companyNamee:hover {
    text-decoration: underline;
  }
  .description {
    font-style: italic;
    padding: 0.5em 0;
    opacity: 0.75;
  }
  .responsibilities {
    display: inline;
    white-space: pre-line;
  }
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
