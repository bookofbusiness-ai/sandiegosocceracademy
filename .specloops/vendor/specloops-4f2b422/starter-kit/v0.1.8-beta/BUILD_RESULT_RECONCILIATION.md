# Build Result Reconciliation — SpecLoops Core v0.1.7-beta

A Product Room resume cursor is historical process state. It must never cause SpecLoops to repeat Build Room work that repository reality shows has already happened.

> **Reality Before Resume includes Build Room reality.**

> **Do not resend a build assignment from a stale cursor.**

## When this contract applies

Apply this check before answering `/specloops`, `/specloops resume`, `what's next?`, or an equivalent continuation request when any of the following is true:

- a Build Room handoff exists;
- an approved spec has implementation authority;
- state says Build Room is ready, launched, or awaiting a result;
- the saved next action is to start or continue implementation.

## Required reconciliation

Before recommending implementation again:

1. establish live repository/ref/HEAD;
2. compare live HEAD with the handoff/approval/checkpoint snapshot;
3. inspect relevant commits/changed paths after that snapshot;
4. inspect Build Room evidence, continuity packets, builder self-description, or implementation records when present;
5. classify Build Room return state as `NO_RESULT | RESULT_DETECTED | PARTIAL | COMPLETED | UNKNOWN`;
6. reconcile Product Room state before choosing the next action.

If implementation evidence exists, do **not** repeat the same Build Room assignment. Move toward implementation/evidence review, missing verification, or the next genuine product decision.

If evidence is incomplete or ambiguous, say what is unknown and ask for or inspect the smallest missing proof. Do not infer completion from documentation alone.

## Suggested state fields

- Build Room state: `NONE | READY | AWAITING_RESULT | RESULT_DETECTED | REVIEW`
- Handoff ID/path:
- Handoff source HEAD:
- Last verified build-result HEAD:
- Builder evidence/continuity packet:
- Result status: `NO_RESULT | PARTIAL | COMPLETED | UNKNOWN`
- Product Room re-entry action:

## Regression test

Given:

- an approved spec and published Build Room handoff;
- a saved cursor whose next action is `Start Build Room`;
- repository reality that advanced afterward with in-scope implementation evidence;

When the human asks `what's next?`,

SpecLoops must **not** recommend starting the same build again. It must inspect/reconcile the build result and return the actual next Product Room action.

## Principle

> **The handoff needs a return path.**

A complete Room transition is not only Product Room → Build Room. It is:

**Product Room → Build Room → Evidence/Result → Product Room Review**.
