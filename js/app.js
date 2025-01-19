import { heroes } from "./heroes.js";

const app = {
  init: function () {
    heroes.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
