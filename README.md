# One Time GEM — Website

Plain HTML/CSS/JS site. No build step. Open any `.html` file in a browser, or deploy directly to Netlify.

---

## Editing copy

Every piece of text is inline in the HTML files. Search for `[CLIENT TO REPLACE]` or `[CLIENT TO CONFIRM]` to find the sections that need updating before the site goes live.

Key files and what's inside:

| File | Content to review |
|------|-------------------|
| `index.html` | Hero headline, intro strip text, testimonial quotes (×3) |
| `about.html` | Studio story (~150 words), How we work list |
| `services.html` | Service descriptions for all four lines |
| `weddings.html` | Tier descriptions, How it works steps |
| `corporate.html` | Intro paragraphs, "Previous work types" examples |
| `parties.html` | Approach prose, FAQ answer for minimum budget |
| `contact.html` | All contact details are already set (see below) |

---

## Contact details

To update contact details, search for the following strings across all HTML files and replace them:

- **Email:** `onetimegemsupport@gmail.com`
- **Phone display:** `07897 144388`
- **Phone link:** `+447897144388`
- **Instagram:** `https://instagram.com/onetimegem`
- **TikTok:** `https://tiktok.com/@onetimegem`
- **Facebook:** `https://www.facebook.com/profile.php?id=61573222525216`

A simple find-and-replace across the project (VS Code: `Cmd+Shift+H`) will catch all occurrences.

---

## Form integration (contact.html)

The enquiry form uses [FormSubmit](https://formsubmit.co) — a free service with no backend required.

**To activate:**
1. The form `action` is already set to `https://formsubmit.co/onetimegemsupport@gmail.com`
2. Submit the form once from the live site
3. FormSubmit will send a confirmation email to `onetimegemsupport@gmail.com`
4. Click the confirmation link — all future submissions will arrive in that inbox

**To redirect to a thank-you page after submission**, add this inside the `<form>` tag in `contact.html`:
```html
<input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
```

**To disable the captcha** (optional):
```html
<input type="hidden" name="_captcha" value="false">
```

---

## Deploying to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **Add new site → Deploy manually**
3. Drag and drop the entire `onetimegem` folder onto the upload area
4. The site will be live at a `*.netlify.app` URL within seconds
5. To connect a custom domain, go to **Domain settings** in the Netlify dashboard

For ongoing updates: connect the GitHub repository instead of dragging files, and Netlify will auto-deploy on every push.

---

## Self-hosting fonts (production)

The site currently loads fonts from Google Fonts via `@import`. For production, download the `woff2` files and serve them yourself — faster load, no external dependency.

**Download links:**
- [Pinyon Script](https://fonts.google.com/specimen/Pinyon+Script) — 1 weight
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) — weights 300, 400, 500, 600 (regular + italic)
- [Lato](https://fonts.google.com/specimen/Lato) — weights 300, 400

**Then replace the `<link>` tags in each HTML `<head>` with `@font-face` blocks in `css/style.css`:**
```css
@font-face {
  font-family: 'Pinyon Script';
  src: url('../fonts/PinyonScript-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
/* Repeat for each weight/style of Cormorant Garamond and Lato */
```

Place the `.woff2` files in a `/fonts/` folder at the root of the project.

---

## Favicon / Apple touch icon

The `favicon.svg` is a gold diamond on cream. For maximum browser compatibility, generate PNG versions:

1. Open `logo.jpg` in any image editor (Canva, Photoshop, etc.)
2. Crop to a square centred on the camera and diamond illustration
3. Export at:
   - `favicon-32.png` at 32×32 — rename to `favicon.ico` (or use an ICO converter)
   - `apple-touch-icon.png` at 180×180
4. Place both files in the root folder alongside `favicon.svg`

The HTML already references these filenames; no code changes needed.

---

## OG image

The site references `logo.jpg` as the Open Graph image (the image that appears when links are shared on social media). For best results, create a 1200×630px image:

- Cream (`#F5EBDD`) background
- Logo centred, sized generously
- Export as `og-image.jpg` and place it in the root folder
- Update the `og:image` meta tag in each HTML file to `og-image.jpg`

---

## File structure

```
onetimegem/
├── index.html        Home
├── about.html        About
├── services.html     Services
├── weddings.html     Weddings
├── corporate.html    Corporate
├── parties.html      Parties
├── contact.html      Contact
├── css/
│   └── style.css     All styles
├── js/
│   └── main.js       Navigation, animations
├── logo.jpg          Primary logo (circular)
├── cards.png         Business card reference
├── favicon.svg       SVG favicon
├── site.webmanifest  Web app manifest
└── README.md         This file
```
