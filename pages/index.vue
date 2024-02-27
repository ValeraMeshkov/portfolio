<template>
  <div>
    <Hero />
    <About />
    <Experience />
    <Projects />
  </div>
</template>

<script setup lang="ts">
import Hero from '~/pages/main/Hero.vue'
import About from '~/pages/main/About.vue'
import Experience from '~/pages/main/Experience.vue'
import Projects from '~/pages/main/Projects.vue'

useHead({
  title: "Valery Meshkov - Frontend Developer",
  meta: [{ name: "description", content: "Frontend Developer" }],
});
</script>

