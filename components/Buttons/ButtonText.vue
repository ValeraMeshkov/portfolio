<template>
  <div
    class="button"
    :style="{
      color: app.getActiveColor,
      border: `2px solid ${app.getActiveColor}`,
      'box-shadow': `-2px 2px 15px ${app.getActiveColor}`,
    }"
    @click="emit('clickButton')"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/app'
const app = useAppStore()

const props = defineProps<{
  text: string;
}>();

const emit = defineEmits<{
  (e: "clickButton"): void;
}>();
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  cursor: pointer;
  z-index: 10;
  border-radius: 10px;
  padding: 10px 20px;
  background: var(--main-bg-color);
  width: fit-content;
  font-weight: 600;
  font-size: clamp(16px, 1.5rem, 24px);

  &:hover {
    opacity: 0.8;
  }
}
</style>
