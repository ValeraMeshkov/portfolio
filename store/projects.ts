import { defineStore } from "pinia";
import { IStoreProject } from "~/types/store/project";

import {
  PROJECT_PORTFOLIO,
  PROJECT_CREATE_CARS,
  PROJECT_REX_STORE,
  PROJECT_ANIMATED_LINES,
  PROJECT_HOTEL_RESERVATION,
  PROJECT_GAME
} from '~/constants/constants';

export const useProjectsStore = defineStore({
  id: "projects-store",
  state: () => {
    return <IStoreProject>{
      projects: [
        {
          id: 1,
          name: "Portfolio",
          img: "portfolio",
          alt: "portfolio",
          linkCode: PROJECT_PORTFOLIO,
          technologies: ["Vue 3", "Nuxt 3", "Pinia", "Typescript", "Canvas", "Sass"]
        },
        {
          id: 2,
          name: "Animate Lines",
          img: "animateLines",
          alt: "Animate Lines",
          linkCode: PROJECT_ANIMATED_LINES,
          technologies: ["Vue 2", "Vuex", "Sass", "Canvas"]
        },
        {
          id: 3,
          name: "Hotel Reservation",
          img: "hotelReservation",
          alt: "Hotel Reservation",
          linkCode: PROJECT_HOTEL_RESERVATION,
          technologies: ["Vue 2", "Sass", "bootstrap"]
        },
        {
          id: 4,
          name: "Game",
          img: "game",
          alt: "Game",
          linkCode: PROJECT_GAME,
          technologies: ["Js", "Css", "Canvas"]
        },
        {
          id: 5,
          name: "Rex store",
          img: "rexStore",
          alt: "Rex store",
          linkCode: PROJECT_REX_STORE,
          technologies: ["Vue 2", "Sass", "Pug"]
        },
        {
          id: 6,
          name: "Create Cars",
          img: "createCars",
          alt: "Create Cars",
          linkCode: PROJECT_CREATE_CARS,
          technologies: ["Vue 2", "Sass", "Json-server", "Pug"]
        }
      ],
    };
  },
});
