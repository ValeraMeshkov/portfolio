<template>
  <div
    id="about"
    class="section-about"
  >
    <img
      src="@/assets/images/brain.png"
      class="brain"
      alt="Right and left brain illustration"
    />

    <div class="block">
      <h1>
        <TextBorder
          text="About Me"
          :show-border="true"
          :is-title="true"
        />
      </h1>

      <p class="description">
        In the first 5 years of my career as a
        <TextAccent text="Frontend Engineer" />,
        I have had the great pleasure of significantly contributing to the front-end of over
        15 websites including marketing & e-commerce platforms.
        <br />
        <TextAccent text="Frontend development" />
        satisfies the tug of war between the left & right sides of my brain. It has truly become a
        <TextAccent text="passion" /> of mine to solve problems with
        <TextAccent text="code" /> and create a work of
        <TextAccent text="art" /> at the same time!
      </p>

      <h1 class="title">
        <TextBorder
          text="Skills"
          :show-border="true"
          :is-title="true"
        />
      </h1>

      <p class="description">
        The main technologies that I
        <TextAccent text="used" /> while working on projects:
      </p>

      <div class="skills">
        <div
          v-for="skill, index in skillsIcons"
          :key="index"
          class="skill"
        >
          <ImageBorderText
            :img="`images/skills/${skill.name}.png`"
            :text="skill.title"
          />
        </div>
      </div>

      <NuxtLink
        class="button"
        to="#experience"
      >
        <ButtonText text="See Experience" />
      </NuxtLink>
    </div>
  </div>
</template>


<script setup lang="ts">
import { skillsIcons } from "~/constants/constants"

import { useAppStore } from '~/store/app'
const app = useAppStore()
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
    font-size: clamp(24px, 3rem, 48px)
  }

  .description {
    text-align: center;
    margin-top: 10px;
    font-size: clamp(16px, 2rem, 24px)
  }

  .button {
    display: block;
    margin-top: 25px;
    width: fit-content;
  }
}
</style>