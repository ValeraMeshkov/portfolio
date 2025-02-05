<template>
  <div>
    <Hero />
    <About />
    <Experience />
    <Projects />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Hero from "~/pages/main/Hero.vue";
import About from "~/pages/main/About.vue";
import Experience from "~/pages/main/Experience.vue";
import Projects from "~/pages/main/Projects.vue";

useHead({
  title: "Valery Meshkov - Frontend Developer",
  meta: [{ name: "description", content: "Frontend Developer" }],
  link: [{ rel: "icon", type: "image/png", href: "favicon.ico" }],
});
</script>


<style lang="scss" scoped>
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.language-switcher button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: currentColor;
}

.language-switcher button:hover {
  opacity: 0.8;
}
</style>