<template>
  <div id="about" class="section-about">
    <img
      src="@/assets/images/brain.png"
      class="brain"
      alt="Right and left brain illustration"
    />

    <div class="block">
      <h1>
        <TextBorder
          :text="t('about.aboutMe')"
          :show-border="true"
          :is-title="true"
        />
      </h1>

      <p class="description">
        <TextAccent :text="t('about.text1')" />
        <br />
        <TextAccent :text="t('about.text2')" />
      </p>

      <h1 class="title">
        <TextBorder
          :text="t('about.skills')"
          :show-border="true"
          :is-title="true"
        />
      </h1>

      <p class="description">
        <TextAccent :text="t('about.skillsDescription')" />
      </p>

      <div class="skills">
        <div v-for="(skill, index) in skillsIcons" :key="index" class="skill">
          <ImageBorderText
            :img="`images/skills/${skill.name}.png`"
            :text="skill.title"
          />
        </div>
      </div>

      <NuxtLink class="button" to="#experience">
        <ButtonText :text="t('about.experience')" />
      </NuxtLink>
    </div>
  </div>
</template>


<script setup lang="ts">
import { skillsIcons } from "~/constants/constants";
import { useAppStore } from "~/store/app";
import { useI18n } from "vue-i18n";

const app = useAppStore();
const { t } = useI18n();
</script>  

<style lang="scss" scoped>
.section-about {
  padding: 100px 20px 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .brain {
    width: calc(50vw - 20px);
    min-width: 400px;
  }

  .block {
    width: calc(50vw - 20px);

    @media screen and (max-width: 850px) {
      width: 100%;
    }

    .description {
      text-align: left;
    }

    .skills {
      display: flex;
      margin-top: 15px;
      flex-wrap: wrap;

      .skill {
        min-width: 40px;
        min-height: 40px;
        width: 7vw;
        height: 7vw;
      }
    }
  }

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
    margin-top: 25px;
    width: fit-content;
  }
}
</style>