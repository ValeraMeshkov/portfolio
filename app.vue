<template>
  <div class="main">
    <Header :show-mobile-menu="windowWidth < 600" />

    <div
      class="content"
      id="content"
    >
      <NuxtPage />
    </div>

    <Footer />

    <ModalSettings
      v-if="isModalSettings"
      @close="closeModalSettings"
    />

    <div
      v-else
      class="settings"
    >
      <div
        class="pulse"
        :style="{ 'border': `2px solid ${app.getActiveColor}` }"
      ></div>

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

  window.addEventListener('beforeunload', handleBeforeUnload);
})

function handleBeforeUnload() {
  app.changeSettings()
}

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

    .pulse {
      position: absolute;
      opacity: 0;
      left: -10px;
      right: -10px;
      top: -10px;
      bottom: -10px;
      border-radius: 50%;
      animation: pulse 2.5s linear infinite;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.5);
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      100% {
        transform: scale(1.2);
        opacity: 0;
      }
    }
  }
}
</style>
