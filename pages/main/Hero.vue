<template>
  <div class="section-hero">
    <h1 class="title">
      <TextAccent :text="t('hero.titleName')" />
    </h1>

    <p class="description">
      <TextAccent :text="t('hero.description')" />
    </p>

    <NuxtLink class="button" to="#about">
      <ButtonText :text="t('about.aboutMe')" />
    </NuxtLink>
  </div>
</template>


<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>  

<style lang="scss" scoped>
.section-hero {
  padding: 100px 20px 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    width: fit-content;
    margin-top: 15px;
    text-align: center;
    font-size: clamp(24px, 3rem, 48px);
  }

  .description {
    text-align: center;
    margin-top: 10px;
    font-size: clamp(16px, 2rem, 24px);
  }

  .button {
    display: block;
    margin-top: 10px;
    width: fit-content;
  }
}
</style>