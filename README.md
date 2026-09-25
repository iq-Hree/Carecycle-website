# CareCycle landing page

A responsive React + Vite landing page for CareCycle, a private period and wellbeing tracking app.

## Run locally

```bash
npm install
npm run dev
```

## Production check

```bash
npm run lint
npm run build
npm run preview
```

## Android APK

The download button uses the configurable `APP_DOWNLOAD_URL` in `src/config.ts` and points to the included Android build:

```text
public/downloads/CareCycle.apk
```

Keep the APK in `public/downloads/` when publishing so the button serves it directly. The current file is the CareCycle Android debug build supplied with the project.

The screen previews are lightweight, accessible interface mockups built from the CareCycle app flow. Approved screenshot assets can be dropped into `public/screenshots/` using the documented names when they are available.
