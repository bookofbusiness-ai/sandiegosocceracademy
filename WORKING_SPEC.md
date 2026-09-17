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
| Intro Soccer Skills & Games-SC | 6-9 | Wednesday, 4:30-5:30 PM | Oct 7-Dec 2; no class Nov 25 | $85 resident / $106 non-resident | 12 minimum / 36 maximum |
| Beginner II Soccer Skills & Games-SC | 10-14 | Wednesday, 5:30-6:30 PM | Oct 7-Dec 2; no class Nov 25 | $85 resident / $106 non-resident | 12 minimum / 36 maximum |

Both are shown at Salt Creek Park Soccer Arena, 2710 Otay Lakes Road, Chula Vista, with registration displayed as September 8 at 8:00 AM through October 30. The screenshots omit the year; Fall 2026 is strongly supported by the current official program guide but remains a confirmation item.

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

- Confirmed session year.
- Current and target sign-ups for each class.
- Final registration destination: the general City catalog or a direct class URL.
- Advertising budget.
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

Resolve Q2 in `questions/SDSA-QUEST-002.md`: gather the exact class offer and enrollment target. Do not change website code or create ads until those facts are authoritative. Then define the paid-acquisition boundary in Q3 and prepare a named launch revision and bounded Build Assignment.
