<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    class="logo"
    :style="{
      border: `1px solid ${app.getActiveColor}`,
      'box-shadow': `-2px 2px 15px ${app.getActiveColor}`
    }"
  >
    <text
      x="50%"
      text-anchor="middle"
      y="52%"
      dy="0.3em"
      fill="url(#pattern)"
      font-size="35px"
    >
      VM
    </text>

    <defs>
      <linearGradient
        id="gradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0"
      >
        <stop
          offset="0%"
          style="stop-color: #fff"
        />
        <stop
          offset="25%"
          :style="{ 'stop-color': app.getActiveColor }"
        />
        <stop
          offset="50%"
          :style="{ 'stop-color': app.getActiveColor }"
        />
        <stop
          offset="75%"
          :style="{ 'stop-color': app.getActiveColor }"
        />
        <stop
          offset="100%"
          style="stop-color: #fff"
        />
      </linearGradient>

      <pattern
        id="pattern"
        x="0"
        y="0"
        width="300%"
        height="100%"
        patternUnits="userSpaceOnUse"
      >
        <rect
          x="0"
          y="0"
          width="150%"
          height="100%"
          fill="url(#gradient)"
        >
          <animate
            attributeType="XML"
            attributeName="x"
            from="0"
            to="150%"
            dur="7s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="-149%"
          y="0"
          width="150%"
          height="100%"
          fill="url(#gradient)"
        >
          <animate
            attributeType="XML"
            attributeName="x"
            from="-149%"
            to="0"
            dur="7s"
            repeatCount="indefinite"
          />
        </rect>
      </pattern>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/app'
const app = useAppStore()
</script>