<template>
  <div
    v-click-outside="closeModal"
    class="modal-setting"
    :style="{
      border: `1px solid ${getTrailActiveColor}`,
      'box-shadow': `-3px 3px 15px ${getTrailActiveColor}`
    }"
  >
    <div class="color-picker">
      <color-picker
        v-bind="app.settings.activeColor"
        @input="changeColorPicker"
      ></color-picker>

      <div
        class="arrow"
        :style="{ 'transform': `rotate(${app.settings.activeColor.hue}deg)` }"
      >
        <ButtonIcon
          icon-type="fas"
          icon-name="arrows-rotate"
          :size="75"
          :isGrey="!app.settings.activeColor.auto"
          @clickButton="changeActiveColorAuto"
        />
      </div>
    </div>

    <div class="trails">
      <div
        v-for="trail, index in app.trails"
        :key="index"
        @click="changeCursorTrail(trail)"
        class="trail"
        :class="{
          'trail-active': getTrailCursor === trail,
          'lock': trail === 'lock'
        }"
      >
        <SvgShape
          :shape="trail"
          :color="getTrailActiveColor"
        />
      </div>
    </div>

    <div
      class="trail-size"
      v-if="getTrailCursor !== 'lock'"
    >
      <div class="trail-wrapper">
        <div :style="getStylesTrail">
          <SvgShape
            :shape="getTrailCursor"
            :color="getTrailActiveColor"
          />
        </div>
      </div>

      <Slider
        :value="app.settings.trail.size"
        :min="1"
        :max="30"
        @slide="changeSliderSize"
        :style="{
          'background-color': getTrailActiveColor,
          'border-radius': '50px'
        }"
      />
    </div>

    <div
      class="close"
      @click="closeModal"
      :style="{ color: getTrailActiveColor }"
    >
      <FontAwesomeIcon :icon="['fas', 'xmark']" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from '@vueform/slider'
import ColorPicker from '@radial-color-picker/vue-color-picker';

import { useAppStore } from '~/store/app'
const app = useAppStore()

const getTrailActiveColor = computed(() => app.getActiveColor)
const getTrailCursor = computed(() => app.settings.trail.cursor)
const getStylesTrail = computed(() => ({
  color: app.getActiveColor,
  width: `${10 + app.settings.trail.size * 1.5}px`,
  height: `${10 + app.settings.trail.size * 1.5}px`
}))

const changeSliderSize = (value: number) => app.changeTrailSize(value)
const changeColorPicker = (hue: number) => app.changeActiveColor(hue)
const changeActiveColorAuto = () => app.changeActiveColorAuto(!app.settings.activeColor.auto)
const changeCursorTrail = (trail: string) => app.changeTrailCursor(trail)

const emit = defineEmits(['close'])
const closeModal = () => emit('close')
</script>
<style lang="scss">
@import '@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css';
@import '@vueform/slider/themes/default.css';

.slider-horizontal {
  width: 100px;

  .slider-tooltip {
    display: none;

  }

  .slider-base {
    background: none;

    .slider-connect {
      background: none;
    }
  }
}

.modal-setting {
  top: 120px;
  right: 20px;
  width: 350px;
  max-width: calc(100vw - 40px);
  position: fixed;
  background: var(--main-bg-color);
  border-radius: 25px;
  z-index: 1000;
  opacity: 0.95;
  padding: 10px 20px;

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 25px;
    height: 25px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .color-picker {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    transform: scale(0.9);

    .arrow {
      position: absolute;
      background: var(--main-bg-color);
    }
  }

  .trails {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 60px;

    .trail {
      opacity: 0.4;

      svg {
        width: 30px;
        height: 30px;
        pointer-events: none;

        :nth-child(2) {
          color: var(--main-bg-color);
        }
      }

      &:hover {
        opacity: 1;
        cursor: pointer;
      }

    }

    .trail-active {
      opacity: 1;
    }

    .lock {
      transform: scale(1.1);
    }
  }

  .trail-size {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    .trail-wrapper {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;

      svg {

        :nth-child(2) {
          color: var(--main-bg-color);
        }
      }
    }
  }
}
</style>
