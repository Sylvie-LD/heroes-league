// console.log(message);
// console.log(typeof message.show); // Devrait afficher "function"
// message.show("Test du message", "info");
import { message } from "./message.js";

export const heroes = {
  init: function () {
    const buttonMenuEl = document.querySelector("#menu-toggler");
    buttonMenuEl.addEventListener("click", heroes.displayMenu);

    document
      .querySelector(".hero-zone__form-sauvezMoi")
      .addEventListener("submit", heroes.handleSubmit);

    heroes.handleDisplayTestimonials();
  },

  //  appel des autres fonctions
  // Afficher le menu au clic pour l'affichage mobile
  displayMenu: function (event) {
    console.log("Toggle menu");
    const headerEl = document.querySelector(".header-hero__menu");
    headerEl.classList.toggle("banner--open");

    const buttonEl = document.querySelector(".header-hero__button");
    buttonEl.classList.toggle("banner--open");
  },

  // soumettre un formulaire
  handleSubmit: function (event) {
    event.preventDefault();
    const form = event.currentTarget;
    console.log("Formulaire soumis :", form);
    const name = form.querySelector("#name").value.trim();
    const firstname = form.querySelector("#firstname").value.trim();
    const email = form.querySelector("#email").value.trim();
    const service = form.querySelector("#service").value.trim();
    // $ devant message pour ne pas confondre avec le module message à importer
    const $message = form.querySelector("#message").value.trim();

    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Service :", service);
    console.log("Message :", $message);

    if (!name || !email || !service || !firstname) {
      console.log("pas ok");
      // alert("pas ok");
      message.show("Veuillez remplir tous les champs obligatoires", "info");
      return;
    }
    console.log(" ok");
    // alert(" ok");
    // lysevie@gmail.com
    message.show(
      `Merci, ${firstname} !\nNous avons bien reçu votre demande pour le service ${service}`,
      "success"
    );
    event.currentTarget.reset();
  },

  handleDisplayTestimonials: function (event) {
    const $testimonials = document.querySelectorAll(
      ".hero-zone__temoignages-zone"
    );
    console.log($testimonials);
    $testimonials.forEach((testimonial) => {
      testimonial.addEventListener("click", (event) => {
        console.log("clic sur un temoignage");
        $testimonials.forEach((testimonial) =>
          testimonial.classList.remove("selected")
        );
        event.currentTarget.classList.add("selected");

        // Récupère l'image et les textes cachés
        const title = testimonial.querySelector(
          ".hero-zone__temoignages-title"
        );
        const note = testimonial.querySelector(".hero-zone__temoignages-note");

        const img = testimonial.querySelector(".hero-zone__picture");

        // Alterne la classe "hidden" pour afficher/masquer
        title.classList.toggle("hidden");
        note.classList.toggle("hidden");
        img.classList.toggle("hidden");
      });
    });
  },
};
