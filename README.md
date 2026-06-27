# Kemoy Kayan — Connect Hub

Premium, mobile-first link hub for [connect.kemoykayan.com](https://connect.kemoykayan.com).

## Quick start

Serve locally:

```bash
npx serve .
```

Or open `index.html` via any static file server.

## Mailchimp setup

**Connected Sites popup (current setup):** The Mailchimp `mcjs` script in `index.html` loads the signup popup. In `js/config.js`, keep:

```javascript
mailchimpConnectedSites: true,
```

Configure popup timing and triggers in your Mailchimp audience settings. The mailing list buttons stay active; the script handles the form.

**Hosted signup page (alternative):** Set a direct URL instead:

```javascript
mailchimpConnectedSites: false,
mailchimpUrl: "https://your-mailchimp-url",
```

Both "Join the Mailing List" and "Join the list for updates" will open that URL in a new tab.

## Beauty expo mode

In `js/config.js`:

```javascript
showEventNote: true,
eventName: "Jamaica International Beauty Expo",
```

## Deploy

Static files only — deploy the project root to Vercel, Netlify, Cloudflare Pages, or any static host.

Point `connect.kemoykayan.com` to this deployment.

## Structure

```
index.html          Main page
css/styles.css      Styles (matches diaspora palette)
js/config.js        Mailchimp URL & event note toggles
assets/             Logo and portrait
favicon.png         Favicon (from logo)
```
