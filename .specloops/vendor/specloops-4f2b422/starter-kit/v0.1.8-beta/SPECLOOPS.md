# SpecLoops Protocol

**Version:** 0.1.8-beta  
**Date:** 2026-09-16  
**Theme:** Project Atlas / Living Project Model

## 1. Purpose

SpecLoops is a portable, repository-native operating model for turning product conversations into durable, buildable software intent across separate human and coding-agent sessions.

Core journey:

**GROUND → REALITY CHECK → READY → CHOOSE PROBLEM → EXPLORE → DRAFT CHECKPOINT → TRANSLATION GATE → APPROVE → HANDOFF → BUILD → EVIDENCE → REVIEW → UPDATE CONTEXT → READY**

Pause/resume, question navigation, Campaign Progress, recommendation revision, checkpoint saves, Atlas updates and specialist observations are orthogonal to lifecycle stage.

> **The human makes consequential product decisions. SpecLoops manages the adventure.**

## 2. Prime directives

> **Reality Before Memory.**

> **Reality Before Resume.**

> **Reality Before Reconstruction.**

> **Ask until buildable, not exhaustive.**

> **Conversation is not a spec. Persistence is not approval. Evidence is not authority.**

> **Restore momentum, not only context.**

> **The point is not fewer lines of code. It is fewer wrong turns.**

## 3. Freshness and reality

Use exactly: `FRESH | DRIFTED | UNKNOWN | N/A_NO_IMPLEMENTATION`.

A saved cursor is historical process state, not proof the repository stayed still. Before resuming, reconstructing, or implementing: establish live repo/ref/HEAD when possible; compare saved state; inspect material drift; reconcile current state; continue only when saved decisions still fit reality.

## 4. Three Rooms

> **Talk in Chat. Build in Codex. Share state through the project repository.**

- Product Room — decisions, exploration, recommendations, Working Spec, Question Ledger, progress, checkpoints, approval, evidence review.
- Build Room — grounding, approved implementation, tests/evidence, handoff back.
- Shared Brain — durable repository context, state, questions, specs, handoffs, evidence, code, tests and provenance.

## 5. Project Atlas

Project Atlas is the living model shared across Rooms, Campaigns and Specialists.

> **Decided → Exists → Evidence → Gap → Next**

Use stable domains with dynamic subsections. Atlas objects are primary; pages/reports are views. Meaningful objects carry provenance, lifecycle state, evidence, confidence/freshness, dependencies and next action.

Default lifecycle: `PROPOSED → REVIEWED → CANONICAL → IMPLEMENTED → VERIFIED` with side states `BLOCKED | NEEDS_REVIEW | STALE | SUPERSEDED | REJECTED | DEFERRED`.

> **Verification is versioned confidence, not eternal truth.**

If intent and observed reality disagree, create a Gap Object. Do not silently reconcile.

> **No important project truth without provenance.**

Many sources may propose. Only governed flows promote canonical truth.

## 6. Source authority and storage

Use explicit authority by data class. Repo owns durable product artifacts/project brain; SpecLoops service owns orchestration/index/view state; GitHub owns code reality; runtime/deployment/billing systems own their facts; specialists own only their finding records.

> **SpecLoops aggregates truth; it does not impersonate the systems that own it.**

> **The repo carries the project brain. The service makes that brain operational.**

## 7. Campaign Themes

Campaign Themes are packaged operating playbooks over Atlas. They define outcome, relevant domains, likely quests, decision framework, specialists, evidence, exit criteria and transition behavior.

One primary campaign owns the main next-action journey. Secondary campaigns are advisory unless they raise a governed blocker.

> **Campaigns finish. Projects evolve.**

## 8. Specialists

Persistent bounded roles include Implementer, Auditor, Operations, Verifier and Architect. They observe, propose, attach evidence, classify and escalate; they do not directly rewrite canon.

Finding levels: `INFORMATIONAL | ATTENTION | BLOCKER | DECISION_REQUIRED`.

Specialists may recommend severity. Governance determines whether work stops. Preserve evidence-backed disagreement.

## 9. Project Briefing

Default human/executive consumption is one synthesized Project Briefing generated from Atlas state: what changed, what matters, blockers, decisions required, risks, next actions and evidence links. Do not force the human to coordinate multiple specialist reports.

## 10. Persistence and authority

Persistence: `THREAD_ONLY | FILE_LOCAL | COMMITTED_LOCAL | PUBLISHED`.

Implementation authority defaults to `NONE`. Only explicit human approval of a named written spec revision grants implementation authority for that exact scope. Edit/commit/push/merge/deploy/spend permissions remain separate.

## 11. Presence before install

Before installing, detect: `NOT_PRESENT | PRESENT_CURRENT | PRESENT_OUTDATED | PRESENT_LEGACY_FLATFILES | PRESENT_PARTIAL | PRESENT_DRIFTED | PRESENT_AMBIGUOUS | UNKNOWN`.

UNKNOWN and PRESENT_AMBIGUOUS are not absence.

> **Recognition before installation. Recovery before replacement.**

## 12. Existing-project reconstruction

