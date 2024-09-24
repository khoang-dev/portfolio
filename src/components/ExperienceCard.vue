<template>
  <v-card class="mx-auto w-100 pa-4 card">
    <template v-slot:prepend>
      <a :href="props.companyUrl" target="_blank">
        <img
          width="40"
          height="40"
          :src="props.imageUrl"
          :alt="`${props.companyName} logo`"
          class="d-block"
        />
      </a>
    </template>
    <template v-slot:title>
      <a class="text-decoration-none companyName" :href="props.companyUrl" target="_blank">{{
        props.companyName
      }}</a>
    </template>
    <template v-slot:append>
      {{ props.role }}
    </template>
    <v-divider />
    <v-card-text class="py-2">
      <div class="font-italic py-1 opacity-70">
        {{ props.description }}
      </div>
      <div class="d-inline responsibilities">
        {{ props.responsibilities }}
      </div>
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
  background-color: rgb(241, 241, 237);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  .companyName {
    color: inherit;
  }
  .companyNamee:hover {
    text-decoration: underline;
  }
  .responsibilities {
    white-space: pre-line;
  }
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
