<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useRoute } from "vue-router";

import Button from "../components/home/HomeButtons.vue";
const route = useRoute();

const links = [
  { to: "/overworld", label: "Overworld" },
  { to: "/nether", label: "Nether" },
  { to: "/end", label: "The end" },
];
</script>

<template>
  <main>
    <div class="home-container">
      <div class="welcome">
        <img src="../assets/images/minecraft.png" alt="" />
        <div class="text">
          <h1>A sua loja preferida de personagens do Minecraft!</h1>
        </div>
      </div>
      <div class="buttons-container">
        <div class="buttons" v-for="link in links" :key="link.to">
          <RouterLink
            v-if="link.to !== route.path"
            :to="link.to"
            class="link"
          >
            <Button :text="link.label" />
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@import "../assets/scss/home/_home.scss";
</style>
