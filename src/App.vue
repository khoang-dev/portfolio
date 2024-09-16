<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const TAB_LIST = Object.freeze([
  { icon: 'mdi-account-tie', name: 'About', path: '/' },
  { icon: 'mdi-book-edit', name: 'Blog', path: '/blog' },
  { icon: 'mdi-head-lightbulb', name: 'Project', path: '/project' },
  { icon: 'mdi-book-multiple', name: 'Reading list', path: '/reading-list' },
  { icon: 'mdi-contacts', name: 'Contact', path: '/contact' }
])
const tab = ref(TAB_LIST[0].name)
const router = useRouter()
</script>

<template>
  <div class="container">
    <header class="header">
      <a class="logo" @click="router.push(TAB_LIST[0].path)">Khoang Vo</a>
      <v-tabs slider-color="teal-lighten-3" show-arrows v-model="tab">
        <v-tab
          v-for="tabItem in TAB_LIST"
          :key="tabItem.name"
          :text="tabItem.name"
          :value="tabItem.name"
          :class="['text-none', tab === tabItem.name && 'tab-active']"
          :prepend-icon="tabItem.icon"
          @click="router.push(tabItem.path)"
        >
        </v-tab>
      </v-tabs>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: rgb(240 240 232 /1);
  // background-color: rgb(241, 241, 237);
  header {
    line-height: 1.5;
    max-height: 100vh;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0.1em 5em;
    border-bottom: 1px solid;
    text-shadow: 1px 1px;
    color: rgb(66, 66, 66);
    .logo {
      display: block;
      font-weight: 900;
      font-size: 2em;
      font-style: italic;
      color: rgb(6, 6, 85);
      cursor: pointer;
    }
    .tab-active {
      color: rgb(6, 6, 85);
    }
  }
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
