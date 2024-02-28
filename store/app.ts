import { defineStore } from "pinia";
import { ISettings, IStoreApp } from "~/types/store/app"

export const useAppStore = defineStore({
  id: "app-store",
  state: () => {
    return <IStoreApp>{
      mouseCoordinates: {
        x: 0,
        y: 0
      },
      settings: {
        activeColor: {
          hue: 180,
          saturation: 100,
          luminosity: 50,
          alpha: 1,
          auto: true
        },
        trail: {
          cursor: 'star',
          size: 15
        },
      },
    };
  },
  getters: {
    getActiveColor: (state): string => {
      const h = state.settings.activeColor.hue
      const s = state.settings.activeColor.saturation
      const l = state.settings.activeColor.luminosity
      return `hsl(${h} ${s} ${l})`
    },
  },
  actions: {
    changeMouseCoordinates(x: number, y: number): void {
      this.mouseCoordinates = { x, y }
    },
    changeActiveColor(hue: number): void {
      this.settings.activeColor.hue = hue
    },
    changeActiveColorAuto(value: boolean): void {
      this.settings.activeColor.auto = value
    },
    changeTrailCursor(trail: string): void {
      this.settings.trail.cursor = trail
    },
    changeTrailSize(size: number): void {
      this.settings.trail.size = size
    },
    loadSettings(object: ISettings): void {
      this.settings = { ...object }
    },
    changeSettings(): void {
      localStorage.setItem('settings', JSON.stringify(this.settings))
    }
  }
});
