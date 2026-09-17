# Working Spec

**Quest:** `SDSA-QUEST-002` Decide the relaunch path and club boundary  
**Stage:** `PRODUCT ROOM`  
**Persistence:** `COMMITTED_LOCAL`  
**Implementation authority:** `NONE` for additional scope  
**Human acceptance:** `PENDING`

## Desired outcome

Create a relaunch that fills the upcoming class while establishing an honest strategic path toward a highly affordable, subsidized boys' and girls' club if that model proves viable.

## Approved strategy

Use two tracks with one shared mission:

1. **Enrollment launch:** a time-bound, measurable campaign for the upcoming class, supported by a purpose-built landing experience and Facebook ads.
2. **Club discovery:** validate demand, age groups, economics, facilities, coaching, sponsorships, and governance before presenting the club as available.

The enrollment track is the approved primary campaign. The two-track boundary is `CANONICAL`. The club operating model and offer remain `PROPOSED` until separately approved.

## Observed enrollment offers

| Class | Ages | Time | Dates shown | Price | Capacity |
| --- | --- | --- | --- | --- | --- |
| Intro Soccer Skills & Games-SC | 6-9 | Wednesday, 4:30-5:30 PM | Oct 7-Dec 2, 2026; no class Nov 25 | $85 resident / $106 non-resident | City listing: 12 minimum / 36 maximum |
| Beginner II Soccer Skills & Games-SC | 10-14 | Wednesday, 5:30-6:30 PM | Oct 7-Dec 2, 2026; no class Nov 25 | $85 resident / $106 non-resident | City listing: 12 minimum / 36 maximum |

Both are shown at Salt Creek Park Soccer Arena, 2710 Otay Lakes Road, Chula Vista, with registration displayed as September 8 at 8:00 AM through October 30. The user confirmed the year is 2026. The City listing's displayed minimum of 12 remains external source information and must not be silently rewritten. A previously recorded internal threshold of 6 was later rejected.

Final registration remains on the City's public website. The academy website may act as a focused explanatory funnel with `Sign up now` actions that send families to the City system.

## Approved acquisition test

- **Variant A:** Facebook ad -> academy class landing experience -> `Sign up now` -> City registration.
- **Variant B:** Facebook ad -> City registration directly.
- **Geography:** 30-mile radius centered on Salt Creek Park.
- **Total spend cap:** $200.
- **Duration and allocation:** 10 days, with $10 per day for each destination variant.
- **Audience:** adults ages 25-65+, all genders, within 30 miles of Salt Creek Park; designed to reach parents, guardians, and grandparents without directly targeting minors.
- Keep audience, creative, schedule, and budget allocation equal so destination is the controlled variable.
- Measure academy-to-City outbound clicks for Variant A and reconcile City enrollment movement for both variants where source evidence permits.
- Do not select a winner based on click-through rate alone; prefer attributable enrollment and cost per enrollment where available.
- Do not impose a fixed registration threshold; evaluate the test by registrations produced and cost per registration within the approved $200 cap.

## Approved advertising promise

> Fall soccer classes for ages 6-14. Wednesday skill-building sessions at Salt Creek Park, October 7-December 2. $85 for residents and $106 for non-residents. Registration through the City of Chula Vista.

Creative may shorten or rearrange this promise by placement, but it must not change the facts, invent urgency, imply guaranteed outcomes, or present the proposed club as available.

## Approved measurement boundary

- Do not install Meta Pixel or advertising cookies.
- Do not create visitor profiles or send personal data from the academy site for campaign measurement.
- Use aggregate statistics available from Meta.
- Count academy-site `Sign up now` clicks anonymously.
- Treat City registration totals as the final outcome evidence.

## Existing implementation evidence

- Preserve the reference site's core navigation and contact paths.
- Lead with children, community, and growth rather than an empty stadium.
- Present group programs, private coaching, methodology, coaches, mission, and contact in one responsive page.
- Preserve the existing n8n callback integration and exact payload mapping.
- Keep localhost verification non-transmitting.
- Use a dependency-free static architecture with portable hosting.
- Support system-aware light/dark themes and reduced motion.

## Rejected directions

- Inventing a current winter session date.
- Adding unverified pricing or impact claims.
- Creating a new payment or registration backend.
- Treating automated tests as acceptance.

## Unresolved questions

- Direct City class links or approval to use the general catalog fallback.
- Current coach titles and affiliations.
- Donation destination.
- Club launch horizon, team/age-group scope, facilities, coaching, subsidy economics, and sponsorship model.
- Hosting and production publication approval.

## Acceptance behavior

- The homepage loads without horizontal overflow at desktop and 390px mobile.
- Navigation reaches each major section and mobile navigation opens and closes.
- Images load with reserved dimensions and useful alternative text.
- The callback form validates required fields and shows loading, success, and error states.
- Localhost form tests do not contact the production workflow.
- Dark mode and reduced-motion preferences are honored.
- SEO metadata, canonical URL, sitemap, robots file, and organization structured data are present.
- No stale session date is presented as current.

## Current evidence

See `evidence/BUILD_RECEIPT-SDSA-001.md`.

## Next checkpoint

Continue Q3 in `questions/SDSA-QUEST-002.md`: establish direct City class links or approve the verified general catalog fallback. Do not change website code, create ads, or spend funds until Q3 is complete. Then prepare a named launch revision and bounded Build Assignment.
