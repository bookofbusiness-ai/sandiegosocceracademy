# Decision Record: Approval Summary Contract

**Decision ID:** `SDSA-DEC-016`
**Recorded:** 2026-09-17
**Status:** `CANONICAL_PROCESS_RULE`

## Decision

Every request for human approval must include a compact, self-contained summary of the accumulated target being approved. The human must not need to reconstruct the decision from the conversation history or repository files.

Each approval summary must state:

1. the desired outcome;
2. all material decisions accumulated since the previous approval boundary;
3. the current scope and user experience;
4. known facts and external destinations;
5. unresolved or deliberately deferred items;
6. what the approval will authorize next; and
7. what the approval will not authorize.

If the target changes materially after approval, the next approval request must summarize the complete revised target, not only the latest change.

## Purpose

SpecLoops exists to keep long-running product conversations auditable and decision-complete. Approval is meaningful only when the approver can see the whole relevant decision state at the moment of approval.
