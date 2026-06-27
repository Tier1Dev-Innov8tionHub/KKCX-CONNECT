/**
 * Site configuration
 *
 * Mailchimp newsletter signup (pick one):
 *   - mailchimpConnectedSites: true — popup handled by the mcjs script in index.html
 *   - mailchimpUrl: "https://..." — direct link to a hosted signup page
 *
 * For beauty expo mode:
 *   1. Set SHOW_EVENT_NOTE to true
 *   2. Set EVENT_NAME to the event name
 */
const SITE_CONFIG = {
  mailchimpConnectedSites: true,
  mailchimpUrl: "https://mailchi.mp/dd7799765735/kemoy-kayan-join-the-list",
  showEventNote: false,
  eventName: "Jamaica International Beauty Expo",
};

(function applyConfig() {
  const mailchimpLinks = document.querySelectorAll("[data-mailchimp]");
  const note = document.getElementById("mailchimp-note");
  const eventNote = document.getElementById("event-note");
  const eventNameEl = document.getElementById("event-name");
  const mailchimpReady =
    SITE_CONFIG.mailchimpConnectedSites || SITE_CONFIG.mailchimpUrl;

  if (mailchimpReady) {
    mailchimpLinks.forEach(function (link) {
      if (SITE_CONFIG.mailchimpUrl) {
        link.href = SITE_CONFIG.mailchimpUrl;
        if (
          link.id === "mailchimp-btn-primary" ||
          link.id === "mailchimp-btn-secondary"
        ) {
          link.setAttribute("target", "_blank");
          link.setAttribute("rel", "noopener noreferrer");
        }
      } else {
        link.href = "#";
        link.removeAttribute("target");
        link.removeAttribute("rel");
      }
      link.removeAttribute("aria-disabled");
      link.classList.remove("btn--pending");
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
