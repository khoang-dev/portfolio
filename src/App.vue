<template>
  <div class="container">
    <header class="w-100 d-flex justify-space-between align-center py-1 px-16">
      <v-row class="d-flex align-center justify-space-between">
        <v-col cols="12" sm="2">
          <RouterLink
            class="d-block font-weight-bold font-italic cursor-pointer text-decoration-none logo"
            :to="routes[0].path"
            >Khoang Vo</RouterLink
          >
        </v-col>
        <v-col cols="12" sm="2">
          <nav class="d-flex justify-end ga-4 navigation">
            <RouterLink
              v-for="item in routes"
              :key="item.name"
              :to="item.path"
              class="text-decoration-none font-weight-normal navigation-item"
              >{{ item.name }}</RouterLink
            >
          </nav>
        </v-col>
      </v-row>
    </header>
    <v-divider opacity="1" />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import routes from '@/router/routes'

const router = useRouter()
</script>

<style scoped lang="scss">
.container {
  background-color: rgb(240 240 232 /1);
  min-height: 100vh;
  header {
    line-height: 1.5;
    max-height: 100vh;
    .logo {
      font-size: 2em;
      text-shadow: 1px 1px;
      color: rgb(34, 33, 33);
    }
    .navigation {
      .navigation-item {
        color: rgb(114 100 92 / 1);
      }
      .navigation-item:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
