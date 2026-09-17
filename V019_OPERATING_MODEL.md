# SpecLoops v0.1.9 Operating Model

## Purpose

v0.1.9 connects project reconstruction, evolving canon, architecture synthesis, and governed execution into one path toward working software.

The default existing-project journey is:

```text
Recognize existing project / SpecLoops state
        ↓
Reality-first repository reconstruction
        ↓
Canon retrieval + Temporal Canon Reconciliation
        ↓
Project Atlas bootstrap
        ↓
Show known / unresolved / conflicting / stale
        ↓
Ask only material missing decisions
        ↓
Architecture Review OR Architecture Synthesis
        ↓
Project Blueprint
        ↓
Human approval of target state
        ↓
Build Assignment + Verification Contract
        ↓
Delivery Adapter / execution
        ↓
Build Receipt
        ↓
Verification + human review
        ↓
Atlas update / Continuous Grounding
```

## Existing-project behavior

A project with existing SpecLoops artifacts is not a new blank project.

Before inquiry:

1. identify project-local SpecLoops version/state;
2. inspect `SPECLOOPS_STATE`, Project Context, Working Spec, Question Ledger, named revisions, history, handoffs and evidence;
3. inspect controlling original product/architecture/security/UX materials;
4. follow revision ancestry rather than treating only the latest file as self-contained;
5. distinguish historical DRAFT evidence from approved authority;
6. reconcile later governed human decisions against older controlling material;
7. recover the exact current cursor where possible;
8. only then formulate the next material question.

## Canon Before Inquiry

Questions are classified:

`ANSWERED | PARTIAL | CONFLICT | UNRESOLVED`

- **ANSWERED** → carry current canon forward; do not ask again.
- **PARTIAL** → state what is known and ask only the missing judgment.
- **CONFLICT** → show competing sources and downstream impact; ask only when precedence/supersession cannot resolve it.
- **UNRESOLVED** → ask the human.

## Temporal Canon Reconciliation

When sources differ across time, classify the relationship:

`PRESERVED | REFINED | SUPERSEDED | REJECTED | CONFLICT | STALE | UNKNOWN`

Rules:

- recency is evidence, not authority;
- a newer summary does not erase an older controlling requirement;
- an explicit later governed human decision may supersede earlier intent;
- conversation alone does not become canon;
- implementation drift does not rewrite intent;
- superseded material remains historical evidence;
- stale handoffs must not control the current resume cursor;
- unresolved conflicts remain visible.

For materially evolved projects, create a Canon Reconciliation Report or equivalent synthesis.

## Project Atlas

Atlas is the shared living project model.

Every material object should be able to express:

- intent/current value;
- lifecycle/state;
- source and provenance;
- authority class;
- freshness;
- temporal relationship/supersession;
- observed implementation/evidence;
- gaps;
- dependencies;
- recommended next action.

Core chain:

> **Decided → Exists → Evidence → Gap → Next**

## Architecture Review and Synthesis

Distinguish:

- **Observed architecture** — what exists now;
- **Documented/approved target architecture** — governed existing target;
- **Proposed architecture** — SpecLoops recommendation where gaps remain.

If architecture exists, review/map it first. Do not reflexively invent a greenfield stack.

If a material architecture area is absent, synthesize a recommendation grounded in product requirements, security/privacy, scale, economics, team context, integrations and existing constraints.

Recommendations remain `PROPOSED` until human approval.

## Project Blueprint

The Blueprint is a rendered synthesis of reconciled Atlas state, not a second source of truth.

Expected sections:

1. executive summary;
2. product model;
3. functional requirements;
4. experience model;
5. architecture;
6. data model;
7. security/privacy;
8. integrations;
9. quality/verification;
10. deployment/operations;
11. known gaps/unknowns/conflicts;
12. recommended path to build;
13. build-readiness summary;
14. canon/evolution notes when project history materially changed the target.

The Blueprint is a transition artifact, not the finish line.

## Build Assignment

An approved target state may produce a bounded Build Assignment containing:

- exact approved spec/revision/hash;
- desired outcome;
- in/out scope;
- protected baseline;
- repository/ref expectations;
- Atlas objects/gaps/dependencies;
- acceptance criteria;
- implementation authority;
- Verification Contract;
- return condition.

## Verification Contract

Proof is defined before execution.

Three proof classes:

- **Implementation proof** — what changed;
- **Behavioral proof** — whether it behaves as specified;
- **Conformance proof** — whether it follows project/org constraints.

Policy may inherit:

`Organization → Project → Campaign → Quest/Spec → Build Assignment`

## Build Receipt

Returned evidence is assembled into a Build Receipt using builder-provided evidence plus independent/trusted evidence where available.

Use honest states:

`PASS | FAIL | NOT_RUN | BLOCKED | REVIEW_NEEDED`

> **Coding completion is not human acceptance.**

## Delivery Adapter

Build Assignment and Build Receipt are vendor-neutral. GitHub PR may be a proving-ground adapter, but transport does not define the protocol.

> **The transport changes. The execution contract does not.**

## Continuous Grounding

Project Review Jobs may be:

`MANUAL | SCHEDULED | EVENT`

Default authority:

`READ_ONLY + PROPOSE_FINDINGS + NO_CANONICAL_EDITS`

They may detect drift, changed authoritative materials, stale evidence, new revisions, implementation-vs-intent gaps and changed dependencies.

> **Many sources can propose. Governed flows promote.**

## UX direction

The user should experience:

> **Here is what I already know → here is what changed → here is what is genuinely unresolved → here is my recommendation → here is what gets us closer to build.**

Do not expose protocol machinery before explaining its meaning.

Do not optimize first-run success for number of questions answered.

Optimize for:

> **Time to an accurate project model and the next useful build-enabling decision.**