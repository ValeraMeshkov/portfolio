<template>
  <div
    id="projects"
    class="section-projects"
  >
    <div class="header">

      <h1 class="title">
        <TextBorder
          text="Some Work"
          :show-border="true"
          :is-title="true"
        />
      </h1>

      <p class="description">
        While most of my signifcant work has been done for employers and is
        not displayed here, here are some
        projects that live in my Github.
      </p>
    </div>

    <div
      class="project"
      v-for="(item, index) in project.projects"
      :key="index"
      :style="{
        border: `1px solid ${app.getActiveColor}`,
        'box-shadow': `-3px 3px 15px ${app.getActiveColor}`
      }"
      @mousemove="activeProject = item.id"
      @mouseleave="activeProject = null"
    >
      <div
        class="img"
        :class="{ 'hide-img': activeProject === item.id }"
      >
        <img
          :src="USE_ASSET(`images/projects/${item.img}.png`)"
          :alt="item.alt"
        />
      </div>

      <div
        class="content"
        :class="{ 'show-content': activeProject === item.id }"
      >
        <div
          class="title"
          :style="{ 'color': app.getActiveColor }"
        >{{ item.name }}</div>

        <div class="description">{{ `( ${item.technologies.join(', ')} )` }}</div>

        <div class="buttons">
          <NuxtLink
            :href="item.linkCode"
            target="_blank"
          >
            <ButtonText text="View Code" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { USE_ASSET } from '~/helpers/helpers'

import { useAppStore } from '~/store/app'
const app = useAppStore()

import { useProjectsStore } from '~/store/projects';
const project = useProjectsStore()

const activeProject = ref<number | null>(null)

</script>  

<style lang="scss" scoped>
.section-projects {
  padding: 100px 20px 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10vw;
  }

  .project {
    position: relative;
    margin: 20px 20px;
    min-width: 320px;
    min-height: 193px;
    width: 40vw;
    height: 23vw;
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--main-bg-color);
    opacity: 0.95;

    .img {
      padding: 20px;
      position: absolute;
      opacity: 1;
      transition: opacity 2s;

      img {
        border-radius: 10px;
        object-fit: cover;
        height: auto;
        width: 100%;
        z-index: 100;
      }
    }

    .hide-img {
      transition: opacity 2s;
      opacity: 0.2;
    }

    .content {
      padding: 20px;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 2s;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .description {
        margin-bottom: 70px;
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        height: 50px;
        position: absolute;
        right: 20px;
        bottom: 20px;
        left: 20px;
      }
    }

    .show-content {
      transition: opacity 2s;
      opacity: 0.95;
    }
  }

  .title {
    width: 100%;
    text-align: center;
    font-size: clamp(24px, 3rem, 48px)
  }

  .description {
    text-align: center;
    margin: 10px 0;
    font-size: clamp(16px, 2rem, 24px);
  }
}
</style>