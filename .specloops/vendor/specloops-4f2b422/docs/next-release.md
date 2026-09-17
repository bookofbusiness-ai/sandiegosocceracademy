# SpecLoops — Current Release Train

**Updated:** September 16, 2026  
**Current packaged Core:** **v0.1.8-beta — Project Atlas**, package revision 1  
**Next Core candidate:** **v0.1.9-beta — Build Assignment / SDLC Bridge**  
**Hosted architectural line:** **v0.2.x-alpha — SpecLoops Agent**

## Current Core

v0.1.8 packages the living-project-model framing:

- Project Atlas shared substrate
- Atlas Objects / governed lifecycle
- provenance and Gap Objects
- explicit source-of-truth boundaries
- Campaign Themes
- bounded persistent Specialist roles
- Project Briefing
- Reality Before Reconstruction

See:

- `docs/releases/v0.1.8-beta.md`
- `docs/PROJECT_ATLAS_PRODUCT_SPEC.md`
- `docs/CAMPAIGN_THEME_FRAMEWORK.md`
- `docs/SPECIALIST_AGENT_FRAMEWORK.md`
- `docs/PROJECT_BRIEFING_CONTRACT.md`

## Next Core candidate — v0.1.9-beta

v0.1.9 explores the next continuity gap: moving approved product intent into an execution workflow, bringing back verifiable evidence, keeping the shared project model grounded in current reality, preventing the human from having to repeat requirements that authoritative project materials already contain, and turning reconstruction into a visible path toward build readiness rather than an endless interview.

Theme:

> **Governed execution contracts, evidence-backed return, canon-aware continuity, project synthesis, and continuous grounding without making the human the message bus.**

The candidate model now has seven first-class concepts:

- **Build Assignment** — what is authorized to be built;
- **Verification Contract** — what proof must come back;
- **Build Receipt** — what evidence actually came back;
- **Delivery Adapter** — how assignment and receipt move through the customer's existing workflow;
- **Project Review Job / Continuous Grounding** — how SpecLoops refreshes observed project reality and proposes findings between human interactions without silently rewriting canon;
- **Canon Before Inquiry / Source Authority** — how SpecLoops checks authoritative project materials before asking the human to decide something already decided;
- **Project Blueprint / Architecture Synthesis** — how first-run reconstruction becomes a coherent project/architecture view and a visible path to Build Assignment readiness.

Primary product concept:

> **SpecLoops turns approved product intent into governed execution, requires proof on the way back, keeps its understanding grounded in current reality, carries forward authoritative project decisions without making the human repeat them, and continuously moves the project toward a credible build handoff.**

GitHub Pull Requests are a likely first delivery adapter, not the universal abstraction.

Candidate model:

```text
Authoritative project sources
    ↓
Canon retrieval / source authority
    ↓
Reality-first reconstruction
    ↓
Project Atlas bootstrap
    ↓
Project Blueprint / Architecture Review or Synthesis
    ↓
Project Review Job / Continuous Grounding
    ↓
Home / Briefing / material gaps
    ↓
Campaign / Product Room decisions
    ↓
Approved target state
    ↓
Build Assignment
    ↓
Verification Contract
    ↓
Delivery Adapter
    ↓
Coding agent / human team / CI / test tools
    ↓
Build Receipt
    ↓
SpecLoops verification / reconciliation
    ↓
Project Atlas / Product Room review
```

Strategic positioning:

> **SpecLoops is the control plane for intent, authority, evidence, and continuity.**

> **SpecLoops injects governed product intent into whatever delivery system you already use, and reads evidence back out.**

> **SpecLoops is not your pipeline. It is the intent and governance layer around your pipeline.**

> **The builder does the work. SpecLoops defines the contract and checks the receipt.**

> **SpecLoops governs not just what gets built, but what proof must come back before the work is considered complete enough for review.**

> **Reading code to verify reality is not the same as writing code to change reality.**

> **SpecLoops should not only remember where the project was when you last talked to it. It should notice when the world changed while you were away.**

> **The transport changes. The execution contract does not.**

> **Canon Before Inquiry.**

> **SpecLoops should ask only for information it cannot responsibly recover from the project itself.**

> **Core provides the primitives. The hosted Agent provides the journey.**

### Proof model

