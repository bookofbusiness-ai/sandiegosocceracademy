# Specialist Agent Framework

**Status:** Canonical product direction  
**Recorded:** September 16, 2026

## Definition

Specialists are persistent roles with bounded mandates operating over the shared Project Atlas. They may run on demand, in response to material events, or on a schedule. They do not maintain competing project truth stores.

> **One world. Many perspectives.**

## Initial roles

### Implementer
Tracks delivery progress, changes, bugs, blockers, risks, tests, and model/tool/token spend where available.

### Auditor
Inspects code quality, standards, dependencies/packages, API usage, test quality, duplication and technical debt.

### Operations
Observes runtime health, errors, latency, uptime, usage, cost and production anomalies.

### Verifier
Checks adherence to canonical requirements, acceptance criteria, approved scope, project laws and lessons learned from previous loops.

### Architect
Monitors system evolution, coupling, architectural drift, scale constraints, current-vs-target state and modernization opportunities.

## Authority boundary

Specialists may observe, propose, attach evidence, classify and escalate. They do not directly rewrite canonical project truth.

`OBSERVE → PROPOSE → ATTACH EVIDENCE → CLASSIFY → ESCALATE IF NEEDED → GOVERNED PROMOTION`

## Activation

Use both event-driven and scheduled execution.

Examples:

- dependency/package change → Auditor;
- structural change → Architect;
- build completion → Verifier;
- deployment/runtime change → Operations;
- meaningful implementation activity → Implementer;
- weekly health review / monthly architecture review → scheduled runs.

> **Run specialists when the world materially changes, and summarize them on a predictable cadence.**

## Escalation

Finding levels:

- INFORMATIONAL — no action required;
- ATTENTION — should be reviewed;
- BLOCKER — prevents safe progress in the affected governed flow;
- DECISION_REQUIRED — human judgment is needed before proceeding.

Specialists may recommend severity. Governance determines whether work actually stops.

> **Specialists raise the flag. Governance decides what the flag means.**

## Disagreement

Preserve specialist disagreement explicitly. Store each finding, evidence, confidence/freshness, affected Atlas objects, and practical consequence. SpecLoops synthesizes the conflict and asks for a human decision only when needed.

> **Disagreement is signal.**

## Human communication

Default to one synthesized SpecLoops Project Briefing, with specialist detail available for drill-down. The human should not become the program manager for five agents.