Inspect reality first, distinguish `OBSERVED_CURRENT | INTENDED_TARGET | HISTORICAL | PROPOSED | UNKNOWN`, build a provisional Atlas, ask only consequential confirmation/correction questions, and never invent historical questions, approvals, dependencies, evidence or authority.

## 13. Guided / Conversational modes and Explanation Lenses

Guided rhythm: question → recommendation/examples → human decision → structured capture → next material question. Conversational mode allows free thinking while maintaining the same durable state. Explanation changes do not create new Question IDs unless the underlying decision changes.

> **Personalize the explanation, not the truth.**

## 14. Recommendation Challenge and provenance

A human may challenge a recommendation without creating a new Question ID. Preserve accepted unrelated decisions, re-ground when warranted, revise recommendation/options, explain the delta, wait for human selection, and record compact recommendation provenance rather than private reasoning.

> **Recommendations can change without changing the decision.**

## 15. Question Ledger and Decision Compression

Every material quest question has a stable Q ID. Statuses: `UNANSWERED | PARTIAL | ANSWERED | DEFERRED | SUPERSEDED | NEEDS_REVIEW`.

> **SpecLoops carries the context so the human only has to supply the decision.**

Clicks, numbers, caveats, voice and natural language are valid when context is known. Do not make the user re-explain known context.

## 16. Required work, progress and forecasts

Classify remaining material as `REQUIRED BEFORE DRAFT | OPTIONAL REFINEMENT | BUILD ROOM CHOICE`.

Quest Progress measures resolved required decision areas / currently identified required decision areas, not Q number. If denominator changes, show old/new count and reason.

Campaign Progress / Path to Build is a forecast toward buildability, not delivery promise. Commitment Forecast uses ranges and LOW/MEDIUM/HIGH confidence.

## 17. Buildability and experiment policy

Buildability Gate is an exit condition, not approval. New material evidence may reopen buildability without erasing unrelated prior work.

Keep experiment evidence thresholds, decision consequence and project continuation policy separate unless the human explicitly links them.

## 18. Working Spec, checkpoint and Translation Gate

Maintain inspectable Working Spec state during exploration. A checkpoint is the save: capture accepted decisions, update state/ledger/cursor, preserve unresolved/rejected/non-goal material, create immutable DRAFT, keep authority NONE, report progress/next question, and publish only when authorized.

Before approval compare DRAFT against Working Spec + Question Ledger for coverage, unsupported additions, unresolved/rejected/non-goal preservation, contradictions, scope, acceptance traceability and freshness/provenance.

> **Approve the meaning, not just the document.**

## 19. Handoff and Build Room

After approval create a task-specific Handoff Brief with repo/ref/HEAD, freshness, exact approved spec, authority, desired outcome, project laws, in/out scope, acceptance criteria, evidence requirements, blockers and re-entry condition.

Before implementation establish live reality again. For each acceptance criterion record `PASS | FAIL | NOT_RUN | BLOCKED`.

## 20. Build Result Reconciliation

If a Build Room handoff exists or saved next action is implementation-related, inspect live HEAD and evidence before suggesting or repeating the build. When implementation happened after the handoff snapshot, route to evidence review/next genuine action rather than following a stale cursor.

> **Do not resend a build assignment from a stale cursor.**

## 21. Ambient Project Governance and presentation

Prefer authoritative released contracts and verified current reality over narrative convenience. Durable repo norms may shape compatible agent behavior across surfaces: Ambient Project Governance.

> **State stays durable and textual. Presentation may adapt to the host.**

Use semantic progress narration; expose intent/outcome rather than shell/patch/file-read mechanics unless needed for safety/troubleshooting or requested.

## 22. Pause/resume and upgrades

On resume: load durable state, establish live reality, reconcile drift/results, restore semantic state/stable Q ID, show concise quest/campaign status, continue exact next material decision.

> **A plan is not a release.**

Install/upgrade only from an authoritative released package.

> **Upgrade the rules; do not reset the campaign.**

Preserve project-owned context, questions, specs, handoffs, evidence, code/tests, unresolved material, rejected directions, non-goals and history.

## 23. UX principle

> **Complexity belongs in the system, not in the user's face.**

Normal Product Room/Atlas should make clear: where am I, what changed, what decision needs me, what is recommended, how far am I from buildable, and can I save safely?

## 24. Non-negotiable boundaries

- Proposal is not canon.
- Finding is not decision.
- Recommendation is not approval.
- Evidence is not authority.
- DRAFT is not APPROVED.
- Checkpoint persistence is not implementation authority.
- Documentation is not proof of current implementation.
- UNKNOWN is not FRESH.
- A local commit is not PUBLISHED.
- Resume Cursor is not proof current reality is unchanged.
- Going backward in questions is not Git rollback.
- Coding completion is not human acceptance.
- Campaign Progress is not a delivery promise.
- Commitment Forecast is not a fixed contract.
- Buildability Gate is not approval.
- Experiment failure is not project cancellation unless explicitly defined.
- A release plan is not an installable release.
- Specialist access does not grant canonical authority.
- Human repository access does not prove active-agent repository access.
- Project-repo access and release-source access are separate capabilities.
