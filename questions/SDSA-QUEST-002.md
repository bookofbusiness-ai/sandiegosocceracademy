# Question Ledger

**Quest ID:** `SDSA-QUEST-002`  
**Quest title:** Decide the relaunch path and club boundary  
**SpecLoops Core:** `v0.1.9-beta RC1`, not released

## Q1: Should the relaunch use two governed tracks?

- **Status:** `ANSWERED`
- **Known:** A new class is expected to begin in approximately one month, sign-ups are low, and the nonprofit wants a website relaunch plus Facebook advertising. A subsidized boys' and girls' club is being considered because the park-district academy model has not performed well.
- **Recommendation:** Approve two tracks: make the upcoming class the immediate conversion campaign, and run club discovery in parallel without advertising teams as available yet.
- **Why it matters:** A single page trying to sell a current class and an undefined club would weaken the call to action and could turn a hypothesis into a public promise.
- **Human decision:** Approved on 2026-09-17. The upcoming class is the immediate enrollment campaign; the club remains a separately governed discovery track until its model and public offer are approved.

## Q2: What is the exact class offer?

- **Status:** `ANSWERED`
- **Known from direct listing evidence:** Two Wednesday classes run October 7-December 2, excluding November 25, at Salt Creek Park Soccer Arena, 2710 Otay Lakes Road, Chula Vista. Intro Soccer Skills & Games-SC serves ages 6-9 from 4:30-5:30 PM. Beginner II Soccer Skills & Games-SC serves ages 10-14 from 5:30-6:30 PM. Both cost $85 for residents / $106 for non-residents, require at least 12 participants, and allow up to 36. Registration is shown as September 8 at 8:00 AM through October 30 and requires a City account.
- **Corroboration:** The official City program guide is Fall 2026 and directs registration to `https://secure.rec1.com/CA/chula-vista-ca/catalog`. The displayed dates also align with Wednesdays in 2026.
- **Human decision:** Confirmed 2026 on 2026-09-17, and final registration occurs on the City's public website. A subsequently rejected internal threshold of 6 is preserved only as history.
- **Evidence boundary:** The City screenshot displays `Min Participants 12`. That external listing remains recorded as observed evidence and is not used as the campaign's success threshold.

## Q3: What is the paid-acquisition boundary?

- **Status:** `ANSWERED`
- **Known:** Facebook ads are desired to drive sign-ups. Final registration happens on the City's public website. The academy homepage may provide program context and a `Sign up now` action before handing off to the City. A second ad will link directly to the City. The approved geography is a 30-mile radius centered on Salt Creek Park. Total spend is capped at $200 and allocated equally over 10 days at $10 per destination per day. The approved audience is adults ages 25-65+, all genders, including parents, guardians, and grandparents; minors are not directly targeted.
- **Registration destination:** Browser verification found a shareable filtered City catalog URL that returns both approved classes: `https://secure.rec1.com/CA/chula-vista-ca/catalog/index/70755b78039cd652919a0e4ea69d4d56?filter=c2VhcmNoPVNvY2NlciUyMFNraWxscyUyMCUyNiUyMEdhbWVzLVND`.
- **Recommendation:** Keep audience, creative, schedule, and budget equal. Variant A lands on the academy's focused class page and measures the outbound City-registration click. Variant B goes directly to the same City registration destination. Compare City enrollment movement and cost per attributable enrollment where possible—not click-through rate alone. If direct class links cannot be obtained, prefer the academy funnel as the primary path because the general catalog adds search friction.
- **Human decision:** Test structure, 30-mile radius, $200 total cap, 10-day equal allocation, adults 25-65+ audience, factual class promise, privacy-light measurement, and City registration boundary approved on 2026-09-17. The fixed enrollment threshold was rejected; registrations and cost per registration are the outcome measures. Q3 is complete.

## Q4: What club hypothesis should be validated first?

- **Status:** `UNRESOLVED`
- **Known:** The desired direction is an affordable, subsidized club with boys' and girls' teams in multiple age groups, supported partly by business sponsorships, with academy training inside the club.
- **Missing:** Launch horizon, first age groups, roster size, competition level, facility access, coaching and safeguarding model, family fee target, subsidy per player, sponsorship target, and viability threshold.
- **Recommendation:** Validate one smallest viable club cohort before designing a full multi-age organization.
- **Human decision:** Pending; this track must not block the class relaunch.

## Q5: Which people and destinations are current for the full-site rebuild?

- **Status:** `PARTIALLY_ANSWERED`
- **Known:** The rebuild must include the full website, not only the homepage. The current public site contains four coach profiles: Jason Taylor, Jeff Taylor, Ashley Hernandez-Cavanagh, and Greg Coco. The Replit reference and repository prototype contain three: Jason, Jeff, and Ashley. The Replit experience makes private training prominent and exposes coach emails, but its callback form is generic and does not demonstrate preferred-coach routing.
- **Human direction:** Preserve two website pathways. Group training routes through the park district and ultimately to the City registration system. Private-training inquiries should be routed to coaches based on the family's selected coach profile.
- **Missing:** Initial bookable-coach roster; approved names, titles, credentials, affiliations, biographies, specialties, emails, service areas, availability, video assets and permissions; booking and callback destination for each coach; fallback when a coach is unavailable; authoritative volunteering, sponsorship, and donation destinations. These may be supplied later and gate publication of the affected content rather than the underlying platform build.
- **Recommendation:** Confirm the current roster first, then verify each profile and route. Keep a general academy fallback so a family is never stranded if a coach is unavailable or routing fails.
- **Why it matters:** Publishing an outdated coach or misrouting family information would undermine trust and create a privacy and service failure.
- **Human decision:** Jason Taylor, Jeff Taylor, Ashley Hernandez-Cavanagh, and Greg Coco are confirmed as current founders/members. This does not make them bookable private coaches. The initial bookable roster and coach-specific content will be provided later. Each available coach should have an individual academy-branded booking page with availability, biography, approved social-proof video, booking, and human-callback options.

## Q6: What should power coach management, availability, and booking?

- **Status:** `UNRESOLVED`
- **Known:** Families need a San Diego Soccer Academy-branded page for each available coach. The organization must be able to add, edit, publish, unpublish, and mark coaches unavailable. Each page needs verified profile content, availability, video, direct booking, and a human-callback alternative.
- **Decision required:** Whether a managed content layer should control coach profiles while Cal.com or another scheduling provider owns availability, calendar sync, appointment lifecycle, and notifications behind each academy-branded page, or whether SDSA builds and operates both systems itself.
- **Recommendation:** Use academy-owned coach pages backed by a simple managed coach-content system, with an embedded or API-connected Cal.com schedule for the first release. Keep bios, videos, publication status, availability status, and calls to action under the SDSA brand, while Cal.com handles calendar synchronization, booking, rescheduling, cancellation, and notifications. Route `Request a callback` through the separately verified human workflow.
- **Why it matters:** A first-party scheduler adds substantial operational and privacy scope. The connected-provider approach delivers the desired experience faster while preserving the option to replace the scheduling backend later.
- **Human decision:** Pending.

## Resume rule

Q1-Q3 are answered. Q5 establishes the founder/member versus bookable-coach boundary; bookable roster details remain deferred. Resume at Q6 by selecting the scheduling architecture. Keep Q4 as a parallel discovery track that does not block the class relaunch. Do not change website code or produce launch ads until the launch-critical questions are reconciled, the named target is approved, and a Build Assignment is issued.
