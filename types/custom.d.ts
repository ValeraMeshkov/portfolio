declare module '*.svg' {
  import { DefineComponent } from 'vue';
  const src: string;
  const component: DefineComponent<{}, {}, any>;
  export { src, component };
}

declare module '*.jpg' {
  const src: string;
  export default src;
}