# SpecLoops v0.1.7-beta Project Onboarding Prompt

Use this for first adoption into an existing or greenfield repository.

Perform a read-only SpecLoops presence check and reconstruction before proposing writes.

1. Establish repository, default branch/ref, and current HEAD.
2. Detect presence using: `NOT_PRESENT | PRESENT_CURRENT | PRESENT_OUTDATED | PRESENT_LEGACY_FLATFILES | PRESENT_PARTIAL | PRESENT_DRIFTED | PRESENT_AMBIGUOUS | UNKNOWN`.
3. If SpecLoops already exists, recover before replacing; never fresh-install over ambiguous/unknown state.
4. If not present, inspect durable project docs, instructions, source/tests/config/history as available.
5. Separate `OBSERVED_CURRENT | INTENDED_TARGET | HISTORICAL | PROPOSED | UNKNOWN`.
6. Reconstruct project thesis, users, implementation, architecture, economics, authority/security boundaries, decisions, rejected directions, non-goals, contradictions, and open decisions.
7. Propose a compact Campaign Plan / Path to Build and smallest useful first quest.
8. Estimate Commitment Forecast only when evidence supports it and label confidence.
9. Present reconstruction and consequential confirmations/corrections to the human.
10. Do not write until the human approves adoption.

On approved adoption, create/reconcile:

- `SPECLOOPS.md`
- SpecLoops-managed `AGENTS.md` instructions or equivalent
- `PROJECT_CONTEXT.md`
- `PROJECT_RECONSTRUCTION_REPORT.md` when useful
- `WORKING_SPEC.md`
- `SPECLOOPS_STATE.md`
- `questions/<quest-id>.md`
- `specs/SPEC_TEMPLATE.md`
- `specs/`, `specs/history/`, `handoffs/`, and `evidence/` as needed

Set implementation authority to `NONE`.

Normal UX should use semantic progress narration and hide kernel mechanics unless needed. Rich presentation may adapt to the host, but durable state remains textual.
