# Sishi Li · Academic Portfolio

Personal academic website. Pure static HTML / CSS / JS — no build step, no
framework runtime.

## Files

```
index.html      Page shell (markup, hooks, intro overlay, nav, footer)
styles.css      All styles
app.js          Data tables + i18n + interactions
uploads/        Photo, life photos, CV PDF
vercel.json     Cache headers for Vercel
```

## Local preview

Just open `index.html` in a browser. (No server required.)

If your browser blocks the CV download because of `file://` quirks, run a tiny
local server instead:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Editing content

All visible content lives in `app.js`:

| Want to update… | Edit |
|---|---|
| Name, tagline, bio, button labels      | `T.en` / `T.zh` |
| News items                             | `NEWS.en` / `NEWS.zh` |
| Positions                              | `POSITIONS.en` / `POSITIONS.zh` |
| Education                              | `EDUCATION.en` / `EDUCATION.zh` |
| Projects                               | `PROJECTS.en` / `PROJECTS.zh` |
| Publications (single shared list)      | `PUBS` |
| Conference talks                       | `CONFERENCES` |
| Academic network nodes / coordinates   | `NETWORK_NODES` |
| Life-photo paths                       | `PHOTOS` |

After editing, just refresh the browser.

## Contact form (Formspree)

The contact form posts to Formspree. To turn it on:

1. Sign up at <https://formspree.io>, create a new form, copy the endpoint.
2. Open `app.js`, set the endpoint at the top:

   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/XXXXXXXX';
   ```

3. Re-deploy.

If `FORMSPREE_ENDPOINT` is left empty, the form still works visually — it
shows the success message without sending anything. Useful for local dev.

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub / GitLab / Bitbucket).
2. Go to <https://vercel.com/new>, import the repo, accept defaults
   (framework = "Other", build command = none, output dir = `./`).
3. Every push to `main` triggers a redeploy.

The included `vercel.json` sets cache headers so the large life photos are
served with `max-age=1y`.

## Custom domain

In the Vercel dashboard → project → **Settings → Domains**, add the domain and
follow the DNS instructions. Free TLS is handled automatically.
