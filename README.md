# San Diego Soccer Academy

Production-ready static website for the San Diego Soccer Academy nonprofit.

This repository also contains an explicitly labeled SpecLoops Core `v0.1.9-beta` release-candidate installation. Start with `SPECLOOPS.md`; exact candidate provenance and hashes are recorded in `.specloops/INSTALLATION.md`.

## Local preview

```sh
npm run dev
```

Open `http://localhost:4173`.

## Form integration

The callback form preserves the existing academy n8n intake endpoint and payload fields. Localhost previews validate the form without submitting personal information. Production requests are sent to the live academy workflow.

## Content requiring confirmation before launch

- Next group session start date and capacity
- Whether the Salt Creek schedule is still Wednesdays from 4:30 PM to 6:30 PM
- Donation destination or payment link
- Coach titles and current affiliations

## Deployment

The site has no build step. It can deploy as a static site on Vercel, Netlify, Cloudflare Pages, GitHub Pages, or another static host.

The included `vercel.json` adds long-lived asset caching and baseline security headers.

## Image provenance

- `academy-field.jpg`, `soccer-ball.jpg`, and `opengraph.jpg` were preserved from the academy's public Replit site.
- `community-training.jpg` and `private-coaching.jpg` were generated for this rebuild with OpenAI image generation.
