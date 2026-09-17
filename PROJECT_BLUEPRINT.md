# Project Blueprint

**Project:** San Diego Soccer Academy nonprofit website  
**Status:** two-track strategy approved; launch offer under Product Room review
**SpecLoops Core:** `v0.1.9-beta RC1`, not released

## Executive summary

The nonprofit needs an immediate enrollment relaunch for an upcoming class and is also considering a structural shift from a park-district-centered academy to an affordable subsidized club. The approved product shape is a focused class-enrollment funnel now, with a separate club-discovery track that can graduate into the public experience only after its offer and economics are approved.

## Product model

The near-term relaunch serves five connected needs:

1. Explain who the academy serves and why the nonprofit exists.
2. Make the upcoming class offer easy to understand and act on.
3. Establish trust through coaching credentials and a clear training method.
4. Convert interest into a trackable enrollment or lead workflow.
5. Build an owned audience for future affordable club opportunities without promising an unlaunched club.

## Experience model

- One primary class-enrollment action above the fold.
- Exact date, age fit, location, schedule, price, capacity, and next step visible before commitment.
- Ad-message continuity from Facebook creative through landing page and confirmation.
- Persistent desktop navigation and compact mobile menu.
- Split hero centered on real player development.
- Program comparison followed by private coaching, method, coaches, mission, and contact.
- Repeated intent uses one label: `Request a Call`.
- Light/dark theme support and reduced-motion handling.

## Architecture

- `index.html`: semantic content, metadata, structured data, and form.
- `styles.css`: responsive design tokens, components, states, and accessibility media queries.
- `script.js`: theme, navigation, reveal behavior, share action, form validation, and n8n submission.
- `assets/`: optimized local photography and favicon.
- `vercel.json`: static caching and security headers.

## Data model

The site does not persist data locally. The callback form transmits:

- parent or guardian name;
- player name and age;
- preferred day;
- phone number;
- email;
- optional goals or requests;
- submission timestamp.

## Security and privacy

- No credentials or private keys are stored in the repository.
- The public callback endpoint matches the supplied public reference implementation.
- Local preview mode prevents test transmission.
- Security headers restrict MIME sniffing, referrer detail, camera, microphone, and geolocation when deployed on Vercel.
- A formal privacy policy is not included and should be considered before broader data collection or analytics.

## Integrations

- Existing n8n callback workflow.
- Email and telephone links.
- Web Share API with clipboard fallback.
- No payment, CRM, analytics, CMS, or registration platform integration.

Proposed launch additions require a decision: Meta Pixel/Conversions API, an authoritative registration or payment destination, and privacy/consent handling.

## Economics and club hypothesis

The club concept is intended to lower the cost of competitive soccer and attract local talent through nonprofit subsidy and business sponsorships. Before it becomes a public offer, the model needs:

- initial boys' and girls' age groups and roster assumptions;
- facility and league/tournament costs;
- coaching and safeguarding model;
- family fee target and scholarship policy;
- annual subsidy required per player/team;
- sponsorship inventory, targets, and renewal assumptions;
- minimum viable enrollment and operating runway.

## Quality and verification

- JavaScript syntax check passes.
- Desktop and 390px Playwright checks pass with no console errors or horizontal overflow.
- Mobile menu, theme switching, anchor integrity, lazy images, and safe local form behavior are verified.
- Lighthouse scores are 100 for performance, accessibility, best practices, and SEO in the local run.

## Deployment and operations

- No build step is required.
- Static assets use long-lived caching under the included Vercel configuration.
- Production verification must cover the deployed URL, form response, HTTPS, root domain, and `www` domain separately.

## Known gaps

- Success-threshold scope, detailed adult audience, tracking boundary, approved claims, and direct City class links or catalog fallback.
- Advertising budget, audience radius, creative claims, and measurement plan.
- Time-sensitive program schedule and capacity.
- Donation destination.
- Coach detail confirmation.
- Privacy/legal review if intake scope expands.
- Human visual and content acceptance.
- Production deployment and domain verification.
- Club scope, economics, governance, facilities, and sponsorship feasibility.

## Path to launch

1. Freeze the exact class offer, enrollment goal, and conversion action in Q2 of `questions/SDSA-QUEST-002.md`.
2. Define the Facebook-ad message, audience, budget, tracking, and success threshold.
3. Create an immutable launch revision, Verification Contract, and Build Assignment.
4. Rebuild or revise the site against the approved target.
5. Review the preview, then obtain explicit deployment and ad-launch authority.
6. Deploy and verify the exact approved commit, conversion path, HTTPS, and both domain variants.
7. Run the club discovery track and promote it to canon only after viability and human approval.