Receipt verification should distinguish:

- **Implementation proof** — did the requested change actually get made?
- **Behavioral proof** — does the software behave as specified?
- **Conformance proof** — did the work follow project/organization rules?

The Verification Contract should be composable from organization, project, campaign, and quest/spec standards. This lets projects require checks such as unit tests, integration tests, screenshots, visual inspection, accessibility, security, architecture policy, dependency rules, or other enterprise controls without making SpecLoops itself the universal test runner.

SpecLoops may inspect code, diffs, tests, screenshots, configuration, and trusted external evidence to verify reality. In Product Room, a failed verification returns a gap/correction request rather than silently modifying application code.

### Hybrid Build Receipt

The builder should return a minimum self-description and any evidence it generated, but the receipt should not depend entirely on self-report. Where possible, SpecLoops should assemble or verify receipt fields from trusted sources such as repository state, CI, test artifacts, scanners, screenshots, deployment state, observability, or human QA.

Unsupported claims remain unverified.

### Canon Before Inquiry / Source Authority

Brian's PRISM proving-ground feedback exposed a concrete quality failure: as Product Room moved into architecture constraints and Product Library, the Agent began treating original repository documents as guidelines rather than build requirements and needed the human to remind it to look at the source material.

That behavior is now explicitly part of the v0.1.9 correction.

Before asking a material question, SpecLoops should first determine whether authoritative project materials already answer it.

Required classifications:

- **ANSWERED** — carry canon forward; do not ask again.
- **PARTIAL** — state what is already established and ask only the missing judgment.
- **CONFLICT** — surface competing authorities; do not silently choose.
- **UNRESOLVED** — ask the human.

Authority is question-dependent:

- intended behavior → approved/original requirements, named specs, explicit human decisions;
- observed behavior → live repository, tests, Build Receipts, runtime evidence;
- rationale/dependency → Decision Graph, provenance, Question Ledger, approved revisions.

Original requirements must not silently degrade into suggestions merely because they are older than the current conversation.

If implementation differs from canonical intent, create a Gap rather than rewriting the requirement.

Regression test:

> A repository contains robust original requirements. After a long Product Room discussion, the Agent reaches a topic already specified there. PASS only if it retrieves and honors the requirement without requiring the human to remind it.

See:

- `docs/SOURCE_AUTHORITY_AND_CANON_RETRIEVAL_CONTRACT.md`

### Project Blueprint / Architecture Synthesis

First-run onboarding should not feel like a blank questionnaire or a 50-question requirements treadmill.

For an existing project, SpecLoops should:

1. inspect the repository and authoritative source material;
2. populate as much of Project Atlas as the evidence supports;
3. distinguish `CANONICAL`, `OBSERVED`, `INFERRED`, `PROPOSED`, `UNKNOWN`, `STALE`, and `NEEDS_REVIEW` style states;
4. show what is already understood;
5. surface only material gaps that block the next useful transition;
6. review an existing architecture if one is already defined;
7. synthesize architecture options only where architecture is materially missing;
8. keep generated architecture `PROPOSED` until human approval;
9. produce a coherent Project Blueprint from the shared Atlas;
10. make the remaining path to Build Assignment readiness visible.

Architecture states remain distinct:

- **Observed architecture** — what currently exists;
- **Proposed architecture** — SpecLoops recommendation;
- **Approved target architecture** — human-approved direction.

The Project Blueprint is a rendered view of governed project state, not a second source of truth. It should normally cover:

- executive summary;
- product model;
- functional requirements;
- experience model;
- architecture;
- data model;
- security/privacy;
- integrations;
- quality/verification;
- deployment/operations;
- known gaps/unknowns;
- recommended path to build;
- build-readiness summary.

The Blueprint is a transition artifact, not the finish line.

Target journey:

```text
Read the world
→ reconstruct the Atlas
→ close material gaps
→ review/synthesize architecture
→ produce the Blueprint
→ approve the target state
→ prepare the Build Assignment
→ build
→ prove
→ update reality
```

Product-quality bar:

> **A SpecLoops Build Assignment should be better than the handoff a strong product leader would manually write after weeks of project work.**

See:

- `docs/PROJECT_BLUEPRINT_AND_ARCHITECTURE_SYNTHESIS.md`
- `docs/proving-grounds/DISPOSABLE_SAGE_BLUEPRINT_TEST.md`

