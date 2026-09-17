# Decision Record: Provider-Neutral Booking Prototype and CRM Boundary

**Decision ID:** `SDSA-DEC-014`
**Recorded:** 2026-09-17
**Status:** `CANONICAL`

## Decision

The private-coach prototype will be scheduling-provider neutral. Cal.com is an example, not a required dependency. Each published coach can be configured with the easiest appropriate option, including:

- a Google Calendar appointment-schedule link;
- Calendly;
- Cal.com;
- another trusted booking URL or embeddable scheduler;
- callback-only mode; or
- temporarily unavailable status.

The prototype will demonstrate the complete experience and the capability to add and manage coaches without implementing a production scheduling engine. It will provide a stable integration contract so a separately owned CRM implementation can replace the prototype data and connect live workflows later.

## Prototype contract

Each coach record supports:

- stable ID and URL slug;
- publication and private-availability status;
- verified profile, specialties, age ranges, session formats, service area, image, and accessible social-proof video;
- booking mode: `external_link`, `embed`, `callback_only`, or `unavailable`;
- provider label and booking URL when applicable;
- human-callback route and general fallback;
- display order and timestamps.

The prototype demonstrates add, edit, preview, publish, unpublish, and unavailable states using safe prototype data. It documents the fields and interaction events expected by the future CRM integration.

## Ownership boundary

- This build owns the user experience, prototype state, provider-neutral booking adapter, responsive behavior, and integration documentation.
- Another agent owns connection to the existing CRM platform.
- The prototype must not assume or overwrite the CRM's final schema, credentials, authentication, routing, or production data.
- No live calendar OAuth, production coach accounts, production CRM writes, payments, or real appointment creation are required for prototype acceptance.
- Live connection work must preserve the selected-coach context, human-callback fallback, privacy boundary, and published/unpublished controls defined here.
