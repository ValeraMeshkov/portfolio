import { defineStore } from "pinia";
import {
  IMouseCoordinates,
  ISettings,
  ISkillsIcon
} from "~/types/StoreApp";

export const useAppStore = defineStore({
  id: "app-store",
  state: () => {
    return {
      mouseCoordinates: <IMouseCoordinates>{
        x: 0,
        y: 0
      },
      settings: <ISettings>{
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
      trails: <string[]>['circle', 'square', 'triangle', 'quadrilateral', 'star', 'bubble', 'lock'],
      skillsIcons: <ISkillsIcon[]>[
        { name: "vue", title: "Vue" },
        { name: "js", title: "JavaScript" },
        { name: "ts", title: "Typescript" },
        { name: "nuxt", title: "Nuxt" },
        { name: "sass", title: "Sass" },
        { name: "node", title: "Node" },
      ]
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
      this.changeSettings(this.settings)
    },
    changeActiveColorAuto(value: boolean): void {
      this.settings.activeColor.auto = value
      this.changeSettings(this.settings)
    },
    changeTrailCursor(trail: string): void {
      this.settings.trail.cursor = trail
      this.changeSettings(this.settings)
    },
    changeTrailSize(size: number): void {
      this.settings.trail.size = size
      this.changeSettings(this.settings)
    },
    loadSettings(object: ISettings): void {
      this.settings = { ...object }
    },
    changeSettings(object: ISettings): void {
      localStorage.setItem('settings', JSON.stringify(object))
    }
  }
});
