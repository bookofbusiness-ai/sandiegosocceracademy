# Temporal Canon Reconciliation

**Status:** Canonical v0.1.9 product contract  
**Recorded:** September 16, 2026  
**Applies to:** Existing-project onboarding, Canon Before Inquiry, Project Atlas reconstruction, Question Ledger recovery, Project Blueprint generation, Continuous Grounding

## Product problem

Existing projects do not contain one frozen truth. They contain layers of intent that evolve over time:

- original product and architecture documents;
- later corrections and clarifications;
- SpecLoops Question Ledger decisions;
- named Working Spec revisions;
- explicit rejected/superseded directions;
- implementation evidence;
- stale handoffs and historical snapshots.

A fresh SpecLoops Agent must reconstruct **current project canon**, not merely read the oldest requirements, the newest file, or the most recent conversational summary.

> **Recency is evidence, not authority.**

> **Supersession must be explicit or reconstructable from a governed decision.**

> **When current intent cannot be resolved confidently, preserve the conflict and ask the smallest possible question needed to resolve it.**

This contract extends **Canon Before Inquiry**.

## 1. Canon has a timeline

For each material project assertion, SpecLoops should attempt to recover:

- original intent;
- subsequent decisions or revisions;
- decision state;
- whether later material refines, supersedes, rejects, or merely conflicts with earlier material;
- current governing statement when recoverable;
- provenance explaining why it governs;
- downstream dependencies that may need review.

A useful conceptual record is:

```text
Assertion / decision
Original source
Later source(s)
Relationship: PRESERVES | REFINES | SUPERSEDES | REJECTS | CONFLICTS | UNKNOWN
Current canon
Confidence / review state
Provenance
Affected objects / decisions
```

## 2. Newer is not automatically stronger

A newer artifact does not automatically replace an older authoritative requirement.

Examples that do **not** by themselves supersede canon:

- brainstorming;
- a recommendation the human did not accept;
- a draft answer marked PARTIAL;
- a deferred question;
- implementation that drifted from intent;
- a newer summary that omits an older requirement;
- filename recency without a controlling/supersession rule.

Examples that may supersede earlier intent:

- an explicit human decision recorded as ANSWERED;
- an approved named revision;
- a controlling document that declares precedence;
- a later governed decision that clearly changes the earlier requirement;
- a human-approved reconciliation record.

## 3. Conversation is not canon by default

Preserve the existing rule:

> **Conversation ≠ spec.**

A conversational statement becomes durable current intent only through the project’s governed capture model: for example Question Ledger state, Working Spec materialization, explicit approval, or equivalent provenance.

If a later conversation says something different from an earlier requirement but no governed supersession exists, classify it as a conflict or proposal rather than silently changing canon.

## 4. Required reconciliation states

When comparing a material statement across time, use a semantic relationship such as:

- `PRESERVED` — later material carries the earlier decision forward unchanged;
- `REFINED` — later material adds detail without changing the core decision;
- `SUPERSEDED` — later governed intent intentionally replaces the earlier decision;
- `REJECTED` — the direction is explicitly no longer desired;
- `CONFLICT` — sources disagree and no precedence/supersession rule resolves them;
- `STALE` — the source describes an older state that remains historically valid but is not current;
- `UNKNOWN` — provenance is insufficient to classify safely.

Do not erase the older record when a decision is superseded.

## 5. SpecLoops-native revision chains are strong evidence

When a repository already contains SpecLoops artifacts, a fresh Agent must inspect them as part of reconstruction before beginning a new interview.

Relevant artifacts may include:

- `SPECLOOPS.md`;
- `SPECLOOPS_STATE.md`;
- `PROJECT_CONTEXT.md`;
- `WORKING_SPEC.md`;
- Question Ledger files;
- `specs/*-rN.md` revision chains;
- `specs/history/*`;
- Build Room handoffs and reconciliation records.

Named revisions may explicitly incorporate prior immutable revisions rather than restating every decision. The Agent must follow those ancestry links instead of reading only the newest file in isolation.

Historical DRAFTs remain evidence of captured intent even when not approved. Their authority must be interpreted using artifact state, Question Ledger status, later human decisions, and explicit supersession rules.

## 6. Old handoffs may be true historically and stale operationally

A handoff or grounding report may accurately describe the project at the time it was written while becoming stale after later Product Room decisions.

The Agent must distinguish:

- historical observation;
- current product intent;
- current implementation reality.

Do not replay a stale unresolved-question list if later Question Ledger / Working Spec revisions answer those questions.

Do not treat an older architecture implementation recommendation as current authority if later human decisions changed scope.

## 7. Reconstruction output: Canon Reconciliation Report

When temporal project history is materially complex, SpecLoops should produce a concise **Canon Reconciliation Report** before or alongside the Project Blueprint.

Recommended sections:

1. governing source map;
2. current SpecLoops state/revision ancestry;
3. preserved original requirements;
4. later refinements;
5. explicit supersessions/rejections;
6. unresolved source conflicts;
7. stale artifacts that should not control the current journey;
8. open questions that genuinely remain;
9. implementation-vs-intent gaps;
10. confidence/provenance limits.

The user-facing objective is not document archaeology. It is confidence that SpecLoops understands how the project’s thinking evolved.

## 8. Atlas integration

Atlas objects should be able to retain:

- current value/state;
- originating source;
- later source(s);
- temporal relationship;
- supersession link;
- decision status;
- freshness;
- provenance;
- conflict state;
- affected dependencies.

The Atlas represents **current project truth plus its explainable history**, not a destructive merge of documents.

## 9. Blueprint integration

The Project Blueprint must be rendered from reconciled current canon.

For material areas that evolved, the Blueprint may show:

- current target;
- original source;
- material evolution;
- whether the current state is approved, proposed, or unresolved;
- unresolved conflict where applicable.

A Blueprint that simply summarizes the original README or the latest Working Spec without reconciling both is incomplete.

## 10. Continuous Grounding integration

Project Review Jobs should detect temporal changes such as:

- a new named spec revision;
- a Question Ledger decision changing from PARTIAL to ANSWERED;
- a new supersession/rejection;
- a controlling document change;
- implementation evidence that creates a Gap against current intent.

Continuous Grounding may propose reconciliation updates but does not silently create product authority.

## 11. Validation scenario — SAGE

The SAGE repository is a strong proving ground because it contains:

- a controlling SAGE V2 handoff package and architecture documents;
- explicit document precedence rules;
- older V2 scope statements;
- project-local SpecLoops Core state;
- six named SAGE quest revisions (`r1` through `r6`);
- a recovered-decision history;
- a current Working Spec and Question Ledger through Q76;
- older grounding/handoff material that is now partly stale relative to later Product Room decisions.

PASS behavior requires the Agent to reconstruct the revision chain and current intent rather than treating either the original V2 package or the latest single file as the whole truth.

A concrete example: the original V2 scope explicitly deferred production PRISM UI/digital twin/heat-map behavior, while later governed Product Room decisions require a thin-but-complete first usable loop across PRISM and other named domains, with later decisions refining the PRISM launch depth. A fresh Agent should surface this as project evolution/supersession rather than asking the human to restate the decision or treating both statements as simultaneously controlling.

## 12. Durable principle family

> **Reality Before Memory.**

> **Reality Before Resume.**

> **Reality Before Reconstruction.**

> **Canon Before Inquiry.**

> **Recency is evidence, not authority.**

Together these rules let SpecLoops recover what exists, what was decided, how decisions changed, and what the human genuinely still needs to decide.

## Product Room boundary

This contract defines product behavior only. It does not authorize application code, agent implementation, repository mutation outside documentation, deployment, or external actions.