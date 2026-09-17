# SDSA Full-Site Relaunch and 2026 Class Campaign — Named Target Revision

**Revision:** `SDSA-LAUNCH-v1`
**Status:** `PROPOSED_NEEDS_CONTENT_RECONCILIATION`
**Prepared:** 2026-09-17
**Implementation authority:** `NONE`

## Outcome

Relaunch San Diego Soccer Academy as a complete nonprofit website with two clear pathways: group-training families understand the Fall 2026 park-district classes and register through the City of Chula Vista; private-training families browse coaches currently available for private sessions, visit an individual academy-branded booking page, and either reserve a session or request a human callback.

## Public offer

- **Ages 6-9:** Intro Soccer Skills & Games-SC, Wednesdays 4:30-5:30 PM.
- **Ages 10-14:** Beginner II Soccer Skills & Games-SC, Wednesdays 5:30-6:30 PM.
- **Dates:** October 7-December 2, 2026; no class November 25.
- **Location:** Salt Creek Park Soccer Arena, 2710 Otay Lakes Road, Chula Vista, CA 91915.
- **Price:** $85 resident / $106 non-resident.
- **Registration:** City of Chula Vista filtered catalog destination recorded in `SDSA-DEC-011`.

## Website target

- Make the Fall 2026 class offer and `Sign up now` action the homepage's primary path.
- Present both age-group classes clearly before the registration handoff.
- Explain that registration is completed on the City's website and may require an account.
- Present private training as a parallel service path, not as a park-district registration flow.
- Present the four confirmed founders/members as organizational leaders without implying that they are currently available for private coaching.
- Maintain a separately managed directory of coaches currently available for private sessions.
- Give each published private coach a stable academy-branded landing page with a verified bio, specialties and service details, current availability, approved social-proof video, direct booking, and human-callback option.
- Allow authorized site operators to add, edit, publish, unpublish, and mark a private coach unavailable without redesigning the site.
- Preserve the nonprofit access, confidence, discipline, belonging, story, values, and community-support mission.
- Preserve or improve the full information architecture: Home, Programs, Private Training, Coaches, About, FAQ, Get Involved, and Contact.
- Give each major destination a distinct, linkable route or equivalent clearly separated destination with persistent responsive navigation.
- Do not advertise the proposed club as available; club discovery remains a separate track.
- Do not display a fixed internal enrollment target.
- Do not publish unverified coach credentials, affiliations, response-time promises, quantitative impact claims, private-training prices, or donation destinations.
- Preserve accessible responsive behavior, honest loading/error states, and mobile usability.

## Pathway model

### Group training

`Homepage or Programs -> current class details -> Sign up now -> verified City catalog`

This path uses the approved 2026 offer and makes the external City handoff explicit.

### Private training

`Homepage or Private Training -> available coach directory -> coach booking page -> reserve a session or request a human callback`

This path is informed by the Replit private-coaching model but improves it with managed availability, individual booking pages, explicit appointment booking, and a human fallback. The current generic callback workflow may be reused only after its ownership, payload, coach context, routing behavior, and fallback are verified against this target.

## Full-site content requirements

- **Home:** communicate the nonprofit mission and the two pathways without making private training compete with the urgent class action.
- **Programs:** show verified group-training options, methodology, current schedule, prices, location, and City-registration boundary.
- **Private Training:** explain the service, set honest expectations, and lead to the directory of coaches currently available for private sessions.
- **Founders/Members:** present Jason Taylor, Jeff Taylor, Ashley Hernandez-Cavanagh, and Greg Coco as organizational leadership without equating membership with private-coaching availability.
- **Available Coaches:** provide a managed directory with verified summaries and clear links to individual booking pages.
- **Coach booking page:** provide verified profile content, approved accessible social-proof video, current availability, direct booking, and human-callback options.
- **About:** preserve the organization story, vision, values, access mission, and nonprofit identity.
- **FAQ:** answer current questions about ages, skill levels, session format, locations, registration, private-training inquiries, nonprofit status, and contact.
- **Get Involved:** preserve volunteering, community partnership, sponsorship, sharing, and donation concepts without inventing an unavailable transaction path.
- **Contact:** provide verified general contact details and a safe fallback for inquiries that are not coach-specific.

