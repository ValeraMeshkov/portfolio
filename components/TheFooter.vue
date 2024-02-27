<template>
  <footer>
    <div class="text">
      Designed & built by
      <TextAccent text="Valery Meshkov" /> &copy;{{ new Date().getFullYear() }}
    </div>

    <div class="links">
      <NuxtLink
        :href="MY_GITHUB"
        target="_blank"
        class="social-link"
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
        class="social-link"
      >
        <ButtonIcon
          icon-type="fab"
          icon-name="linkedin-in"
        />
      </NuxtLink>

      <NuxtLink
        :href="MY_TELEGRAM"
        target="_blank"
        class="social-link"
      >
        <ButtonIcon
          icon-type="fab"
          icon-name="telegram"
          :scale="1.5"
        />
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MY_LINKEDIN, MY_GITHUB, MY_TELEGRAM } from '~/constants/constants';
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  padding: 18rem 0 4rem;

  .text {
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 2rem;
  }

  .links {
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
}
</style>
