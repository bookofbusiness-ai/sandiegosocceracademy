# Project Blueprint

**Project:** San Diego Soccer Academy nonprofit website  
**Status:** full-site, two-pathway scope approved; content reconciliation in Product Room
**SpecLoops Core:** `v0.1.9-beta RC1`, not released

## Executive summary

The nonprofit needs an immediate enrollment relaunch for upcoming park-district classes, a durable private-training inquiry path, and a complete public website that preserves organizational trust content. It is also considering a structural shift toward an affordable subsidized club. The approved product shape is a full-site rebuild with group-registration and private-coaching pathways, plus a separate club-discovery track that can graduate into the public experience only after its offer and economics are approved.

## Product model

The near-term relaunch serves eight connected needs:

1. Explain who the academy serves and why the nonprofit exists.
2. Make the upcoming class offer easy to understand and act on.
3. Explain private training and help families choose an appropriate verified coach.
4. Route private-training inquiries to the selected coach or a documented fallback.
5. Establish trust through verified coaching profiles and a clear training method.
6. Preserve the nonprofit story, About content, FAQ, community-support options, and contact paths.
7. Convert interest into a trackable enrollment or inquiry workflow with appropriate privacy boundaries.
8. Build an owned audience for future affordable club opportunities without promising an unlaunched club.

## Experience model

- One primary class-enrollment action above the fold, with a clear secondary path to private training.
- Exact date, age fit, location, schedule, price, capacity, and next step visible before commitment.
- Ad-message continuity from Facebook creative through landing page and confirmation.
- Persistent desktop navigation and compact mobile menu.
- Split hero centered on real player development.
- Distinct linkable destinations for Home, Programs, Private Training, Coaches, About, FAQ, Get Involved, and Contact.
- Coach profiles connect directly to preferred-coach private-training inquiries.
- Group-training actions use `Sign up now`; private-training actions use a distinct inquiry label that does not imply City registration.
- Light/dark theme support and reduced-motion handling.

## Architecture

- Static, portable frontend with semantic content, metadata, structured data, and forms; the final route/file structure will be set by the Build Assignment.
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
- selected coach or general academy fallback for private-training inquiries;
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

The group-registration destination is the verified City catalog. The private-training workflow requires confirmed coach-specific destinations and a general fallback. Privacy-light campaign measurement is approved; Meta Pixel and advertising cookies are excluded.

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

- Human approval of named revision `SDSA-LAUNCH-v1`.
- Current coach roster and complete profile confirmation.
- Coach-specific inquiry routing and fallback behavior.
- Authoritative volunteering, sponsorship, and donation destinations.
- Privacy/legal review if intake scope expands.
- Human visual and content acceptance.
- Production deployment and domain verification.
- Club scope, economics, governance, facilities, and sponsorship feasibility.

## Path to launch

1. Reconcile the coach roster, profile facts, private-inquiry routes, fallback, and support destinations.
2. Approve or revise `specs/SDSA-LAUNCH-v1.md`.
3. Create a Verification Contract and Build Assignment referencing the exact approved revision.
4. Rebuild or revise the full site against the approved target.
5. Review the preview, then obtain explicit deployment and ad-launch authority.
6. Deploy and verify the exact approved commit, both service paths, HTTPS, and both domain variants.
7. Run the club discovery track and promote it to canon only after viability and human approval.
