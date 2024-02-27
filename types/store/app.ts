export interface IMouseCoordinates {
  x: number;
  y: number;
}

export interface ISettings {
  activeColor: {
    hue: number,
    saturation: number,
    luminosity: number,
    alpha: number,
    auto: boolean
  },
  trail: {
    cursor: string,
    size: number
  },
}

export interface IStoreApp {
  mouseCoordinates: IMouseCoordinates;
  settings: ISettings;
}