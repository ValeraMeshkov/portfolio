<template>
  <span
    @mousemove="isActive = true"
    @mouseleave="isActive = false"
    class="text-border"
  >
    <TextAccent v-if="accent" :text="text" />

    <span v-else class="text" :class="{ 'text-title': isTitle }">
      {{ text }}
    </span>

    <span
      class="border"
      :class="{ 'border-active': isActive || showBorder }"
      :style="{ 'background-color': app.getActiveColor }"
    >
    </span>
  </span>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app";
const app = useAppStore();

const isActive = ref<boolean>(false);

const props = defineProps<{
  text: string;
  showBorder?: boolean;
  isTitle?: boolean;
  accent?: boolean;
}>();
</script>

<style lang="scss" scoped>
.text-border {
  display: inline-flex;
  flex-direction: column;
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
  width: fit-content;

  .text {
    font-size: clamp(16px, 2rem, 24px);
    color: var(--text-color);
  }

  .text-title {
    font-size: clamp(16px, 3rem, 36px);
  }

  .border {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background-color: transparent;
    transition: width 0.3s, background-color 0.3s;
    margin-top: 5px;
    border-radius: 3px;
  }

  .border-active {
    width: 100%;
  }
}
</style>