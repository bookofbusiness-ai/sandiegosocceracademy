# Project Atlas Product Specification

**Status:** Canonical product direction  
**Recorded:** September 16, 2026  
**Decision set:** 28/28 required decisions resolved

## Product thesis

Project Atlas is the living model of a SpecLoops project: what humans decided, what actually exists, what proves it, where the gaps are, and what should happen next.

> **Decided → Exists → Evidence → Gap → Next**

Atlas is not merely a requirements document, dashboard, wiki, or generated report. It is the shared substrate beneath Product Room, Build Room, Campaigns, Specialist Agents, verification, project briefings, and future enterprise reporting.

> **One world. Many perspectives.**

## Stable domain backbone

Every Atlas uses a familiar top-level backbone while project-specific subsections are dynamic:

1. Product
2. User Experience
3. Design
4. Architecture
5. Engineering
6. Security & Privacy
7. Quality
8. Operations / Observability
9. Economics / Business Model
10. Campaigns / Path Forward

The system should not force every project into identical detail. Domains are stable; subsections are contextual.

## Primary unit: Atlas Object

Atlas is object-first, not page-first. Documents and dashboards are views over structured objects.

Illustrative fields:

- id
- type
- domain
- title / description
- intent
- observed_state
- lifecycle_state
- severity / priority
- source / provenance
- confidence / freshness
- evidence[]
- dependencies[]
- related_objects[]
- campaign_id / quest_id / spec_id
- gap
- recommended_next_action
- created_at / updated_at / verified_at

Initial object types may include Requirement, Decision, Finding, Gap, Risk, ArchitectureElement, Evidence, AcceptanceCriterion, Dependency, Constraint, Recommendation, and RuntimeObservation.

## Governed lifecycle

Default lifecycle:

`PROPOSED → REVIEWED → CANONICAL → IMPLEMENTED → VERIFIED`

Side states:

`BLOCKED | NEEDS_REVIEW | STALE | SUPERSEDED | REJECTED | DEFERRED`

> **Verification is versioned confidence, not eternal truth.**

A previously verified object may become STALE or NEEDS_REVIEW after material change to implementation, dependencies, architecture, runtime behavior, evidence, or product intent. History remains intact.

## Provenance

Every meaningful Atlas object must answer:

- who or what asserted this?
- based on what evidence?
- when?
- against what version of reality?
- how confident/fresh is the assertion?

Sources may include human decisions, Product Room, Build Room, repo inspection, runtime telemetry, specialists, and imported documents.

> **No important project truth without provenance.**

## Gap Objects

When intent and observed reality disagree, do not silently reconcile them. Create an explicit Gap Object containing intended state, observed state, evidence, confidence/freshness, impact, affected dependencies, recommended next action, and whether a human decision is required.

> **Intent and reality can disagree without either automatically being declared wrong.**

## Proposal and promotion

Many sources may propose Atlas objects, but only governed flows may promote them into canonical truth.

- Proposal ≠ canon.
- Finding ≠ decision.
- Evidence ≠ authority.

Human edits are allowed, but material edits are governed: preserve provenance/history, recalculate dependencies, and mark affected objects NEEDS_REVIEW when warranted.

## Source-of-truth boundaries

Use explicit authority by data class:

- Repository: durable approved specs, project artifacts, portable project brain and product intent.
- SpecLoops service: orchestration/session/campaign state, permissions, indexes, synthesized views, specialist run state and notifications.
- GitHub: commits, branches, PRs and code reality.
- Observability systems: runtime metrics/incidents.
- Deployment provider: deployment state.
- Billing/usage provider: actual cost and usage state.
- Specialist agents: their own evidence-backed findings only; never sole authority over project truth.

> **SpecLoops aggregates truth; it does not impersonate the systems that own it.**

## Hybrid storage

The repository remains the durable portable project brain. The hosted service makes that brain operational through indexing, views, timelines, permissions, scheduling, synthesis, and cross-system observation.

> **The repo carries the project brain. The service makes that brain operational.**

## Views

One underlying model may render as Attention, Executive, Requirements, Product, Architecture, Security, Quality, Operations, Campaign, Roadmap, Dependency Graph, Risks & Gaps, Evidence, and History views.

> **One model. Many views.**

No duplicate specialist truth stores.

## Homepage

The Atlas homepage optimizes for attention and action, not completeness. It should quickly answer:

- what changed?
- what needs attention?
- what is blocked?
- what requires my decision?
- what became stale?
- what materially changed in repo/runtime?
- what should happen next?

The deep project map is one click deeper.

## Status

Use per-object state plus domain rollups. Do not invent a single fake project-health percentage. Domains may roll up to HEALTHY, ATTENTION, BLOCKED, UNKNOWN, or STALE while underlying objects retain precise reasons and evidence.

## Time

Present a clear current state plus a historical timeline so the user can answer both “what is true now?” and “how did we get here?” without Git archaeology.

## Permissions

Use role + object/action authority. Example roles: Viewer, Contributor, Product Owner, Implementer, Auditor, Security Reviewer, Administrator. Sensitive actions such as promote-to-canonical, approve implementation, change authority, close blockers, approve release readiness, override risk, or change policy require explicit permission.

> **Role defines the lane. Authority defines the action.**

## Existing projects

Existing projects initialize through Reality-First Reconstruction:

`Connect → inspect repo/docs/architecture/runtime → build provisional Atlas → mark OBSERVED/INFERRED/UNKNOWN → ask only material unresolved questions → human confirms/corrects → governed promotion → begin/resume campaign`

> **Reality Before Reconstruction.**

## Net-new projects

Session Zero builds the Atlas progressively from idea through outcome, users, MVP boundary, core experience, architecture, security, acceptance, buildability, and prototype. Do not create a 200-question intake.

> **Ask until buildable, not exhaustive.**

## Relationship to Rooms

Product Room is the conversational decision surface over Atlas. Build Room receives exact canonical requirements, protected baseline, affected dependencies and acceptance criteria, then returns implementation evidence, observed state, verification results, findings and gaps. Build Result Reconciliation must update Atlas state before suggesting stale work.

## Product success test

The Atlas succeeds when it helps the human make a better next decision with less effort. Completeness and presentation are secondary to decision usefulness.
