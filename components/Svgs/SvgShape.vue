<template>
  <svg
    class="svg-shape"
    viewBox="0 0 100 100"
    :style="{ 'fill': color }"
  >
    <g v-if="shape === 'circle'">
      <circle
        cx="50"
        cy="50"
        r="50"
      />
    </g>

    <g v-else-if="shape === 'square'">
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
      />
    </g>
    <g v-else-if="shape === 'triangle'">
      <polygon points="50,0 0,100 100,100" />
    </g>
    <g v-else-if="shape === 'quadrilateral'">
      <polygon points="50,0 0,50 50,100 100,50" />
    </g>
    <g v-else-if="shape === 'star'">
      <polygon
        points="50,1.955 65.587,32.723 100,37.678 75.49,59.202 83.785,97.799 50,75.828 16.215,97.799 24.51,59.202 0,37.678 34.413,32.723"
      />
    </g>
    <g v-else-if="shape === 'bubble'">
      <circle
        cx="50"
        cy="50"
        r="50"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="none"
        stroke-width="5"
        class="inner"
        fill="rgb(13, 24, 33)"
      />
    </g>
    <g
      v-if="shape === 'lock'"
      :style="{ 'transform': 'scale(4.4)' }"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7V7Zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3Zm-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25Z"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  color?: string;
  shape: string;
}>();

</script>

<style lang="scss" scoped>
.svg-shape {
  width: 100%;
  height: 100%;
}
</style>