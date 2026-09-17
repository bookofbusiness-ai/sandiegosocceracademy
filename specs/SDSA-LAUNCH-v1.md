# SDSA 2026 Class Relaunch — Named Target Revision

**Revision:** `SDSA-LAUNCH-v1`
**Status:** `PROPOSED_NEEDS_CONTENT_RECONCILIATION`
**Prepared:** 2026-09-17
**Implementation authority:** `NONE`

## Outcome

Relaunch San Diego Soccer Academy as a complete nonprofit website with two clear pathways: group-training families understand the Fall 2026 park-district classes and register through the City of Chula Vista; private-training families compare verified coaches, select a preferred coach, and send an inquiry that can be routed accordingly.

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
- Let families review verified coach profiles, select a preferred coach, and submit a private-training inquiry routed to that coach or a documented fallback.
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

`Homepage or Private Training -> coach profiles -> preferred coach selection -> inquiry -> coach-specific or documented fallback routing`

This path is informed by the Replit private-coaching model but improves it by making coach choice and routing explicit. The current generic callback workflow may be reused only after its payload and routing behavior are verified against this target.

## Full-site content requirements

- **Home:** communicate the nonprofit mission and the two pathways without making private training compete with the urgent class action.
- **Programs:** show verified group-training options, methodology, current schedule, prices, location, and City-registration boundary.
- **Private Training:** explain the service, set honest expectations, and lead into coach selection and inquiry.
- **Coaches:** provide verified profiles, qualifications, specialties, availability or service area only where confirmed, and a clear private-training inquiry action.
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
- Add verified coach profiles, preferred-coach selection, coach-aware inquiry routing, and a documented fallback route.
- Add anonymous aggregate signup-click measurement without personal data or advertising cookies.
- Prepare two placement-ready ad creative variants with equivalent claims and different destinations.
- Verify responsive behavior, accessibility, content accuracy, destination behavior, privacy boundary, and performance.

## Out of scope

- Production deployment or DNS changes.
- Publishing ads or spending funds.
- Meta Pixel, advertising cookies, custom audiences, or direct targeting of minors.
- A registration, payment, player-account, or CRM system.
- Publishing the proposed club as an available program.
- Fabricated availability, urgency, discounts, scholarships, results, or impact claims.

## Acceptance criteria

1. Homepage priority and mobile priority are the Fall 2026 class offer and `Sign up now` action.
2. Both age-group offers, schedules, dates, location, and prices match this revision.
3. All class-registration actions use the verified filtered City catalog URL and disclose the City handoff.
4. Home, Programs, Private Training, Coaches, About, FAQ, Get Involved, and Contact are complete, linkable, and reachable through persistent responsive navigation.
5. Private-training families can select a verified coach and submit an inquiry; successful routing and the fallback path are documented and tested without sending unauthorized production submissions.
6. Every published coach name, title, credential, affiliation, biography, email, and routing destination has human-confirmed authority.
7. About, FAQ, support, and contact content is preserved or improved from the current public site; no unsupported donation transaction or quantitative claim is introduced.
8. The proposed club is not presented as available.
9. No Meta Pixel, advertising cookies, visitor profiles, uploaded contact lists, or unnecessary new personal-data fields are introduced.
10. Anonymous signup-click measurement contains no personal data and is documented.
11. Two equivalent ad creative variants are prepared but not published; destination is the controlled variable.
12. The $200 cap, 10-day duration, 30-mile radius, and adults 25-65+ audience are represented accurately in the campaign handoff.
13. Automated responsive, accessibility, link, syntax, routing, and performance checks pass.
14. Human preview acceptance remains required before deployment or ad launch.

## Approval effect

This revision is not approval-ready until the coach roster, profile facts, inquiry-routing destinations, fallback routing, and support/donation destinations are reconciled. Later human approval will make it the canonical target revision and authorize preparation of a bounded Build Assignment and Verification Contract. It will not by itself authorize production deployment, advertising publication, or spending.
