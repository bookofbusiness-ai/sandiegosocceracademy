# Canon Reconciliation

**Project:** San Diego Soccer Academy website  
**SpecLoops Core:** `v0.1.9-beta RC1`, not released  
**Recorded:** 2026-09-17

## Source authority

| Source | Authority class | Relationship | Result |
| --- | --- | --- | --- |
| User request in this campaign | Human direction | `CANONICAL` | Rebuild the nonprofit site and install the v0.1.9 release candidate. |
| Empty GitHub repository | Code reality at start | `PRESERVED` | No prior repository implementation or history required preservation. |
| Supplied Replit site | Reference implementation/content | `REFINED` | Core content, contacts, form integration, navigation, and program model carried forward. |
| Replit "Winter 2026" date | Time-sensitive reference content | `STALE` | Removed from the rebuilt public copy pending confirmation. |
| Existing n8n webhook | Operational integration | `PRESERVED` | Endpoint and payload mapping retained; no production test submission was sent. |
| Rebuilt application commit `5ae799a` | Current implementation evidence | `OBSERVED_CURRENT` | Current local application reality. |
| Initial rebuild target | Earlier campaign direction | `REFINED` | The rebuild remains desired, but implementation is paused until the new enrollment and club strategy is governed. |
| Upcoming class and low sign-ups | New human direction | `CANONICAL_PROBLEM` | Establishes the urgent enrollment problem; exact offer facts remain unresolved. |
| Affordable subsidized club | Human hypothesis | `PROPOSED` | Explore boys' and girls' age-group teams, sponsorships, and lower family cost without advertising them as available yet. |
| Two-track campaign | Human-approved SpecLoops recommendation | `CANONICAL` | Separate the immediate class conversion path from club-model discovery while keeping one nonprofit mission. |
| User-supplied City class screenshots | Direct offer evidence | `OBSERVED_CURRENT` | Establish two class names, ages, times, location, displayed dates, price, registration window, and capacity. The year and live enrollment are not visible. |
| City of Chula Vista Fall 2026 program guide and catalog | Current official web source | `CORROBORATING` | Supports the 2026 inference and identifies the current registration system; it does not expose a verified direct class URL in the inspected result. |
| Human class-offer confirmation | Direct human authority | `REFINED` | Confirms 2026 and keeps final registration on the City's public website; its earlier internal floor of 6 is superseded. |
| Academy-site versus direct-City ads | Human-approved test structure | `CANONICAL` | Evaluate two otherwise comparable ads with destination as the controlled variable; operating parameters remain unresolved. |
| 30-mile targeting radius | Direct human authority | `CANONICAL` | Center the approved acquisition test on Salt Creek Park and include families within 30 miles. |
| $200 advertising cap | Direct human authority | `CANONICAL` | Limit total spend across both destination variants to $200. |
| 10-day equal allocation | Direct human authority | `CANONICAL` | Allocate $10 per day to each destination variant for 10 days. |
| Fixed enrollment threshold | Direct human authority | `REJECTED` | Retire the internal threshold of 6 and evaluate registrations without a fixed minimum target. |
| Adult advertising audience | Direct human authority | `CANONICAL` | Target adults ages 25-65+, all genders, within 30 miles; include grandparents and do not directly target minors. |
| Factual class advertising promise | Direct human authority | `CANONICAL` | Advertise only the approved ages, Wednesday schedule, Salt Creek location, dates, prices, and City registration boundary. |
| Privacy-light measurement | Direct human authority | `CANONICAL` | Use aggregate Meta statistics, anonymous academy signup-click counts, and City registrations without Meta Pixel, ad cookies, visitor profiles, or academy-site personal-data transmission. |
| Filtered City catalog destination | Verified public system evidence | `OBSERVED_CURRENT` | A shareable search-filter URL returns both approved soccer classes and is the approved handoff destination for the website and direct ad variant. |
| Current public academy website | Public content evidence | `PRESERVED_AND_REFINED` | Establishes the broader organizational inventory: programs, method, four coach profiles, story, values, volunteering/donation concepts, FAQ, and contact. Time-sensitive facts still require confirmation. |
| Replit private-coaching experience | Reference implementation/content | `REFINED` | Establishes private training as a primary service, coach profiles and direct coach contacts, and a generic callback flow. It does not implement or prove preferred-coach routing. |
| Repository prototype | Pre-SpecLoops implementation evidence | `INCOMPLETE_TARGET` | Contains three coach profiles and omits the public site's complete About, FAQ, and support structure; it must not define the final information architecture by itself. |
| Full-site, two-pathway rebuild | Direct human authority | `CANONICAL` | Preserve the complete public website while separating City-registered group training from coach-selected private-training inquiries. |
| Four current founders/members | Direct human authority | `CANONICAL` | Jason Taylor, Jeff Taylor, Ashley Hernandez-Cavanagh, and Greg Coco are current founders/members; this does not establish current private-coaching availability. |
| Managed bookable-coach experience | Direct human authority | `CANONICAL_CAPABILITY` | Support a later-supplied roster of available coaches, each with an academy-branded page containing verified bio, availability, social-proof video, direct booking, and human callback. |
| Provider-neutral prototype | Direct human authority | `REFINED_BY_SDSA-DEC-015` | Cal.com is an example only. Support multiple provider adapters, with selection occurring once per business rather than once per coach. |
| Business-level booking provider | Direct human correction | `CANONICAL` | Each business owner connects one booking engine for the organization; every coach inherits it through provider-side mapping. Do not mix booking engines within one business. |
| Existing CRM connection | Parallel implementation ownership | `PRESERVED_EXTERNAL_SCOPE` | This build documents the UI/data/event handoff; another agent owns live CRM wiring and production persistence. |
| Coach-management surface | Direct human authority | `CANONICAL` | Add/edit/preview/publish/unpublish/availability and booking-provider controls are admin-only; the public marketing site is read-only and cannot expose unpublished coach data. |
| Project Context and Working Spec | Project-owned state | `CANONICAL` for current campaign state | Defines the observed facts, proposals, boundaries, and unresolved decisions. |

