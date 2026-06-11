# UrMoments Photobooth Website

Static multi-page website for UrMoments Photobooth, ready to upload to GitHub and publish with GitHub Pages.

## Pages included

- `index.html` — Homepage
- `services.html` — Services
- `packages.html` — Packages
- `backdrops.html` — Backdrops with filters and lightbox
- `gallery.html` — Gallery with click-to-enlarge images
- `faq.html` — FAQ
- `contact.html` — Contact

## Project structure

```text
.
├── index.html
├── services.html
├── packages.html
├── backdrops.html
├── gallery.html
├── faq.html
├── contact.html
├── styles.css
├── script.js
└── assets/
    ├── brand/
    ├── logos/
    └── photos/
```

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this ZIP to the repository root. `index.html` must be at the top level.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Save and wait for GitHub Pages to publish the site.

## Notes

- This is a static HTML/CSS/JavaScript website, so no build step is required.
- Keep the `assets` folder paths the same so images, logos, and brand files continue to load correctly.
- The file `.nojekyll` is included so GitHub Pages serves all static assets normally.
