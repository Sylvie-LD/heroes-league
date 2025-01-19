export const message = {
  /**
   * Fonction pour afficher (créer) un message
   *
   * @param {String} text Le texte à afficher
   * @param {String} type Impacte la couleur du message (info, success, warning, error)
   * @param {Number} duration La durée de vie du message en millisecondes (7 secondes par défaut)
   */
  show: function (text, type = "info", duration = 7000) {
    const $message = document.createElement("div");
    $message.classList.add("message", "message--" + type);
    $message.textContent = text;

    document.getElementById("message-zone").append($message);

    $message.addEventListener("click", () => message.hide($message));

    setTimeout(() => message.hide($message), duration);
  },

  /**
   * Fonction pour cacher (supprimer) un message
   *
   * @param {HTMLElement} $messageToDelete L'élément du DOM (le message) qu'on veut supprimer
   */
  hide: function ($messageToDelete) {
    $messageToDelete.remove();
  },
};
