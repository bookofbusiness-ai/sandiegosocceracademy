# SpecLoops Agent v0.1.9 Prototype Alignment Review

**Recorded:** September 16, 2026  
**Source:** user-provided clickable HTML prototype `specloops-agent-v019-prototype.html`  
**Status:** Product/UX evidence; prototype behavior is simulated and must not be described as shipped hosted functionality.

## Summary

The updated prototype materially aligns with the v0.1.8 Project Atlas model and the v0.1.9 Build Assignment / SDLC Bridge direction.

It now demonstrates a coherent end-to-end product experience rather than a collection of disconnected protocol screens:

`Home → Product Room → Draft Checkpoint → Exact Revision Review → Approval → Build Assignment → Verification Contract → Delivery Adapter → Build Receipt → Human Review → Atlas update`

The prototype also implements the September 16 UX feedback around persistent navigation, contextual help, domain-specific Atlas maps, calmer Campaign hierarchy, friendlier specialist presentation, clearer Gaps/Evidence, and human + AI economics.

## What the prototype now gets right

### 1. Persistent navigation and sense of place

The prototype has a persistent left navigation with Home, Product Room, Project Atlas, Build, Briefing, and secondary destinations. Project identity is visible in the project switcher, route context is shown in breadcrumbs, and Home is explicit rather than discoverable only through the logo.

Product implication:

> A user should always know where they are, which project they are in, how to get Home, and what area they are working in.

### 2. Home as the attention surface

Home now combines Project Briefing content and recommended next action with journey, domain summary, recent changes, and direct links into the relevant work.

This validates the canonical direction:

> Home is the command center for attention and action; Briefing is the deeper synthesis layer.

### 3. Decision readiness separated from persistence and approval

The prototype explicitly separates decision readiness from checkpoint persistence and from approval. This corrects the earlier ambiguity where a single percentage or READY state could imply several different things at once.

Durable rule:

> Decision completion, persistence, approval, implementation, verification, and acceptance are distinct states.

### 4. Project Atlas domains use semantic maps

The prototype no longer uses one generic map for every Atlas domain. Product, User Experience, Architecture, Security, Quality, Operations, and Economics each have domain-specific current-understanding structures.

This is important because the Atlas is not merely a protocol visualization.

> A domain map should show what SpecLoops currently understands about that domain.

The shared reasoning chain remains visible:

`Decided → Exists → Evidence → Gap → Next`

but does not substitute for domain semantics.

### 5. Product Room boundary is visible

Product Room clearly states that it may capture product decisions and prepare drafts but cannot change code, run tests, merge, or deploy.

This matches the founder-set operating boundary for Product Room.

### 6. Build Assignment / Verification Contract / Build Receipt are understandable

The Build surface now leads with human language:

> Prepare work for your coding agent. Review what came back.

Underneath it, the prototype models:

- approved intent;
- Build Assignment;
- Verification Contract;
- execution;
- Build Receipt;
- verification/reconciliation;
- human review.

The Verification Contract distinguishes implementation, behavioral, and conformance proof. The Build Receipt preserves the rule that returned evidence is not human acceptance.

This is strongly aligned to v0.1.9.

### 7. Delivery Adapter remains vendor-neutral

GitHub Pull Request is shown as the default example while GitLab, Jira, and webhook delivery remain alternate transports.

This preserves:

> The transport changes. The execution contract does not.

### 8. Receipt actions produce simulated state changes

Accept Receipt, Return for Correction, and related actions update prototype state, History, Atlas implications, and next actions.

This is the right prototype behavior because the user can now understand the consequences of the decision.

These are still simulated local prototype actions, not proof of hosted Agent capability.

### 9. Specialists are presented as expertise, not AI bureaucracy

The prototype uses friendlier presentation names such as Build guide, Review guide, Quality guide, Operations guide, and Architecture guide while retaining the underlying five-role model and bounded authority.

This is consistent with the UX principle that presentation may soften terminology without changing mandate or authority.

### 10. Efficiency includes human and AI economics

The prototype separates `Your time`, `AI usage & spend`, and `Connections`. All usage/provider/cost data is clearly fictional.

This meaningfully advances the product's economic-value story:

> What am I spending on AI to build this software, and what am I getting for it?

## Remaining gap exposed by the prototype

The prototype is still primarily interaction-driven. It does not yet model SpecLoops proactively keeping its understanding fresh while the user is away.

This creates a product gap between:

- Project Atlas as a living project model;
- Build Receipt / evidence reconciliation;
- Product Room answers that should be grounded in current reality;
- specialist roles that are supposed to run both event-driven and scheduled.

The existing manual/scheduled Memory Review experiment suggests the missing contract is **Continuous Grounding / Project Review Jobs**.

## v0.1.9 alignment recommendation — Continuous Grounding

v0.1.9 should define a first-class **Project Review Job** contract without requiring the portable Core to implement a scheduler.

A Project Review Job should conceptually include:

- project/repository identity;
- trigger: `MANUAL | SCHEDULED | EVENT`;
- cadence or event source where relevant;
- scope/domains;
- sources to inspect;
- specialist role/perspective;
- allowed actions;
- output types;
- last-reviewed timestamp;
- source snapshot/freshness;
- escalation rules;
- resulting Atlas/Briefing attention items.

Default authority should be:

`READ_ONLY + PROPOSE_FINDINGS + NO_CANONICAL_EDITS`

Typical outputs:

- repository/documentation drift;
- contradictions;
- stale decisions;
- undocumented implementation;
- stale evidence;
- changed dependencies;
- missing proof;
- proposed updates;
- recommended next actions.

Durable governance rule:

> **Many sources can propose. Governed flows promote.**

A Project Review Job may update observed/freshness state and create findings/gaps, but it must not silently rewrite canonical product intent.

## Relationship to Build Assignment / Receipt

Continuous Grounding should strengthen rather than replace the main v0.1.9 loop.

```text
Project reality changes
        ↓
Project Review Job / event review
        ↓
Findings + freshness + gaps
        ↓
Project Atlas / Home / Briefing
        ↓
Product Room decision
        ↓
Build Assignment + Verification Contract
        ↓
Execution
        ↓
Build Receipt
        ↓
SpecLoops reconciliation
        ↓
Project Atlas
```

This makes Product Room more useful because it can answer from a recently reconciled project model instead of rediscovering the world every time.

## Core vs hosted-Agent boundary

Portable v0.1.9 Core should define:

- Project Review Job semantics;
- trigger classes;
- authority defaults;
- finding/freshness outputs;
- Atlas/Briefing reconciliation;
- interaction with specialists and Build readiness.

Hosted Agent implementation may later provide:

- scheduler infrastructure;
- event subscriptions/webhooks;
- background workers;
- provider polling;
- notification delivery;
- recurring specialist execution;
- automatic briefing refresh.

Do not make scheduler infrastructure itself a v0.1.9 Core release requirement.

## Product framing

Candidate user-facing terminology remains open:

- Project Pulse
- Project Reality Review
- Project Health Review

Avoid making `Memory Review` the final UX label unless later testing supports it.

Strong product framing:

> **SpecLoops should not only remember where the project was when you last talked to it. It should notice when the world changed while you were away.**

## Status conclusion

The prototype is substantially aligned with the current product canon and gives concrete UX evidence for the v0.1.9 plan.

The remaining conceptual alignment needed before handing v0.1.9 context to Agent Builder is to add the Project Review Job / Continuous Grounding contract to the v0.1.9 plan and release-train docs while keeping v0.1.9 in planning status.

No application implementation is authorized by this record.