## Conflicts and gaps

- The reference site gives a past session start date but no verified next date.
- The reference includes volunteer, donate, and sharing concepts but no donation destination.
- Coach affiliations are carried from the reference and require launch confirmation.
- Production hosting and DNS state are outside the repository and have not been changed.
- The relative phrase "starting in a month" is not a safe public date and requires an exact date.
- The class and future club could need different offers, audiences, economics, and conversion paths.
- No authoritative club plan, team availability, sponsorship commitment, or subsidy level exists yet.
- The screenshots omit the year, but the user confirmed 2026.
- The City listing displays a minimum of 12. It remains external source information and is not used as the campaign's success threshold.
- No item-specific permanent class URL is exposed, but a browser-verified filtered City catalog URL returns both approved class listings.
- The current public site shows four people as coaches, while the Replit reference and repository prototype show three. All four are confirmed founders/members, but the initial roster available for private coaching remains deferred.
- The Replit callback form is generic. It does not demonstrate the requested coach selection, coach-specific routing, or a fallback route.
- The public site contains FAQ, About, volunteering, and donation concepts that the repository prototype does not fully preserve.

## Current canon

The nonprofit relaunch and the intent to improve access are current. The rebuild covers the complete website, not only the homepage. It has two primary pathways: park-district group training hands off to the verified City catalog, while private-training families browse a managed roster of coaches currently available for private sessions. Each available coach receives an academy-branded page with verified biography, approved social-proof video, current availability, a booking action, and a human-callback alternative. Jason Taylor, Jeff Taylor, Ashley Hernandez-Cavanagh, and Greg Coco are founders/members; none is implicitly bookable. The prototype supports multiple calendar/booking adapters at the platform level, but the business owner selects one engine for the organization and all coaches inherit it through provider-side mappings. It documents a contract for the separately owned CRM connection. The initial bookable roster, profile assets, policies, and live routing remain later publication or integration gates. The current repository website is unaccepted and incomplete prototype evidence. The acquisition-test decisions remain approved. The subsidized club remains a separate proposed strategic direction. The named prototype target is ready for human approval; implementation authority remains `NONE`.
