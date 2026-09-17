# Working Spec

**Quest:** `SDSA-QUEST-002` Decide the relaunch path and club boundary  
**Stage:** `PRODUCT ROOM`  
**Persistence:** `COMMITTED_REMOTE`
**Implementation authority:** `NONE` for additional scope  
**Human acceptance:** `PENDING`

## Desired outcome

Create a full nonprofit website relaunch that fills the upcoming classes, supports coach-selected private-training inquiries, preserves the organization's essential trust and support content, and establishes an honest strategic path toward a highly affordable subsidized boys' and girls' club if that model proves viable.

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

## Full-site and service-path model

The rebuild is not limited to the homepage. It must provide distinct, linkable, responsive destinations for Home, Programs, Private Training, Coaches, About, FAQ, Get Involved, and Contact.

- **Group training:** explain verified park-district classes and hand families to the City registration system.
- **Private training:** explain the service, present a managed directory of coaches currently available for private sessions, and give each coach an individual academy-branded booking page with verified profile content, availability, video, direct booking, and a human-callback alternative.
- **People:** present Jason Taylor, Jeff Taylor, Ashley Hernandez-Cavanagh, and Greg Coco as founders/members. Founder/member status and bookable-coach status are separate.
- **Prototype integration:** support provider-neutral booking modes and document the handoff contract; another agent owns live CRM connectivity.
- **Organization and trust:** preserve the nonprofit story, mission, values, methodology, FAQ, volunteering, sponsorship, donation concept, and general contact path without inventing unsupported facts or transaction destinations.

The current public site supplies the broader content inventory. The Replit reference supplies the stronger private-training model. The repository prototype is useful implementation evidence but is not complete enough to be the approved target.

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

## Approved registration destination

Both class paths use the browser-verified filtered City catalog URL:

`https://secure.rec1.com/CA/chula-vista-ca/catalog/index/70755b78039cd652919a0e4ea69d4d56?filter=c2VhcmNoPVNvY2NlciUyMFNraWxscyUyMCUyNiUyMEdhbWVzLVND`

The destination returned both approved soccer class results during verification on 2026-09-17.

## Existing implementation evidence

- Preserve the reference site's core navigation and contact paths.
- Lead with children, community, and growth rather than an empty stadium.
- Present group programs, private coaching, methodology, coaches, mission, FAQ, community support, and contact through a complete responsive information architecture.
- Preserve the existing n8n callback integration and exact payload mapping.
- Treat the current generic callback as evidence only until human ownership, preferred-coach context, routing destinations, and fallback behavior are confirmed.
- Model bookable coaches as managed content that can be added, edited, published, unpublished, or marked unavailable without redesigning the site.
- Keep localhost verification non-transmitting.
- Use a dependency-free static architecture with portable hosting.
- Support system-aware light/dark themes and reduced motion.

## Rejected directions

- Inventing a current winter session date.
- Adding unverified pricing or impact claims.
- Creating a new payment or registration backend.
- Treating automated tests as acceptance.

## Unresolved questions

- Initial bookable-coach roster, verified profile content, specialties, age ranges, service areas, availability, and video assets and permissions.
- Production scheduling and CRM configuration, owned by the separate integration effort.
- Coach-specific booking/callback routes and a general human fallback route.
- Private-session pricing, payment timing, cancellation, rescheduling, and refund policies.
- Authoritative volunteering, sponsorship, and donation destinations.
- Club launch horizon, team/age-group scope, facilities, coaching, subsidy economics, and sponsorship model.
- Hosting and production publication approval.

## Acceptance behavior

- Every public destination loads without horizontal overflow at desktop and 390px mobile.
- Persistent navigation reaches Home, Programs, Private Training, Coaches, About, FAQ, Get Involved, and Contact; mobile navigation opens and closes.
- Images load with reserved dimensions and useful alternative text.
- The callback form validates required fields and shows loading, success, and error states.
- Localhost form tests do not contact the production workflow.
- Dark mode and reduced-motion preferences are honored.
- SEO metadata, canonical URL, sitemap, robots file, and organization structured data are present.
- No stale session date is presented as current.
- Group-registration actions reach the verified City destination and disclose the handoff.
- Every published bookable coach has a stable academy-branded landing page with verified bio, approved accessible video, current availability, direct booking, and human-callback choices.
- Coaches can be added, edited, published, unpublished, and marked unavailable without a site redesign.
- Private-training bookings and callback requests preserve the selected coach context, reach the documented destination or fallback, and show honest success and error states.

## Current evidence

See `evidence/BUILD_RECEIPT-SDSA-001.md`.

## Next checkpoint

Q5 confirms the four founders/members and separates them from the later bookable-coach roster. Q6 approves a provider-neutral prototype and assigns live CRM connection to a separate agent. Review `specs/SDSA-LAUNCH-v1.md` for target approval. Coach content, routing, media, and policy may be supplied later but must be verified before the affected profile is published. Do not change website code, create ads, or spend funds until the target is approved and a bounded Build Assignment is issued.
