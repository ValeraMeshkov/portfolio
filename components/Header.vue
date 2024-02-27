<template>
  <header
    class="header"
    :style="{
      'box-shadow': `5px -5px 15px ${app.getActiveColor}`
    }"
  >
    <NuxtLink
      to="/"
      v-if="!showMobileMenu"
    >
      <ButtonAnimation />
    </NuxtLink>

    <div class="nav">
      <NuxtLink
        v-if="!showMobileMenu"
        to="#about"
        class="link"
      >
        <TextBorder text="About" />
      </NuxtLink>

      <NuxtLink
        v-if="!showMobileMenu"
        to="#experience"
        class="link"
      >
        <TextBorder text="Experience" />
      </NuxtLink>

      <NuxtLink
        v-if="!showMobileMenu"
        to="#projects"
        class="link"
      >
        <TextBorder text="My projects" />
      </NuxtLink>


      <NuxtLink
        v-if="showMobileMenu"
        to="#about"
        class="link"
      >
        <ButtonIcon
          icon-type="fas"
          icon-name="user"
        />
      </NuxtLink>

      <NuxtLink
        v-if="showMobileMenu"
        to="#experience"
        class="link"
      >
        <ButtonIcon
          icon-type="fas"
          icon-name="list"
        />
      </NuxtLink>

      <NuxtLink
        v-if="showMobileMenu"
        to="#projects"
        class="link"
      >
        <ButtonIcon
          icon-type="fab"
          icon-name="stack-overflow"
        />
      </NuxtLink>

      <NuxtLink
        :href="MY_GITHUB"
        target="_blank"
        class="link"
      >
        <ButtonIcon
          icon-type="fab"
          icon-name="github"
          :scale="1.5"
        />
      </NuxtLink>

      <NuxtLink
        :href="MY_LINKEDIN"
        target="_blank"
        class="link"
      >
        <ButtonIcon
          icon-type="fab"
          icon-name="linkedin-in"
        />
      </NuxtLink>

      <NuxtLink
        :href="MY_TELEGRAM"
        target="_blank"
        class="link"
      >
        <ButtonIcon
          icon-type="fab"
          icon-name="telegram"
          :scale="1.5"
        />
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">

import { MY_LINKEDIN, MY_GITHUB, MY_TELEGRAM } from '~/constants/constants';

import { useAppStore } from '~/store/app'
const app = useAppStore()


const props = defineProps<{
  showMobileMenu: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "open"): void;
}>();
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 100px;
  z-index: 100;
  background: var(--main-bg-color);
  opacity: 0.95;

  .nav {
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
      width: 100%;
      justify-content: space-between;
    }

    .link {
      margin-left: 10px;

      @media (max-width: 600px) {
        margin-left: 5px;
      }
    }
  }

  .logo {
    width: 75px;
    height: 75px;
    background-color: var(--main-bg-color);
    border-radius: 50%;

    @media (max-width: 600px) {
      display: none;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
