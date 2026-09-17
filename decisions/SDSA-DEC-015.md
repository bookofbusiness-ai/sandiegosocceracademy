# Decision Record: Business-Level Booking Provider Configuration

**Decision ID:** `SDSA-DEC-015`
**Recorded:** 2026-09-17
**Status:** `CANONICAL_CORRECTION`
**Corrects:** the per-coach provider interpretation in `SDSA-DEC-014`

## Decision

Booking-provider configuration belongs to the business owner at the organization level, not to individual coaches. A business connects one booking engine for its account. Every bookable coach within that business uses the same selected provider and shared integration architecture.

The platform may support several provider adapters so different businesses can choose the system they already use, such as Cal.com, Calendly, a Google Calendar appointment-schedule implementation, or another supported provider. One business must not mix independent booking engines across its coaches.

## Data boundary

Organization-level configuration contains:

- selected provider type;
- connection or embed configuration;
- organization-wide booking and callback behavior;
- integration status and fallback mode.

Coach-level configuration contains only the mapping needed inside that shared provider, such as a provider-side user, resource, calendar, event type, or booking-route identifier. Coaches do not choose or authenticate separate providers.

## Prototype implication

The prototype demonstrates an owner-level `Booking settings` state and one provider applied consistently across every coach page. Provider switching is demonstrated at the business level. The prototype does not maintain multiple live scheduling engines or production credentials.

The existing CRM connection remains a separately owned integration. This build supplies the organization configuration, coach mapping, UI behavior, and handoff contract without overwriting the CRM's production schema or credentials.
