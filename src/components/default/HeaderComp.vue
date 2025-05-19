<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Button from "./Buttons.vue"
import { RouterLink } from 'vue-router'
import HamburgerMenu from './HamburgerMenu.vue'

const route = useRoute()
const isMenuOpen = ref(false)

const links = [
  { to: '/overworld', label: 'Overworld' },
  { to: '/nether', label: 'Nether' },
  { to: '/end', label: 'The end' },
  { to: '/', label: 'Home' },
  { to: '/cart', label: 'Carrinho' },]


function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <router-link to="/" class="logo">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
    </router-link>

    <div class="buttons" :class="{ open: isMenuOpen }">
      <template v-for="link in links" :key="link.to">
        <RouterLink v-if="link.to !== route.path" :to="link.to" class="link" @click="toggleMenu">
          <Button :text="link.label" />
        </RouterLink>
      </template>
    </div>

    <HamburgerMenu :toggle="toggleMenu" :open="isMenuOpen" />
  </header>
</template>


<style>
@import "../../assets/scss/default/_header.scss";
</style>