## Advertising target

- Two destination variants with otherwise equivalent creative, audience, schedule, and budget.
- Variant A: ad -> academy class experience -> City registration.
- Variant B: ad -> City registration directly.
- Audience: adults ages 25-65+, all genders, within 30 miles of Salt Creek Park; relevant to parents, guardians, and grandparents; do not directly target minors.
- Duration: 10 days.
- Spend: $10 per variant per day; hard total cap $200.
- Approved promise: Fall soccer classes for ages 6-14; Wednesday skill-building sessions at Salt Creek Park; October 7-December 2; $85 residents / $106 non-residents; registration through the City.

## Measurement and privacy

- No Meta Pixel or advertising cookies.
- No visitor profiles, uploaded contact lists, child targeting, or added family-data collection.
- Use aggregate Meta statistics and anonymous academy `Sign up now` click counts.
- Use City registration totals as final outcome evidence.
- Evaluate registrations and cost per attributable registration without a fixed enrollment threshold.

## In scope for a future Build Assignment

- Rebuild or revise the existing static website against this target.
- Add the approved class content, full-site information architecture, calls to action, and City handoff.
- Add distinct founder/member profiles and a managed directory of bookable private coaches.
- Add individual academy-branded coach pages, verified profile/video content, availability, direct booking, coach-aware callback routing, and a documented human fallback.
- Add anonymous aggregate signup-click measurement without personal data or advertising cookies.
- Prepare two placement-ready ad creative variants with equivalent claims and different destinations.
- Verify responsive behavior, accessibility, content accuracy, destination behavior, privacy boundary, and performance.

## Out of scope

- Production deployment or DNS changes.
- Publishing ads or spending funds.
- Meta Pixel, advertising cookies, custom audiences, or direct targeting of minors.
- A first-party park-district registration system, player account system, or CRM.
- A first-party scheduling or payment engine unless separately approved; connected scheduling may be used after Q6.
- Publishing the proposed club as an available program.
- Fabricated availability, urgency, discounts, scholarships, results, or impact claims.

## Acceptance criteria

1. Homepage priority and mobile priority are the Fall 2026 class offer and `Sign up now` action.
2. Both age-group offers, schedules, dates, location, and prices match this revision.
3. All class-registration actions use the verified filtered City catalog URL and disclose the City handoff.
4. Home, Programs, Private Training, Coaches, About, FAQ, Get Involved, and Contact are complete, linkable, and reachable through persistent responsive navigation.
5. Founder/member profiles and bookable-coach status are separate; no founder is shown as available solely because of organizational membership.
6. Authorized operators can add, edit, publish, unpublish, and mark a coach unavailable without redesigning the site.
7. Every published available coach has a stable academy-branded page with verified biography, approved accessible social-proof video, current availability, direct booking, and human-callback options.
8. Booking and callback flows preserve the selected coach context; successful routing and fallback behavior are documented and tested without unauthorized production submissions.
9. Every published coach name, title, credential, affiliation, biography, specialty, service area, video, email, calendar source, and routing destination has human-confirmed authority and appropriate permissions.
10. About, FAQ, support, and contact content is preserved or improved from the current public site; no unsupported donation transaction or quantitative claim is introduced.
11. The proposed club is not presented as available.
12. No Meta Pixel, advertising cookies, visitor profiles, uploaded contact lists, or unnecessary new personal-data fields are introduced.
13. Anonymous signup-click measurement contains no personal data and is documented.
14. Two equivalent ad creative variants are prepared but not published; destination is the controlled variable.
15. The $200 cap, 10-day duration, 30-mile radius, and adults 25-65+ audience are represented accurately in the campaign handoff.
16. Automated responsive, accessibility, link, syntax, routing, and performance checks pass.
17. Human preview acceptance remains required before deployment or ad launch.

## Approval effect

This revision is not approval-ready until the scheduling architecture and coach-management approach are selected in Q6. The initial bookable roster, profile and video facts, booking/callback destinations, private-session policies, and permissions may be supplied later, but each remains a publication gate for the affected coach page. Later human approval will make this the canonical target revision and authorize preparation of a bounded Build Assignment and Verification Contract. It will not by itself authorize production deployment, advertising publication, or spending.
