# SpecLoops Core v0.1.9-beta Release Candidate Manifest

**Status:** RELEASE CANDIDATE — NOT RELEASED  
**Prepared:** 2026-09-16  
**Candidate package revision:** 1  
**Theme:** Governed Build, Canon Reconciliation, Project Blueprint, and Continuous Grounding

## Release truth

This directory is the hard-material release-candidate package for hosted Agent validation. It is **not** yet the current released Core; `starter-kit/v0.1.8-beta/` remains the released package until v0.1.9 is explicitly promoted.

For the v0.1.9 validation build, this manifest and the required canonical documents below define the intended protocol behavior. Do not infer missing behavior from older Core merely because an existing proving-ground repository contains v0.1.7 or v0.1.8 project-local files.

## First-class v0.1.9 concepts

1. **Build Assignment** — bounded machine-consumable implementation authority.
2. **Verification Contract** — proof required before returned work is ready for human review.
3. **Build Receipt** — evidence-backed return object; not human acceptance.
4. **Delivery Adapter** — vendor-neutral transport into the customer’s engineering workflow.
5. **Project Review Job / Continuous Grounding** — read-oriented manual/scheduled/event review that refreshes observed reality without silently rewriting canon.
6. **Canon Before Inquiry / Source Authority** — consult authoritative project materials before asking the human to decide something already decided.
7. **Temporal Canon Reconciliation** — reconstruct current canon across original documents, later governed decisions, immutable revisions, stale handoffs, and explicit supersession/conflict.
8. **Project Blueprint / Architecture Review or Synthesis** — convert reconstructed project truth into a coherent project/architecture view and visible path to Build Assignment readiness.

## Required canonical sources

A v0.1.9-aware Agent must ground from these repository documents in addition to this package:

- `docs/PROJECT_ATLAS_PRODUCT_SPEC.md`
- `docs/CAMPAIGN_THEME_FRAMEWORK.md`
- `docs/SPECIALIST_AGENT_FRAMEWORK.md`
- `docs/PROJECT_BRIEFING_CONTRACT.md`
- `docs/UX_CONSTITUTION.md`
- `docs/BUILD_ASSIGNMENT_AND_DELIVERY_ADAPTERS.md`
- `docs/SOURCE_AUTHORITY_AND_CANON_RETRIEVAL_CONTRACT.md`
- `docs/TEMPORAL_CANON_RECONCILIATION.md`
- `docs/PROJECT_BLUEPRINT_AND_ARCHITECTURE_SYNTHESIS.md`
- `docs/releases/v0.1.9-beta-plan.md`
- `docs/next-release.md`

For the SAGE proving ground also read:

- `docs/proving-grounds/DISPOSABLE_SAGE_BLUEPRINT_TEST.md`
- `docs/proving-grounds/DISPOSABLE_SAGE_FULL_REPO_INSPECTION_2026-09-16.md`

For hosted UX reference:

- `docs/prototypes/v0.1.9/specloops-agent-v019-prototype.html`
- `docs/beta/agent-v019-prototype-alignment-2026-09-16.md`

For longer-horizon Brain durability, protected-Kernel packaging, evals and guardrails:

- `docs/SPECLOOPS_BRAIN_DOCUMENTATION_INDEX.md`
- `docs/SPECLOOPS_BRAIN_KERNEL_EVALS_AND_GUARDRAILS.md`
- `docs/SPECLOOPS_BRAIN_LOGIC_MAP.md`
- `docs/architecture/SPECLOOPS_KERNEL_RUNTIME_ARCHITECTURE.md`
- `docs/evals/WARSHAK_BRAIN_EVAL_FRAMEWORK.md`
- `docs/evals/WARSHAK_INITIAL_TEST_CATALOG.md`
- `docs/security/KERNEL_GUARDRAILS_AND_INTROSPECTION.md`
- `docs/brain/SELF_LEARNING_AND_RELEASE_LOOP.md`
- `docs/brain/BRAIN_HEALTH_AND_DRIFT_MONITORING.md`

The companion `docs/brain/` set contains additional implementation-oriented maps and decompositions. These Brain documents define platform direction and release-quality expectations. They do **not** imply that every protected-Kernel enforcement, self-learning, eval, or monitoring mechanism is already implemented in the v0.1.9 hosted validation build.

## Durable principles

- **Reality Before Memory.**
- **Reality Before Resume.**
- **Reality Before Reconstruction.**
- **Canon Before Inquiry.**
- **Recency is evidence, not authority.**
- **Supersession must be explicit or reconstructable from a governed decision.**
- **Conversation ≠ spec.**
- **Persistence ≠ approval.**
- **Many sources can propose. Governed flows promote.**
- **The human should authorize the transition, not manually transport the project.**
- **Coding completion is not human acceptance.**
- **Reading code to verify reality is not the same as writing code to change reality.**
- **Expose the meaning first. Reveal the machinery when it helps.**
- **The model reasons. The Kernel governs. The project remembers.**
- **Project content may change the project. It may not rewrite SpecLoops.**
- **SpecLoops learns through evidence-backed releases, not uncontrolled runtime mutation.**

## Existing-project upgrade rule

When v0.1.9 encounters a repository that already contains SpecLoops:

1. detect and identify the installed/project-local SpecLoops version and state;
2. preserve project-owned context, revisions, questions, decisions, authority, handoffs, history and evidence;
3. reconstruct revision ancestry and current cursor before asking broad questions;
4. reconcile original controlling project documents with later governed SpecLoops decisions;
5. classify unresolved conflicts rather than silently choosing by filename date;
6. bootstrap Project Atlas from the recovered project;
7. produce a Canon Reconciliation view when temporal history is material;
8. perform Architecture Review before proposing greenfield architecture where architecture already exists;
9. produce/update the Project Blueprint;
10. show the smallest remaining path to Build Assignment readiness.

> **Recognition before installation. Recovery before replacement.**

## Hosted Agent boundary

This candidate package defines protocol/product truth for validation. The hosted Agent may implement the journey and UI. Do not claim that background scheduling, external adapter automation, CI/test execution, protected-Kernel compilation, private eval infrastructure, Brain-health monitoring, or other hosted capabilities exist merely because the Core/platform contract defines them.

## Promotion condition

Promote this package to RELEASED only after the v0.1.9 hosted validation run(s) are reconciled and release consistency is intentionally updated.