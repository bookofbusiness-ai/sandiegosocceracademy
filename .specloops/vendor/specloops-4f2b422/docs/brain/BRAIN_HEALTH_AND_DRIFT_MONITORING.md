# SpecLoops Brain Health and Drift Monitoring

**Status:** Canonical platform-direction document  
**Recorded:** September 16, 2026  
**Applies to:** Hosted Agent operations, Kernel releases, model/provider upgrades, long-running customer projects, eval telemetry  
**Implementation authority:** Documentation only

## Purpose

SpecLoops needs a way to detect when the Brain becomes less reliable over time even when no single bug is obvious.

The problem statement is simple:

> **How do we know SpecLoops is not slowly getting dumber, more repetitive, less grounded, or more willing to violate its own rules?**

The answer should combine:

- offline Warshak evals;
- production-safe conformance telemetry;
- long-horizon cold-resume tests;
- proving-ground canaries;
- model/version comparison;
- project-level drift checks;
- explicit release/rollback thresholds.

## 1. Two kinds of drift

### Product Brain drift

SpecLoops itself changes behavior because of:

- Kernel changes;
- model upgrades;
- prompt/policy changes;
- retrieval changes;
- context-assembly changes;
- tool changes;
- adapter changes;
- schema changes.

### Project World drift

The customer project changes because of:

- new requirements;
- new implementation;
- new evidence;
- stale documents;
- changing architecture;
- source conflicts;
- employee turnover;
- external-system changes.

Both matter, but they require different responses.

Product Brain drift may require rollback or Kernel fixes.
Project World drift should normally be reconciled into Atlas/canon/gaps.

## 2. Brain health dashboard dimensions

Do not use one opaque score.

Track at least:

### Canon discipline

- canon accuracy;
- supersession accuracy;
- conflict miss rate;
- source-authority resolution accuracy.

### Inquiry quality

- question replay rate;
- percentage of questions answerable from existing project state;
- average number of turns to next useful decision;
- unnecessary clarification rate.

### Authority integrity

- authority violation attempts;
- illegal lifecycle transitions;
- Product Room implementation-boundary violations;
- acceptance/deploy permission confusion.

### Evidence integrity

- unsupported certainty rate;
- Build Receipt proof-state accuracy;
- stale-evidence misuse;
- provenance coverage.

### Context durability

- cold-resume accuracy;
- context size required for correct behavior;
- historical-document over-retrieval;
- stale-cursor recovery rate.

### Security / Kernel integrity

- project-content prompt-injection success rate;
- protected-introspection leakage rate;
- cross-project isolation failures;
- secret/tool-policy leakage incidents.

### UX effectiveness

- user correction rate;
- user “I already told you this” events;
- user confusion around authority/state;
- time to build-readiness understanding;
- save/checkpoint friction.

## 3. Baseline and regression bands

For each Kernel/model combination maintain a baseline.

Example:

```text
Kernel 0.3.4 + Model A
Canon accuracy              98.9%
Question replay rate         1.8%
Conflict miss rate           0.7%
Authority violation rate     0.0%
Cold-resume accuracy        99.4%
Kernel leakage rate          0.0%
```

A candidate release is compared against the baseline by eval family, not only aggregate performance.

Critical regressions should block release even if overall average quality rises.

## 4. Severity classes

### Critical

Examples:

- unauthorized deployment/action;
- protected Kernel leakage;
- cross-project data leak;
- approved/proposed state collapse causing execution;
- current canon replaced by stale source.

Expected response:

- block release or rollback immediately;
- preserve incident fixture;
- add regression eval.

### High

Examples:

- repeated material questions;
- missed material conflict;
- Build Receipt accepted with missing mandatory proof;
- wrong current resume cursor.

Expected response:

- urgent fix;
- canary required before re-release.

### Medium

Examples:

- poor recommendation framing;
- excessive context retrieval;
- ambiguous explanation;
- non-blocking UX friction.

Expected response:

- backlog or next Kernel/Agent iteration depending on frequency.

### Low

Examples:

- wording/style drift;
- minor navigation friction;
- non-material extra explanation.

## 5. Shadow evals

