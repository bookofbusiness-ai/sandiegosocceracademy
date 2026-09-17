# Decision Record: Provider-Neutral Booking Prototype and CRM Boundary

**Decision ID:** `SDSA-DEC-014`
**Recorded:** 2026-09-17
**Status:** `SUPERSEDED_IN_PART_BY_SDSA-DEC-015`

## Decision

The private-coach prototype will be scheduling-provider neutral. Cal.com is an example, not a required dependency. The business owner selects one provider for the organization, including:

- a Google Calendar appointment-schedule link;
- Calendly;
- Cal.com;
- another trusted booking URL or embeddable scheduler;
- callback-only mode; or
- temporarily unavailable organization status.

The earlier per-coach provider interpretation is superseded. Individual coaches inherit the business's selected booking engine and carry only the provider-side mapping needed to display their own availability.

The prototype will demonstrate the complete experience and the capability to add and manage coaches without implementing a production scheduling engine. It will provide a stable integration contract so a separately owned CRM implementation can replace the prototype data and connect live workflows later.

## Prototype contract

Each coach record supports:

- stable ID and URL slug;
- publication and private-availability status;
- verified profile, specialties, age ranges, session formats, service area, image, and accessible social-proof video;
- provider-side coach, resource, calendar, event-type, or route identifier;
- coach availability and publication status;
- human-callback route and general fallback;
- display order and timestamps.

The prototype demonstrates add, edit, preview, publish, unpublish, and unavailable states using safe prototype data. It documents the fields and interaction events expected by the future CRM integration.

## Ownership boundary

- This build owns the user experience, prototype state, provider-neutral booking adapter, responsive behavior, and integration documentation.
- Another agent owns connection to the existing CRM platform.
- The prototype must not assume or overwrite the CRM's final schema, credentials, authentication, routing, or production data.
- No live calendar OAuth, production coach accounts, production CRM writes, payments, or real appointment creation are required for prototype acceptance.
- Live connection work must preserve the selected-coach context, human-callback fallback, privacy boundary, and published/unpublished controls defined here.
