/**
 * Site configuration — update MAILCHIMP_URL when your signup page is ready.
 *
 * For beauty expo mode:
 *   1. Set SHOW_EVENT_NOTE to true
 *   2. Set EVENT_NAME to the event name
 */
const SITE_CONFIG = {
  mailchimpUrl: null,
  showEventNote: false,
  eventName: "Jamaica International Beauty Expo",
};

(function applyConfig() {
  const mailchimpLinks = document.querySelectorAll("[data-mailchimp]");
  const note = document.getElementById("mailchimp-note");
  const eventNote = document.getElementById("event-note");
  const eventNameEl = document.getElementById("event-name");

  if (SITE_CONFIG.mailchimpUrl) {
    mailchimpLinks.forEach(function (link) {
      link.href = SITE_CONFIG.mailchimpUrl;
      link.removeAttribute("aria-disabled");
      link.classList.remove("btn--pending");
      if (link.id === "mailchimp-btn-primary" || link.id === "mailchimp-btn-secondary") {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
    if (note) note.hidden = true;
  } else {
    mailchimpLinks.forEach(function (link) {
      link.href = "#";
      link.setAttribute("aria-disabled", "true");
      if (link.classList.contains("btn")) {
        link.classList.add("btn--pending");
      }
    });
    if (note) note.hidden = false;
  }

  if (SITE_CONFIG.showEventNote && eventNote) {
    eventNote.classList.remove("is-hidden");
  }

  if (eventNameEl && SITE_CONFIG.eventName) {
    eventNameEl.textContent = SITE_CONFIG.eventName;
  }
})();
