# Dinorun product site

Static bilingual product homepage for GitHub Pages. The site has no build step
and does not contain ROMs, installers, license files, customer data or private
keys.

## Configure checkout and support

Edit `site-config.js`:

```js
window.DINORUN_SITE_CONFIG = {
  checkoutUrl: "https://your-creem-checkout-url",
  supportEmail: "leehonxuan@gmail.com"
};
```

Until `checkoutUrl` is set, purchase buttons show a localized message instead
of sending customers to a broken link.

The support email must match **Settings > Business Details** in Creem and the
email printed on Creem receipts.

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

## Payment return page

Use the following public URL as the successful-payment return URL in PayPal or
another checkout provider:

```text
https://jackielee250209.github.io/dinorun-product-site/purchase-complete.html
```

The page explains the download, installation and manual offline-activation
steps in English and Simplified Chinese. Reaching a return URL is not proof of
payment, so verify the completed order in the payment provider before issuing
a license.

## Public-content boundary

- The displayed interface captures come from the bilingual Qt preview.
- DINOHB is consistently described as experimental.
- The site states that ROMs and copyrighted game data are not included.
- Do not add ROMs, customer licenses, activation requests, private keys,
  firmware keys, logs or user configuration to this repository.