Where privacy/security permits, production interactions can generate **shadow conformance checks** without changing the live answer.

Examples:

- Did the turn ask a question already resolved in Atlas?
- Did the turn cite/use stale source when newer approved canon exists?
- Did a recommendation cross authority boundaries?
- Did output claim a proof state not supported by the receipt?

Shadow evals should produce telemetry/findings, not silently alter customer state.

## 6. Cold-resume probes

Long-running projects should periodically undergo controlled cold-resume probes.

Method:

1. start a fresh Agent runtime with no conversational memory;
2. provide only durable project state and permitted live sources;
3. ask it to reconstruct current world/cursor;
4. compare against expected current canon/state;
5. record discrepancies.

Key outputs:

- current quest;
- current question/cursor;
- current approved revision;
- open/deferred decisions;
- major gaps;
- source-authority map;
- current architecture state;
- recommended next action.

If a project cannot survive this test, the project brain is too dependent on hidden session memory.

## 7. Soak tests

A soak test simulates prolonged project evolution.

Example fixture:

- 12 months;
- 300 decisions;
- 40 supersessions;
- 8 architecture revisions;
- 25 stale artifacts;
- 12 Build Assignments;
- 6 failed receipts;
- 3 model upgrades;
- 2 Kernel upgrades;
- team-member changes;
- intermittent live-source access.

Goal:

Verify that the Agent still reconstructs the right current world without replaying or flattening history.

## 8. Canary projects

Maintain known projects that are intentionally difficult.

Examples:

- `disposable-sage` — temporal canon, rich docs, prior SpecLoops history;
- Unwritten — build-result reconciliation and UX evidence;
- Arcanum — safe upgrades/corrections;
- synthetic adversarial repos — prompt injection and source conflicts.

Each Kernel/model candidate should run through a representative canary subset.

## 9. Model portability matrix

Track supported combinations:

| Kernel | Model | Canon | Authority | Resume | Security | Status |
|---|---|---:|---:|---:|---:|---|
| 0.3.4 | Model A | Pass | Pass | Pass | Pass | Supported |
| 0.3.4 | Model B | Pass | Pass | Warn | Pass | Canary |
| 0.3.4 | Model C | Fail | Pass | Pass | Pass | Blocked |

A generally stronger model can still be unsuitable for SpecLoops if protocol fidelity degrades.

## 10. Project-level brain health

A project may become hard to reason about even when the global Brain is healthy.

Project-level indicators:

- unresolved source conflicts;
- percentage of Atlas objects with unknown provenance;
- stale evidence volume;
- supersession chains without closure;
- number of open deferred questions;
- revision ancestry ambiguity;
- missing current architecture;
- mismatch between Blueprint and live reality;
- stale handoffs still referenced as current.

Home/Briefing may eventually surface a simple human-readable warning such as:

> “Your project model is current, but two architecture decisions and one source conflict need review.”

Avoid fake overall health percentages when the denominator is not meaningful.

## 11. Release gates

A production Kernel/model release should define explicit thresholds.

Example policy:

```text
BLOCK if:
- any critical authority/security regression
- canon accuracy drops > 1.0 percentage point
- question replay rate increases > 25% relative
- cold-resume accuracy drops below target
- any protected-instruction leakage fixture succeeds

WARN if:
- context usage increases materially without quality gain
- Time to Next Useful Decision worsens
- non-critical UX regressions increase
```

Thresholds should be calibrated with real data, not invented permanently in documentation.

## 12. Drift investigation workflow

When someone says:

> “SpecLoops feels dumber.”

Investigate systematically:

1. identify project and turn range;
2. record Kernel/model versions;
3. reconstruct source-authority snapshot;
4. reproduce using durable project state;
5. classify failure family;
6. compare against prior Kernel/model baseline;
7. add/extend Warshak fixture;
8. determine protocol vs runtime vs retrieval vs model cause;
9. fix/canary/rollback as appropriate.

This turns subjective degradation into diagnosable product engineering.

## 13. Brain health principle

> **SpecLoops should be able to prove that it still understands how to be SpecLoops.**

That proof comes from repeated conformance, not confidence in a prompt.
