# .well-known — Resuvia deep links

Serves App Links (Android) + Universal Links (iOS) verification for Resuvia
referral deep links `https://xentarai.com/r/<code>`.

**Requires `.nojekyll` at repo root** — GitHub Pages' Jekyll otherwise drops
dot-directories and these files 404. (Added alongside these files.)

## Values to fill before links verify

- **assetlinks.json** → `sha256_cert_fingerprints`: the **Play App Signing**
  SHA-256 (Play Console → Resuvia → Test and release → App integrity → App
  signing key certificate). NOT the upload key. Colon-separated hex.
- **apple-app-site-association** → `appID`: `<TeamID>.com.xentarai.resuvia`
  (Apple Developer → Membership → Team ID).

## Notes

- AASA has **no file extension** and must be valid JSON. GitHub Pages serves it
  as `application/octet-stream`; Apple's CDN tolerates this. Do not add `.json`.
- Until both files are filled + the apps ship with matching
  associated-domains / App Links intent-filter, taps fall back to the browser
  → `404.html` redirects `/r/<code>` to the Resuvia product page carrying the
  code. The in-app share-sheet import is unaffected (uses the App Group).