### Continuous Grounding / Project Review Jobs

Project Review Jobs should support `MANUAL | SCHEDULED | EVENT` trigger classes while defaulting to read-only authority.

They may inspect repository/docs/specs/Atlas/receipts and other permitted truth sources, refresh freshness, and propose findings such as drift, stale decisions, undocumented implementation, stale evidence, changed dependencies, and recommended next actions.

Default authority:

`READ_ONLY + PROPOSE_FINDINGS + NO_CANONICAL_EDITS`

Continuous Grounding should also detect changed authoritative materials and help keep source-authority mappings current.

> **Many sources can propose. Governed flows promote.**

Portable Core should define the review contract; scheduler/event infrastructure belongs to the hosted Agent.

Potential user-facing names remain open: **Project Pulse**, **Project Reality Review**, or **Project Health Review**.

### Prototype alignment

The September 16 clickable v0.1.9 Agent prototype materially aligns with the current product canon and should be treated as UX evidence, not shipped capability.

It demonstrates:

- explicit persistent Home/navigation and project context;
- Home as Briefing/attention surface;
- semantic Atlas domain maps;
- Product Room authority boundary;
- Build Assignment / Verification Contract / Build Receipt journey;
- vendor-neutral Delivery Adapters;
- simulated receipt acceptance/correction state changes;
- friendlier specialist presentation over unchanged bounded roles;
- Gaps/Evidence review UX;
- human + AI economics with explicitly fictional data.

It does not yet demonstrate live Continuous Grounding, live Canon Before Inquiry retrieval, or the full Project Blueprint/Architecture Synthesis journey. Those remain hosted-Agent behaviors to validate against the contracts above.

See:

- `docs/BUILD_ASSIGNMENT_AND_DELIVERY_ADAPTERS.md`
- `docs/releases/v0.1.9-beta-plan.md`
- `docs/SOURCE_AUTHORITY_AND_CANON_RETRIEVAL_CONTRACT.md`
- `docs/PROJECT_BLUEPRINT_AND_ARCHITECTURE_SYNTHESIS.md`
- `docs/marketing/BUILD_ASSIGNMENT_POSITIONING.md`
- `docs/beta/agent-v019-prototype-alignment-2026-09-16.md`
- `docs/prototypes/v0.1.9/specloops-agent-v019-prototype.html`

v0.1.9 remains the active next Core candidate. The Brian/PRISM source-authority correction and Project Blueprint/Architecture Synthesis transition are in scope now, not later backlog.

## Next hosted build candidate

The next hosted implementation should align the Agent to the current v0.1.9 product contracts rather than preserving older behavior simply because Brian's current instance is on an older Core.

Near-term Agent behavior includes:

- explicit persistent navigation and Home as attention/action surface;
- semantic Atlas domain maps;
- contextual help and progressive disclosure;
- Product Room authority boundaries;
- Build Assignment / Verification Contract / Build Receipt journey;
- vendor-neutral delivery adapters;
- receipt acceptance/correction state transitions;
- Gaps/Evidence UX;
- human + AI efficiency/economics visibility;
- Project Review Job / Continuous Grounding behavior;
- **Canon Before Inquiry** source-authority retrieval before material questions;
- **Project Blueprint / Architecture Review or Synthesis** as the first-run transition from reconstructed scope to build readiness.

### Protected baseline

Preserve current Campaign Agent behavior that is working, Product Room/Build Room separation, Question Ledger, Decision Graph semantics, campaign/quest progress, authority model, Build Result Reconciliation, and current proving-ground state.

Do not preserve behavior that contradicts newer canonical contracts merely because an older installed Core exhibited it.

## Product Room implementation boundary

The Product Room may create and publish product documentation when explicitly asked. It does **not** implement application code, CI/CD automation, GitHub PR automation, scheduler/event infrastructure, agent integrations, test execution, or deployment changes. Those belong to a separately authorized Build Room assignment.

## Evidence policy

**Observe → Record → Diagnose → Generalize carefully → Update → Retest → External validation**

Prototype validation speed matters. Do not add ceremony merely because a failure is imaginable. Add protocol where real proving-ground evidence demonstrates a recurring failure mode.
