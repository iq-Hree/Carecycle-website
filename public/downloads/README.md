# CareCycle Android APK

The release file is available at:

`public/downloads/CareCycle.apk`

The landing page downloads this file through `APP_DOWNLOAD_URL` in `src/config.ts`. Keep the APK in this directory when publishing so the download button serves the Android build directly. Update the URL's version query whenever the APK changes so browsers and CDNs fetch the latest release.
