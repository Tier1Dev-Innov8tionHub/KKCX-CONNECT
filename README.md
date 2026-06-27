# Kemoy Kayan — Connect Hub

Premium, mobile-first link hub for [connect.kemoykayan.com](https://connect.kemoykayan.com).

## Quick start

Serve locally:

```bash
npx serve .
```

Or open `index.html` via any static file server.

## Mailchimp setup

When your Mailchimp signup URL is ready, edit `js/config.js`:

```javascript
mailchimpUrl: "https://your-mailchimp-url",
```

Both "Join the Mailing List" and "Join the list for updates" will link there automatically.

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
