# Dinorun product site

Static bilingual product homepage for GitHub Pages. The current product release
is Dinorun 1.0.2, adding the Punipic profile alongside DINOPIC2 and the
experimental DINOHB profile. The site has no build step and does not contain
game ROMs, installers, license files, customer data or private keys.

## Configure checkout and support

Edit `site-config.js`:

```js
window.DINORUN_SITE_CONFIG = {
  checkoutUrl: "https://www.creem.io/payment/prod_2ZXC9d6AuM8RCzxtco9Riq",
  supportEmails: ["38784757@qq.com", "leehonxuan@gmail.com"]
};
```

The purchase buttons open the configured Creem checkout page in a new tab.

Keep both support emails consistent across the website, payment receipts and
support replies.

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

Use the following public URL as the successful-payment return URL when your
checkout provider supports a customer return page:

```text
https://dinorunemu.shop/purchase-complete.html
```

The page explains the download, installation and manual offline-activation
steps in English and Simplified Chinese. Reaching a return URL is not proof of
payment, so verify the completed order in the payment provider before issuing
a license.

## Public-content boundary

- The displayed interface captures come from the bilingual Qt preview.
- Dinorun 1.0.2 supports DINOPIC2 and Punipic; DINOHB remains experimental.
- DINOHB is consistently described as experimental.
- The site states that Dinorun is independent software, does not include or
  distribute ROMs or third-party game data, and is not affiliated with game
  copyright holders.
- Do not add ROMs, customer licenses, activation requests, private keys,
  firmware keys, logs or user configuration to this repository.
