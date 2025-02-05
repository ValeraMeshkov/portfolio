<template>
  <header
    class="header"
    :style="{
      'box-shadow': `5px -5px 15px ${app.getActiveColor}`,
    }"
  >
    <NuxtLink to="/" v-if="!showMobileMenu">
      <ButtonAnimation />
    </NuxtLink>

    <div class="nav">
      <NuxtLink v-if="!showMobileMenu" to="#about" class="link">
        <TextBorder :text="t('header.about')" />
      </NuxtLink>

      <NuxtLink v-if="!showMobileMenu" to="#experience" class="link">
        <TextBorder :text="t('header.experience')" />
      </NuxtLink>

      <NuxtLink v-if="!showMobileMenu" to="#projects" class="link">
        <TextBorder :text="t('header.projects')" />
      </NuxtLink>

      <NuxtLink v-if="showMobileMenu" to="#about" class="link">
        <ButtonIcon icon-type="fas" icon-name="user" />
      </NuxtLink>

      <NuxtLink v-if="showMobileMenu" to="#experience" class="link">
        <ButtonIcon icon-type="fas" icon-name="list" />
      </NuxtLink>

      <NuxtLink v-if="showMobileMenu" to="#projects" class="link">
        <ButtonIcon icon-type="fab" icon-name="stack-overflow" />
      </NuxtLink>

      <NuxtLink :href="MY_TELEGRAM" target="_blank" class="link">
        <ButtonIcon icon-type="fab" icon-name="telegram" :scale="1.5" />
      </NuxtLink>

      <NuxtLink :href="MY_LINKEDIN" target="_blank" class="link">
        <ButtonIcon icon-type="fab" icon-name="linkedin-in" />
      </NuxtLink>

      <NuxtLink
        v-if="!showMobileMenu"
        :href="MY_GITHUB"
        target="_blank"
        class="link"
      >
        <ButtonIcon icon-type="fab" icon-name="github" :scale="1.5" />
      </NuxtLink>

      <div
        v-if="!showMobileMenu"
        class="vLine"
        :style="{
          borderLeft: `1px solid ${app.getActiveColor}`,
          'box-shadow': `-2px 2px 15px ${app.getActiveColor}`,
        }"
      ></div>

      <div
        v-if="currentLocale === 'ru'"
        class="lang"
        @click="switchLanguage('en')"
      >
        <ButtonIcon text="RU" :scale="1.5" />
      </div>

      <div v-else class="lang" @click="switchLanguage('ru')">
        <ButtonIcon text="EN" :scale="1.5" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import { useAppStore } from "~/store/app";

import { MY_LINKEDIN, MY_GITHUB, MY_TELEGRAM } from "~/constants/constants";

const { t, locale } = useI18n();
const app = useAppStore();

const props = defineProps<{
  showMobileMenu: boolean;
}>();

const switchLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem("userLocale", lang);
};

const currentLocale = computed(() => locale.value);
const availableLocales = computed(() => {
  return [
    { code: "en", name: "EN" },
    { code: "ru", name: "RU" },
  ];
});
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

  .vLine {
    width: 1px;
    height: 50px;
    margin: 0 20px;
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
