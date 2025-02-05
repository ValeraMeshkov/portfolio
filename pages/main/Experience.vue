<template>
  <div id="experience" class="section-experience">
    <h1 class="title">
      <TextBorder
        :text="t('experience.experience')"
        :show-border="true"
        :is-title="true"
      />
    </h1>

    <div class="block">
      <h1 class="title">
        <NuxtLink :href="COMPANY_SENDNOW" target="_blank">
          <ButtonIcon
            src="images/experience/sendnow.png"
            alt="sendnow"
            :size="70"
          />
        </NuxtLink>

        <TextAccent class="text" :text="t('experience.sendnow.name')" />

        <p class="description">{{ t("experience.sendnow.time") }}</p>
      </h1>

      <p class="description">
        <span>{{ t("experience.sendnow.title1") }}</span>

        <br />

        <TextAccent :text="t('experience.sendnow.text1')" /> -

        <NuxtLink
          :href="COMPANY_SENDNOW"
          target="_blank"
          class="link-wrapper pointer-events-auto"
        >
          <TextBorder
            class="pointer-events-auto"
            :text="t('experience.sendnow.linkMain')"
            :accent="true"
          />
        </NuxtLink>

        <span>{{ t("experience.sendnow.text2") }}</span>

        <br />

        <TextAccent :text="t('experience.sendnow.text3')" /> -

        <NuxtLink :href="COMPANY_SENDNOW_PLATFORM" target="_blank">
          <TextBorder :text="t('experience.sendnow.linkApp')" :accent="true" />
        </NuxtLink>

        <TextAccent class="text" :text="t('experience.sendnow.text4')" />

        <TextAccent :text="t('experience.sendnow.technologies')" />
      </p>
    </div>

    <div class="block">
      <h1 class="title">
        <NuxtLink :href="COMPANY_CITRONUS" target="_blank">
          <ButtonIcon
            src="images/experience/citronus.png"
            alt="citronus"
            :size="70"
          />
        </NuxtLink>

        <TextAccent class="text" :text="t('experience.citronus.name')" />

        <p class="description">{{ t("experience.citronus.time") }}</p>
      </h1>

      <p class="description">
        <span>{{ t("experience.citronus.title1") }}</span>

        <NuxtLink :href="COMPANY_CITRONUS" target="_blank">
          <TextBorder
            :text="t('experience.citronus.linkMain')"
            :accent="true"
          />
        </NuxtLink>

        <TextAccent class="text" :text="t('experience.citronus.text1')" />

        <TextAccent
          class="text"
          :text="t('experience.citronus.technologies')"
        />
      </p>
    </div>

    <div class="block">
      <h1 class="title">
        <NuxtLink :href="COMPANY_LETIT" target="_blank">
          <ButtonIcon
            src="images/experience/letit.png"
            alt="letit"
            :size="70"
          />
        </NuxtLink>

        <TextAccent class="text" :text="t('experience.letit.name')" />

        <p class="description">{{ t("experience.letit.time") }}</p>
      </h1>

      <p class="description">
        <span>{{ t("experience.letit.title1") }}</span>

        <NuxtLink :href="COMPANY_LETIT_PROJECT" target="_blank">
          <TextBorder :text="t('experience.letit.linkMain')" :accent="true" />
        </NuxtLink>

        <TextAccent class="text" :text="t('experience.letit.text1')" />

        <TextAccent
          class="text"
          :text="t('experience.citronus.technologies')"
        />
      </p>
    </div>

    <div class="block">
      <h1 class="title">
        <NuxtLink :href="COMPANY_BSL" target="_blank">
          <ButtonIcon src="images/experience/bsl.png" alt="bsl" :size="70" />
        </NuxtLink>

        <TextAccent class="text" :text="t('experience.bsl.name')" />

        <p class="description">{{ t("experience.bsl.time") }}</p>
      </h1>

      <p class="description">
        <TextAccent class="text" :text="t('experience.bsl.text1')" />
      </p>
    </div>

    <div class="block">
      <h1 class="title">
        <NuxtLink :href="COMPANY_VERV" target="_blank">
          <ButtonIcon src="images/experience/verv.png" alt="verv" :size="70" />
        </NuxtLink>

        <TextAccent class="text" :text="t('experience.verv.name')" />

        <p class="description">{{ t("experience.verv.time") }}</p>
      </h1>

      <p class="description">
        <TextAccent class="text" :text="t('experience.verv.text1')" />
      </p>
    </div>

    <NuxtLink class="button" to="#projects">
      <ButtonText :text="t('experience.projects')" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import {
  COMPANY_VERV,
  COMPANY_BSL,
  COMPANY_LETIT,
  COMPANY_LETIT_PROJECT,
  COMPANY_CITRONUS,
  COMPANY_SENDNOW,
  COMPANY_SENDNOW_PLATFORM,
} from "~/constants/constants";

const { t } = useI18n();
</script>  

<style lang="scss" scoped>
.section-experience {
  padding: 100px 20px 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    width: fit-content;
    margin-top: 0px;
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
    margin-top: 0;
    width: fit-content;
  }

  .block {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 40px !important;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;

      .text {
        margin: 0 20px;
      }

      .description {
        margin-top: 0;
      }
    }

    .description {
      text-align: left;
    }
  }
}
</style>