<template>
  <div
    @mousemove="isActive = true"
    @mouseleave="isActive = false"
    class="image-border"
  >
    <div class="img">
      <img :src="USE_ASSET(img)" />
    </div>

    <div
      class="border"
      :class="{ 'border-active': isActive }"
    >
      <TextAccent :text="text" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { USE_ASSET } from '~/helpers/helpers'

import { useAppStore } from '~/store/app'
const app = useAppStore()

const isActive = ref<boolean>(false);

const props = defineProps<{
  img: string;
  text: string;
  showBorder?: boolean;
  isTitle?: boolean;
}>();

</script>

<style lang="scss" scoped>
.image-border {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-right: 10px;
  width: 100%;
  height: 100%;

  .img {
    width: 100%;
    height: 100%;
    padding: 1vw;

    img {
      border-radius: 10px;
      max-height: 100%;
    }
  }

  .border {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3px;
    background-color: transparent;
    transition: opacity 0.3s, font-size 0.3s;
    margin-top: 5px;
    font-size: 0px;
    opacity: 0;
  }

  .border-active {
    opacity: 1;
    font-size: 2rem;
  }
}
</style>
