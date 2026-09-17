# Upgrade to v0.1.9-beta Candidate from v0.1.8 or Earlier

This is a non-destructive protocol upgrade for validation.

## Preserve project-owned state

Do not replace or reset:

- `PROJECT_CONTEXT.md`;
- `SPECLOOPS_STATE.md`;
- `WORKING_SPEC.md`;
- Question Ledger / Decision Graph state;
- named DRAFT or APPROVED revisions;
- `specs/history`;
- handoffs and Build Result Reconciliation;
- repository source/tests;
- acceptance evidence;
- rejected directions and non-goals;
- approval / implementation / merge / deploy authority.

## Upgrade sequence

1. Inspect current repository HEAD/filesystem reality.
2. Detect the installed/project-local SpecLoops version.
3. Recover current state and exact resume cursor.
4. Follow named revision ancestry and historical links.
5. Read controlling original project requirements/architecture and source-precedence rules.
6. Reconcile current governed decisions against older source material using Temporal Canon Reconciliation.
7. Mark stale handoffs/cursors as historical where later project state supersedes them.
8. Bootstrap/update Project Atlas without inventing missing facts.
9. Produce a Canon Reconciliation view when conflicts/evolution are material.
10. Review existing architecture before synthesizing new architecture.
11. Produce/update Project Blueprint and build-readiness gaps.
12. Ask only the smallest material unresolved question.

## Do not

- reinstall over an existing project brain;
- restart a completed question sequence;
- treat the latest filename as automatic authority;
- treat old controlling docs as eternally current when later governed decisions supersede them;
- treat later brainstorming as automatic supersession;
- turn DRAFT history into approved implementation authority;
- create a greenfield architecture before understanding the existing one;
- declare build readiness while material unresolved architecture/security/acceptance gaps remain.

> **Recognition before installation. Recovery before replacement.**