# Project Context

**SpecLoops Core:** `v0.1.9-beta RC1`, not released  
**Project:** San Diego Soccer Academy relaunch and club-model exploration  
**Repository:** `bookofbusiness-ai/sandiegosocceracademy`  
**Canonical branch:** `main`  
**Last verified application HEAD:** `5ae799af74d29d65ea9450539b6526a8f63f06a7`  
**Freshness:** `FRESH` at candidate installation

## North star

Help more San Diego County children access soccer coaching that builds skill, confidence, discipline, and belonging.

## People served

- Young players ages 6-14.
- Parents and guardians evaluating group or private training.
- Volunteers, donors, and community partners supporting the nonprofit mission.

## Desired outcome

Increase enrollment for a new class expected to begin in approximately one month, relaunch the nonprofit with a focused family-conversion experience, and evaluate whether the academy should become an affordable subsidized boys' and girls' club with training inside the club model.

## Current reality

- The GitHub repository was empty when work began.
- The first application commit is `5ae799a`.
- The site is a dependency-free static HTML, CSS, and JavaScript application.
- It includes responsive navigation, light and dark themes, program information, private training, coaching staff, mission, contact information, and a callback form.
- The callback form preserves the existing public n8n intake workflow and its established field mapping.
- Local preview mode validates without transmitting personal information.
- The site is not yet published from this repository and the custom domain has not been changed in this campaign.
- The first application build happened before the v0.1.9 Product Room flow was run. It is therefore an unaccepted implementation candidate, not an approved product target.
- The user reports low sign-ups for the upcoming class.
- User-supplied City of Chula Vista listings establish two Wednesday class offers at Salt Creek Park Soccer Arena, with dates displayed as October 7-December 2 and no class November 25.
- The user confirmed that the class listings are for 2026.
- A subsidized club with boys' and girls' age-group teams, supported in part by business sponsorships, is under consideration; it is not yet an approved operating model or public claim.

## Observed class offer

- **Intro Soccer Skills & Games-SC:** ages 6-9, Wednesdays 4:30-5:30 PM.
- **Beginner II Soccer Skills & Games-SC:** ages 10-14, Wednesdays 5:30-6:30 PM.
- **Confirmed date range:** October 7-December 2, 2026, excluding November 25.
- **Location:** Salt Creek Park Soccer Arena, 2710 Otay Lakes Road, Chula Vista, CA 91915.
- **Fee per class:** $85 resident / $106 non-resident.
- **Registration window displayed:** September 8 at 8:00 AM through October 30.
- **Capacity per class:** minimum 12, maximum 36.
- **Human-defined campaign enrollment floor:** 6. This is an internal relaunch threshold and does not rewrite the City listing's displayed minimum of 12.
- **Instructor:** San Diego Soccer Academy.
- **Registration mechanism:** City account/sign-in flow; the official current catalog is `https://secure.rec1.com/CA/chula-vista-ca/catalog`.
- **Contact shown:** Jason Taylor, `jason@sandiegosocceracademy.org`; facility phone `619-409-1994`.

## Product laws

- Present the academy as a community nonprofit, not only a premium training business.
- Make the next action clear for families on desktop and mobile.
- Keep the time-sensitive class enrollment path distinct from the longer-horizon club decision until the club model is approved.
- Do not fabricate session dates, availability, impact figures, donation destinations, or coach credentials.
- Do not advertise teams, age groups, club fees, sponsorship commitments, or subsidies until those details are approved.
- Preserve honest error and loading behavior for the callback form.
- Keep personal information limited to the existing intake fields and destination.
- Code completion and automated checks do not equal human acceptance.

## Architecture and system boundaries

- Static frontend: `index.html`, `styles.css`, `script.js`.
- Hosting: portable across Vercel, Netlify, Cloudflare Pages, GitHub Pages, or another static host.
- Intake integration: existing academy n8n webhook.
- No database, authentication, analytics, donation processor, or content management system is included.
- `vercel.json` supplies caching and baseline security headers when hosted on Vercel.

## Established decisions

- Use the supplied Replit site as the content and behavior reference.
- Reframe the experience around youth access, development, and community impact.
- Preserve the current green identity while replacing the gold-heavy presentation with a single field-green accent system.
- Preserve the current callback workflow without sending test submissions.
- Install the SpecLoops v0.1.9 release candidate and label it accurately as unreleased.
- Use two governed tracks: make the upcoming class the immediate enrollment campaign, and validate the subsidized club separately before presenting it as available.
- Keep final class registration on the City's public website; the nonprofit site may serve as an explanatory funnel that sends families to the City system.

## Proposed

- Use the upcoming class as the primary near-term website and Facebook-ad conversion offer.
- Treat the current implementation as a reusable prototype/evidence source, not as the approved rebuild target.
- Confirm launch-critical content, create an approved revision and Build Assignment, then rebuild or revise the site against that target.
- Connect `sandiegosocceracademy.org` only after preview acceptance.
- Add a real donation destination when the nonprofit selects one.

## Unresolved

- Approval and parameters for a controlled destination test: academy landing page versus direct City registration.
- Advertising budget, audience radius, campaign duration, and success threshold.
- Direct City class URLs, if available; otherwise the general catalog remains the verified destination.
- Whether the City listing's displayed minimum of 12 can be changed or should simply remain external source information while the campaign uses an internal floor of 6.
- Whether Wednesday 4:30 PM-6:30 PM remains the current schedule.
- Current coach titles and affiliations.
- Donation destination or payment link.
- Club launch horizon, initial boys' and girls' age groups, seasonal format, expected roster sizes, coaching model, and facility plan.
- Family price target, subsidy budget, scholarship policy, and sponsorship assumptions.
- Final hosting project and production deployment approval.

## Non-goals

- Replacing the existing n8n workflow.
- Creating player accounts or a registration database.
- Processing donations directly.
- Inventing new programs, pricing, legal terms, or impact claims.

## Current campaign

- **Campaign:** `SDSA-CAMPAIGN-002` Enrollment relaunch and club strategy
- **Status:** Product Room framing
- **Primary quest:** `SDSA-QUEST-002` Decide the relaunch path and club boundary
- **Secondary historical quest:** `SDSA-QUEST-001` prior website candidate review
- **Buildability blockers:** two-track approval, launch offer facts, success target, and club/public-copy boundary

## Evidence and provenance

- User-authorized repository: `bookofbusiness-ai/sandiegosocceracademy`.
- User-supplied reference: `https://soccer-academy-insights--jlanier01.replit.app`.
- User-supplied class listings: `evidence/source/chula-vista-class-ages-6-9.png` and `evidence/source/chula-vista-class-ages-10-14.png`.
- Extracted offer evidence: `evidence/CLASS_OFFER-SDSA-002.md`.
- Implementation evidence: `evidence/BUILD_RECEIPT-SDSA-001.md`.
- Source images and generated-image provenance: `README.md`.
