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
3. Explain private training and help families choose from coaches currently published as available.
4. Give each available coach an academy-branded page with verified bio, social-proof video, live availability, direct booking, and human callback.
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
- Founder/member profiles establish organizational leadership without implying private availability.
- Bookable-coach profiles connect to individual booking pages and human callback.
- Coach and booking-provider management uses a separate operator surface and is never exposed through public marketing navigation.
- Group-training actions use `Sign up now`; private-training actions use a distinct inquiry label that does not imply City registration.
- Light/dark theme support and reduced-motion handling.

## Architecture

- Static, portable frontend with semantic content, metadata, structured data, and forms; the final route/file structure will be set by the Build Assignment.
- `styles.css`: responsive design tokens, components, states, and accessibility media queries.
- `script.js`: theme, navigation, reveal behavior, share action, form validation, and n8n submission.
- `assets/`: optimized local photography and favicon.
- `vercel.json`: static caching and security headers.

## Data model

The current prototype does not persist data locally. Its callback form transmits:

- parent or guardian name;
- player name and age;
- preferred day;
- phone number;
- email;
- optional goals or requests;
- selected coach or general academy fallback for private-training inquiries;
- appointment slot, session type, and scheduling-provider reference when a booking is created;
- submission timestamp.

The managed coach model also needs publishable fields for role, biography, specialties, age ranges, session formats, service area, profile image, social-proof video, accessibility text, booking status, provider-side mapping, and callback route. Provider type and connection settings belong to the business record, not the coach record. The prototype uses safe local/demo state and documents these fields for the separate CRM integration owner.

The public read model includes only approved published fields. Admin-only fields, unpublished coach records, provider configuration, and management actions remain outside public routes and payloads.

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

The group-registration destination is the verified City catalog. Private training uses one provider-neutral adapter selected by the business owner for the organization. Every coach page inherits that provider and uses only its provider-side coach/resource mapping. Different businesses may choose Google Calendar appointment scheduling, Calendly, Cal.com, another supported provider, or callback-only mode; one business does not mix booking engines among its coaches. The prototype owns the experience and integration contract; another agent owns the existing CRM connection and production persistence. Privacy-light campaign measurement is approved; Meta Pixel and advertising cookies are excluded.

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
- Human approval of the complete provider-neutral prototype target.
- Deferred publication gates: initial bookable-coach roster; complete profile and video confirmation; coach-specific booking/callback routing; and private-session price, payment, cancellation, rescheduling, and refund policy.
- Authoritative volunteering, sponsorship, and donation destinations.
- Privacy/legal review if intake scope expands.
- Human visual and content acceptance.
- Production deployment and domain verification.
- Club scope, economics, governance, facilities, and sponsorship feasibility.

## Path to launch

1. Approve or revise `specs/SDSA-LAUNCH-v1.md` as the provider-neutral prototype target.
2. Create a Verification Contract and Build Assignment referencing the exact approved revision.
3. Rebuild or revise the full site and coach-booking prototype against the approved target.
4. Deliver the documented provider-neutral data and event contract to the separate CRM integration owner.
5. Review the preview, then obtain explicit deployment and ad-launch authority.
6. Connect and verify production CRM/calendar behavior only within the separately owned integration scope.
7. Deploy and verify the exact approved commit, both service paths, HTTPS, and both domain variants.
8. Run the club discovery track and promote it to canon only after viability and human approval.
