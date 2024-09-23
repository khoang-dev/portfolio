<template>
  <v-container class="contact">
    <header class="introdution-information">
      <img width="70" height="70" :src="PERSONAL_AVATAR_ICON_URL" alt="avatar" class="avatar" />
      <h1>{{ PERSONAL_SLOGAN }}</h1>
      <p>
        {{ PERSONAL_INTRODUCTION }}
      </p>
      <section class="social_network">
        <a href="https://www.linkedin.com/in/khoang-vo-dang-2403621b3/" target="_blank">
          <img src="/assets/image/linkedin-icon.svg" width="40" height="40" alt="linkedin-icon" />
        </a>
        <a href="https://github.com/khoang-dev" target="_blank">
          <img src="/assets/image/github-icon.svg" width="40" height="40" alt="github-icon" />
        </a>
      </section>
    </header>
    <v-row class="email-form">
      <v-col cols="12" sm="4">
        <label for="form">GET IN TOUCH</label>
      </v-col>
      <v-col cols="12" sm="8">
        <form @submit="submit" class="form" id="form">
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
import { PERSONAL_AVATAR_ICON_URL, PERSONAL_INTRODUCTION, PERSONAL_SLOGAN } from '@/constant'
import sendEmail from '@/assets/smtp/smtp.js'
import { toast } from 'vue3-toastify'
import { useField, useForm } from 'vee-validate'

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
  width: 100%;
  // padding: 0 18em;
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
      max-width: 50em;
    }
  }
}
</style>
