<template>
  <span class="pointer-events-auto" v-html="processedText"></span>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app";
const app = useAppStore();

const getActiveColor = computed(() => app.getActiveColor);

const props = defineProps<{
  text: string;
}>();

const processedText = computed(() => {
  return props.text.replace(
    /<span class='accent'>(.*?)<\/span>/g,
    `<span class="accent" style="color: ${getActiveColor.value}">$1</span>`
  );
});
</script>


<style lang="scss" scoped>
.pointer-events-auto {
  pointer-events: none;
}
</style>