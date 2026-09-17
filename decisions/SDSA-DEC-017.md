# Decision Record: Admin-Only Coach Management

**Decision ID:** `SDSA-DEC-017`
**Recorded:** 2026-09-17
**Status:** `CANONICAL`

## Decision

Coach-management controls are administrative functionality only. Add, edit, preview, publish, unpublish, availability, provider mapping, ordering, and media-management controls must not appear in the public marketing website or public navigation.

The prototype separates two surfaces:

1. **Public website:** read-only presentation of approved founder/member content and appropriately published coach content.
2. **Operator area:** a distinct admin experience for authorized business owners or staff to manage coach records and organization-level booking settings.

## Public-state behavior

- `unpublished`: the coach is absent from the public directory and public routes.
- `published + available`: the public profile and booking action are visible.
- `published + unavailable`: the public profile may remain visible, but booking is disabled and the page offers a human callback or an approved alternative.

## Prototype and production boundary

- The public prototype contains no admin links, edit controls, provider settings, or management actions.
- The operator prototype uses a separate, clearly labeled demo/admin surface and safe local state.
- Production access control, identity, roles, and persistence remain part of the separately owned CRM/integration implementation.
- Production publication must fail closed: unauthenticated users cannot reach management controls, and unpublished coach data cannot be returned through public routes or payloads.
