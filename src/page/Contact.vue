<template>
  <div class="contact">
    <header class="introdution-information">
      <img width="70" height="70" :src="PERSONAL_AVATAR" alt="avatar" class="avatar" />
      <h1>{{ PERSONAL_SLOGAN }}</h1>
      <p>
        {{ PERSONAL_INTRODUCTION }}
      </p>
      <section class="social_network">
        <a href="https://www.linkedin.com/in/khoang-vo-dang-2403621b3/" target="_blank">
          <img src="@/assets/image/linkedin-icon.svg" width="40" height="40" alt="linkedin-icon" />
        </a>
        <a href="https://github.com/khoang-dev" target="_blank">
          <img src="@/assets/image/github-icon.svg" width="40" height="40" alt="github-icon" />
        </a>
      </section>
    </header>
    <section class="email-form">
      <label for="form">GET IN TOUCH</label>
      <v-form @submit="submit" class="form" id="form">
        <v-text-field
          v-model="email"
          class="mb-2"
          label="Email"
          clearable
          single-line
        ></v-text-field>
        <v-textarea label="Your message" single-line></v-textarea>
        <v-btn class="mt-2" type="submit" rounded="xl" color="black">Submit</v-btn>
      </v-form>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { PERSONAL_AVATAR, PERSONAL_INTRODUCTION, PERSONAL_SLOGAN } from '@/constant'
import { ref } from 'vue'

const email = ref<string>()
function submit() {}
</script>
<style lang="scss" scoped>
.contact {
  width: 100%;
  padding: 0 18em;
  .introdution-information {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-width: 40em;
    padding: 4em 0;
    .avatar {
      border-radius: 100%;
    }
    h1 {
      font-size: 1.7em;
    }
    .social_network {
      display: flex;
      gap: 0.7em;
    }
  }

  .email-form {
    border-top: 1px solid;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    padding: 3em 0;
    .form {
      display: flex;
      flex-direction: column;
      width: 60%;
      max-width: 50em;
    }
  }
}
</style>
