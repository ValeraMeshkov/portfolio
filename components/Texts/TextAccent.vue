<template>
  <span
    class="accent"
    :style="{ 'color': getActiveColor }"
  >
    {{ text }}
  </span>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/app'
const app = useAppStore()

const getActiveColor = computed(() => app.getActiveColor)

const props = defineProps<{
  text: string
}>();
</script>