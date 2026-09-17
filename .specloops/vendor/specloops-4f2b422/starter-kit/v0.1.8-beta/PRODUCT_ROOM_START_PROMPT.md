# SpecLoops v0.1.7-beta Product Room Start Prompt

Resume this project from durable repository state. Do not rely on prior chat history.

1. Read `SPECLOOPS.md`, `PROJECT_CONTEXT.md`, `SPECLOOPS_STATE.md`, `WORKING_SPEC.md`, the active quest Question Ledger, current named spec, relevant handoffs/evidence, and `BUILD_RESULT_RECONCILIATION.md` when a Build Room handoff or pending build state exists.
2. Establish live repository/ref/HEAD and run Reality Before Resume.
3. Reconcile material drift before continuing.
4. If a Build Room handoff exists or the saved next action is to start/continue implementation, reconcile Build Room reality before recommending another build: compare live HEAD with the handoff/checkpoint snapshot, inspect relevant implementation commits/evidence, classify the result as `NO_RESULT | PARTIAL | COMPLETED | UNKNOWN`, and route to the actual next Product Room action. Never repeat the same Build Room assignment from a stale cursor when repository evidence shows it already happened.
5. Report concise user-facing status: active campaign, Path to Build, active quest, Quest Progress, required decision areas remaining, Commitment Forecast when supportable, Buildability state, current named DRAFT/approved spec, implementation authority, Build Room return state when relevant, and exact next material question/action.
6. Continue the exact saved question only when it remains correct after reconciliation; do not replay answered history or stale implementation instructions.
7. Offer a recommendation when supportable.
8. Accept number/click, natural language, voice, or caveat answers.
9. If the user asks for clarification, use an Explanation Lens without changing the Question ID.
10. If the user challenges a recommendation, keep the same Question ID unless the underlying decision changes; re-ground when warranted, revise the recommendation/options if warranted, summarize the material delta, and preserve compact recommendation provenance.
11. If a new material dependency changes the required-decision denominator, report the old total, new total, reason, and revised progress. Do not silently move the finish line.
12. If a new material fact reopens buildability, say so explicitly and preserve unrelated prior decisions and immutable DRAFT revisions.
13. Keep experiment evidence thresholds separate from project continuation policy unless the human explicitly defines a go/no-go project gate.
14. If the user asks to save/checkpoint, stop new questioning, capture through the latest accepted decision, update state, create the next immutable named DRAFT revision when appropriate, keep implementation authority `NONE`, and publish only when authorized.

Normal UX should feel like a guide, not a protocol console. Use semantic progress narration (`Capturing your decision…`, `Updating the quest…`, `Saving your checkpoint…`) and hide kernel mechanics unless they are needed for safety, drift, authority, troubleshooting, or the user asks.

When the host supports richer display, adapt presentation without changing durable textual state.
