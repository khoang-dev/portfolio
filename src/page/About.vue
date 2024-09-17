<template>
  <div class="about">
    <header class="introduce">
      <section class="description">
        <h1 class="slogan">{{ PERSONAL_SLOGAN }}</h1>
        <p>
          {{ PERSONAL_INTRODUCTION }}
        </p>
      </section>
      <img class="avatar" width="324" height="414" :src="PERSONAL_AVATAR" alt="avatar" />
    </header>
    <section class="skills">
      <h2>SKILLS</h2>
      <SkillCard v-for="skills in SKILLS_LIST" v-bind="skills"></SkillCard>
    </section>
    <section class="experiences">
      <h2>EXPERIENCES</h2>
      <ExperienceCard v-for="experience in EXPERIENCES" v-bind="experience"></ExperienceCard>
    </section>
  </div>
</template>

<script setup lang="ts">
import ExperienceCard, { type ExperienceCardProps } from '@/components/ExperienceCard.vue'
import SkillCard, { type SkillCardProps } from '@/components/SkillCard.vue'

import { PERSONAL_INTRODUCTION, PERSONAL_SLOGAN, PERSONAL_AVATAR } from '@/constant'

const SKILLS_LIST: readonly SkillCardProps[] = Object.freeze([
  // https://techicons.dev/ get icon from here
  {
    title: 'HTML',
    skills: [
      { imageUrl: 'src/assets/image/skills/html5.png', name: 'HTML5' },
      { imageUrl: 'src/assets/image/skills/react.png', name: 'JSX' }
    ]
  },
  {
    title: 'CSS',
    skills: [
      { imageUrl: 'src/assets/image/skills/css3.png', name: 'CSS3' },
      { imageUrl: 'src/assets/image/skills/sass.png', name: 'SASS' },
      { imageUrl: 'src/assets/image/skills/bootstrap.png', name: 'Bootstrap' },
      { imageUrl: 'src/assets/image/skills/tailwind.png', name: 'Tailwind' }
    ]
  },
  {
    title: 'Javascript',
    skills: [
      { imageUrl: 'src/assets/image/skills/javascript.png', name: 'JavaScript' },
      { imageUrl: 'src/assets/image/skills/typescript.png', name: 'TypeScript' },
      { imageUrl: 'src/assets/image/skills/vue.png', name: 'Vue' },
      { imageUrl: 'src/assets/image/skills/quasar.png', name: 'Quasar' },
      { imageUrl: 'src/assets/image/skills/react.png', name: 'React' },
      { imageUrl: 'src/assets/image/skills/nuxt.png', name: 'Nuxt' }
    ]
  },
  {
    title: 'Back-End',
    skills: [
      { imageUrl: 'src/assets/image/skills/node.png', name: 'Node' },
      { imageUrl: 'src/assets/image/skills/c++.png', name: 'C++' },
      { imageUrl: 'src/assets/image/skills/mongo-db.png', name: 'MongoDB' },
      { imageUrl: 'src/assets/image/skills/postgres-sql.png', name: 'PostgreSQL' }
    ]
  },
  {
    title: 'Build Tools',
    skills: [
      { imageUrl: 'src/assets/image/skills/webpack.png', name: 'Webpack' },
      { imageUrl: 'src/assets/image/skills/vite.png', name: 'Vite' }
    ]
  },
  {
    title: 'Other',
    skills: [
      { imageUrl: 'src/assets/image/skills/github.png', name: 'Github' },
      { imageUrl: 'src/assets/image/skills/figma.png', name: 'Figma' },
      { imageUrl: 'src/assets/image/skills/capacitor.png', name: 'Capacitor' },
      { imageUrl: 'src/assets/image/skills/vuetify.png', name: 'Vuetify' },
      { imageUrl: 'src/assets/image/skills/jest.png', name: 'Jest' }
    ]
  }
])
const EXPERIENCES: readonly ExperienceCardProps[] = Object.freeze([
  {
    imageUrl: 'src/assets/image/company-logo/ipsip-vn.jpeg',
    companyName: 'IPSIP VN',
    companyUrl: 'https://www.ipsip.vn/',
    role: 'Front-end developer',
    description: 'Build web and app to serve customers car repair process.',
    responsibilities:
      '+ Implement, maintain, refactor a lot of feature (appointment stat, review stat, step editing, show advertisement...).\
\n+ Suggest idea and solution with manager (add storybook, add CI...).\
\n+ Handle responsive, configure and build for android mobile app with Capacitor.\
\n+ Handle almost all charts on UI with chartjs.\
\n+ Configure and implement to save file, image on mobile.\
\n+ Optimized performance when calling multiple http requests at the same time (reduced from 5 seconds to 1 second).\
\n+ Working closely with manager, backend developer, QA to intergrate code, report, clear\
requirement and fix bug.',
    periodTime: { start: 'Apr 2023', end: 'Present' },
    location: 'HCM City'
  },
  {
    imageUrl: 'src/assets/image/company-logo/hitachi-digital-services.jpeg',
    companyName: 'Hitachi Digital Services',
    companyUrl: 'https://hitachids.com/',
    role: 'Front-end developer',
    description: 'Developing insurance web and build mobile app from web.',
    responsibilities:
      '+ Implement and maintain a lot of feature (sleep tracking, provide health information, radar chart, multi-line chart...).\
\n+ Write unit test and storybook for component.\
\n+ Working closely with team member, team leader to analysis requirement and estimate time for task.\
\n+ Mainly responsible for sonarqube configuration to test for code smells and coverage.\
\n+ Support team leader in managing work when necessary.\
\n+ Review code for other members.\
\n+ Handle table to auto load more data when scroll down like Youtube.\
\n+ Config and build android mobile app with Capacitor.\
\n+ Learn and adapt quickly to new skills (Reactjs, Typescript...)\
\n+ Daily meeting with customer to report and clear requirement according to the Scrum\
model.',
    periodTime: { start: 'Apr 2022', end: 'Mar 2023' },
    location: 'HCM City'
  },
  {
    imageUrl: 'src/assets/image/company-logo/hitachi-digital-services.jpeg',
    companyName: 'Hitachi Digital Services',
    companyUrl: 'https://hitachids.com/',
    role: 'Front-end developer',
    description: 'Maintain web sales system.',
    responsibilities:
      '+ Working closely with team member, team leader to analyze requirements and estimate time for task.\
\n+ Responsible for researching documents, then presenting them to everyone in the team.\
\n+ Work with customers to clear requirement.\
\n+ Work with Backend developer to combine code.\
\n+ Maintain a lot of feature (vehicle tracking, package tracking...).',
    periodTime: { start: 'Nov 2021', end: 'Mar 2022' },
    location: 'HCM City'
  },
  {
    imageUrl: 'src/assets/image/company-logo/hitachi-digital-services.jpeg',
    companyName: 'Hitachi Digital Services',
    companyUrl: 'https://hitachids.com/',
    role: 'Full-stack developer',
    description: 'Developing web to control printer system.',
    responsibilities:
      '+ Work closely with Brse to analyze requirements and Q&A.\
\n+ Working closely with team leader, team member to estimate time for task.\
\n+ Implement and maintain a lot of features based on requirements and UI design.\
\n+ Write unit test with Jest framework and create storybook for component.\
\n+ Implement response data of API with C++.\
\n+ Learn and adapt quickly to new skills (Vue, Axios...).',
    periodTime: { start: 'Dec 2020', end: 'Oct 2021' },
    location: 'HCM City'
  },
  {
    imageUrl: 'src/assets/image/company-logo/fpt-software.jpeg',
    companyName: 'FPT Software',
    companyUrl: 'https://fptsoftware.com/',
    role: 'Software Developer',
    description:
      'The purpose of the project is to ensure the accuracy of the operations of automotive RADAR.',
    responsibilities:
      'Write unit test for module of car sensor system with C++ language. Then I was promoted to write software test because of my good performance at work.',
    periodTime: { start: 'Nov 2019', end: 'Jun 2020' },
    location: 'HCM City'
  }
])
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  padding: 0 18em;

  .introduce {
    text-align: center;
    display: flex;
    justify-content: space-between;
    gap: 3em;
    align-items: flex-end;
    margin-top: 10em;
    padding-bottom: 3em;
    border-bottom: 1px solid;

    .description {
      border-top: 1px solid;
      // border-bottom: 1px solid;
      padding: 2em;
      display: flex;
      flex-direction: column;
      gap: 2em;
      text-align: left;
      h1 {
        font-size: 2.2em;
      }
    }

    .avatar {
      border-radius: 0.5em;
    }
  }

  .skills,
  .experiences {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
    gap: 4em;
    padding-bottom: 3em;
    border-bottom: 1px solid;
  }
}
</style>
