<template>
  <div
    class="button-icon"
    :style="{
      color: isGrey ? 'grey' : app.getActiveColor,
      border: `1px solid ${app.getActiveColor}`,
      'box-shadow': `-2px 2px 15px ${app.getActiveColor}`,
      width: size ? `${size}px` : '50px',
      height: size ? `${size}px` : '50px',
    }"
    @click="emit('clickButton')"
  >
    <div class="text" v-if="text">{{ text }}</div>

    <img v-else-if="src" :src="USE_ASSET(src)" :alt="alt" />

    <FontAwesomeIcon
      v-else
      :style="{
        transform: scale ? `scale(${scale})` : 1,
      }"
      :icon="[props.iconType, props.iconName]"
    />
  </div>
</template>

<script setup lang="ts">
import { USE_ASSET } from "~/helpers/helpers";

import { useAppStore } from "~/store/app";
const app = useAppStore();

const props = defineProps<{
  iconType?: string;
  iconName?: string;
  src?: string;
  alt?: string;
  size?: number;
  scale?: number;
  isGrey?: boolean;
  text?: string;
}>();

const emit = defineEmits<{
  (e: "clickButton"): void;
}>();
</script>

<style lang="scss" scoped>
.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  padding: 10px;
  background: var(--main-bg-color);

  &:hover {
    opacity: 0.8;
  }

  .text {
    font-size: 20px;
    font-weight: 600;
  }

  img {
    border-radius: 50%;
    transform: scale(1.2);
  }

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
