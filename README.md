# Dinorun product site

Static bilingual product homepage for GitHub Pages. The site has no build step
and does not contain ROMs, installers, license files, customer data or private
keys.

## Configure checkout and support

Edit `site-config.js`:

```js
window.DINORUN_SITE_CONFIG = {
  checkoutUrl: "https://your-creem-checkout-url",
  supportEmail: "support@example.com"
};
```

Until `checkoutUrl` is set, purchase buttons show a localized message instead
of sending customers to a broken link.

## Preview locally

The files can be opened directly, or served from this directory:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173/`.

## Publish with GitHub Pages

1. Create an empty GitHub repository.
2. Commit this directory and push it to the repository's `main` branch.
3. In GitHub, open **Settings > Pages**.
4. Set **Source** to **GitHub Actions**.
5. The included workflow publishes the site after every push to `main`.

No custom domain is required. A `CNAME` file can be added later when a domain
has been selected.

## Public-content boundary

- The displayed interface captures come from the bilingual Qt preview.
- DINOHB is consistently described as experimental.
- The site states that ROMs and copyrighted game data are not included.
- Do not add ROMs, customer licenses, activation requests, private keys,
  firmware keys, logs or user configuration to this repository.
