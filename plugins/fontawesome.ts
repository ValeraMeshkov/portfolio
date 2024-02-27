import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faTelegram, faLinkedinIn, faGripfire, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faArrowsRotate, faUser, faList } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(
  faGithub,
  faTelegram,
  faLinkedinIn,
  faXmark,
  faGripfire,
  faArrowsRotate,
  faUser,
  faList,
  faStackOverflow
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
