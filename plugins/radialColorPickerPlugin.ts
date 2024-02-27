import { Plugin } from 'vue';
import RadialColorPicker from '@radial-color-picker/vue-color-picker';

const radialColorPickerPlugin: Plugin = {
  install: (app) => {
    app.component('RadialColorPicker', RadialColorPicker);
  }
};

export default radialColorPickerPlugin;
