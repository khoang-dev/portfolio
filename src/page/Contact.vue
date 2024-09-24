<template>
  <v-container class="w-100 contact">
    <header class="w-100 d-flex flex-column ga-3 py-16 introdution-information">
      <img
        width="70"
        height="70"
        :src="PERSONAL_AVATAR_ICON_URL"
        alt="avatar"
        class="rounded-circle"
      />
      <h1>{{ PERSONAL_SLOGAN }}</h1>
      <p>
        {{ PERSONAL_INTRODUCTION }}
      </p>
      <section class="d-flex ga-3">
        <a href="https://www.linkedin.com/in/khoang-vo-dang-2403621b3/" target="_blank">
          <v-icon size="x-large" color="black"> mdi-linkedin </v-icon>
          <v-tooltip activator="parent">Connect on Linkedin</v-tooltip>
        </a>
        <a href="https://github.com/khoang-dev" target="_blank">
          <v-icon size="x-large" color="black"> mdi-github </v-icon>
          <v-tooltip activator="parent">Check out my Github profile</v-tooltip>
        </a>
      </section>
    </header>
    <v-divider opacity="1" />
    <v-row class="d-flex justify-space-between py-12 font-weight-bold email-form">
      <v-col cols="12" sm="4">
        <label for="form">GET IN TOUCH</label>
      </v-col>
      <v-col cols="12" sm="8">
        <form @submit="submit" class="d-flex flex-column form" id="form">
          <v-text-field
            v-model="email.value.value"
            label="Email"
            :error-messages="email.errorMessage.value"
            single-line
          ></v-text-field>
          <v-textarea
            v-model="message.value.value"
            label="Your message"
            :error-messages="message.errorMessage.value"
            single-line
          ></v-textarea>
          <v-btn class="mt-2" type="submit" rounded="xl" color="black">Submit</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { toast } from 'vue3-toastify'
import { useField, useForm } from 'vee-validate'

import { PERSONAL_AVATAR_ICON_URL, PERSONAL_INTRODUCTION, PERSONAL_SLOGAN } from '@/constant'
import sendEmail from '@/assets/smtp/smtp.js'

const { handleSubmit } = useForm({
  validationSchema: {
    email(value: string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
    message(value: string) {
      if (value?.length) return true

      return 'Message needs to be at least 1 characters.'
    }
  }
})
const email = useField('email')
const message = useField('message')

const submit = handleSubmit(async (values) => {
  try {
    await sendEmail({
      SecureToken: 'ceeb2f09-5582-4dbb-88e9-bcd5f7db8921',
      To: 'kvdvo1997@gmail.com',
      From: 'kvdvo1997@gmail.com',
      Subject: `New message from email ${values.email}`,
      Body: values.message
    })
    toast.success('Sent', { position: 'top-center' })
  } catch (error) {
    toast.error('Send email failure', { position: 'top-center' })
  }
})
</script>

<style lang="scss" scoped>
.contact {
  .introdution-information {
    max-width: 40em;
    h1 {
      font-size: 1.7em;
    }
  }
  .email-form {
    .form {
      max-width: 50em;
    }
  }
}
</style>
