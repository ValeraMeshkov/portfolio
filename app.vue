<template>
  <div class="main">
    <TheHeader :show-mobile-menu="windowWidth < 600" />

    <div
      class="content"
      id="content"
    >
      <NuxtPage />
    </div>

    <TheFooter />

    <ModalSettings
      v-if="isModalSettings"
      @close="closeModalSettings"
    />

    <div
      v-else
      class="settings"
    >
      <ButtonIcon
        icon-type="fab"
        icon-name="gripfire"
        :size="75"
        @clickButton="openModalSettings"
      />
    </div>

    <CanvasMouseMove />
  </div>
</template>

<script setup lang="ts">
import ModalSettings from '~/components/Modals/ModalSettings.vue'

import { useAppStore } from '~/store/app'
const app = useAppStore()

const isModalSettings = ref<boolean>(false);
const closeModalSettings = () => isModalSettings.value = false
const openModalSettings = () => isModalSettings.value = true

const windowWidth = ref<number>(document.documentElement.clientWidth);

onBeforeMount(() => {
  const settings = localStorage.getItem('settings')

  if (settings) {
    app.loadSettings(JSON.parse(settings))
  } else {
    localStorage.setItem('settings', JSON.stringify(app.settings))
  }

  nextTick(() => {
    window.addEventListener("resize", () => {
      windowWidth.value = document.documentElement.clientWidth
    })
  });
});

onMounted(() => {
  window.addEventListener('mousemove', (e: MouseEvent) => {
    app.changeMouseCoordinates(e.clientX, e.clientY)
  });
})

let intervalChangeActiveColor: NodeJS.Timeout | undefined;

if (app.settings.activeColor.auto) {
  changeActiveColor(true)
}

function changeActiveColor(value: boolean): void {
  if (value) {
    intervalChangeActiveColor = setInterval(() => {
      let hue = app.settings.activeColor.hue
      if (hue >= 360) hue = 0
      app.changeActiveColor(hue += 0.25)
    }, 50)
  } else {
    clearInterval(intervalChangeActiveColor)
  }
}

watch(
  () => app.settings.activeColor.auto,
  value => {
    if (value) changeActiveColor(true)
    else changeActiveColor(false)
  }
)
</script>

<style lang="scss" >
.main {
  .settings {
    position: fixed;
    right: 20px;
    top: 120px;
    z-index: 1000;
  }
}
</style>