<template>
  <div class="container">
    <header>
      <RouterLink class="logo" :to="routes[0].path">Khoang Vo</RouterLink>
      <nav class="navigation">
        <RouterLink
          v-for="item in routes"
          :key="item.name"
          :to="item.path"
          class="navigation-item"
          >{{ item.name }}</RouterLink
        >
      </nav>
    </header>
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
  header {
    line-height: 1.5;
    max-height: 100vh;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0.1em 5em;
    border-bottom: 1px solid;
    .logo {
      display: block;
      font-weight: 900;
      font-size: 2em;
      font-style: italic;
      text-shadow: 1px 1px;
      color: rgb(34, 33, 33);
      cursor: pointer;
      text-decoration: none;
    }
    .navigation {
      display: flex;
      gap: 1em;
      .navigation-item {
        text-decoration: none;
        font-weight: normal;
        color: rgb(114 100 92 / 1);
      }
      .navigation-item:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
