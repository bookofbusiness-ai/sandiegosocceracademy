# SpecLoops — Build Assignment, Verification Contract, Build Receipt, and Delivery Adapter Model

**Status:** Product direction / candidate v0.1.9-beta scope  
**Recorded:** September 16, 2026  
**Product Room authority:** Documentation only; no application implementation is authorized by this document.

## Product insight

The current Handoff Brief is semantically strong but operationally manual. A human often has to take an approved handoff, copy it into a coding-agent session, explain where the repository is, and then manually reconnect the result back to Product Room.

That makes the human the message bus.

SpecLoops should reduce that orchestration burden without becoming the coding agent, tester, CI/CD system, or repository implementation engine.

> **SpecLoops turns an approved product decision into a machine-consumable Build Assignment, publishes it into the customer's existing engineering workflow, requires the right proof to come back, and reconciles that proof against the approved specification.**

The first likely delivery adapter is a GitHub Pull Request, but **PR is not the product abstraction**. The durable abstractions are:

1. **Build Assignment** — what is authorized to be built;
2. **Verification Contract** — what proof must come back;
3. **Build Receipt** — what evidence actually came back;
4. **Delivery Adapter** — how the assignment and receipt travel through the customer's workflow.

## Build Assignment

A Build Assignment is the execution contract for one approved bounded change.

It should contain, at minimum:

- assignment ID;
- project/repository identity;
- approved spec ID/revision/hash;
- expected repository ref/HEAD at assignment creation;
- exact implementation authority;
- desired outcome;
- in-scope work;
- out-of-scope work;
- protected baseline;
- acceptance criteria;
- relevant Project Atlas objects;
- affected dependencies/gaps;
- required capabilities;
- attached Verification Contract;
- required builder self-description;
- expected return path to Product Room;
- expiration/freshness/idempotency metadata where appropriate.

Illustrative shape:

```text
BUILD ASSIGNMENT
id: BA-104
project: <project-id>
repository: owner/repo
expected_head: <sha>
approved_spec: <quest-id>-rN
scope_hash: <hash>
authority: IMPLEMENT_EXACT_SCOPE

desired_outcome:
...

in_scope:
...

out_of_scope:
...

protected_baseline:
...

acceptance_criteria:
...

verification_contract:
...

return_to:
PRODUCT_ROOM_REVIEW
```

The assignment is not a transcript dump and is not a replacement for Reality Before Implementation.

## Verification Contract

The Build Assignment should define verification expectations before implementation starts.

The Verification Contract says what evidence is required for the result to be considered sufficiently proven for Product Room review.

Examples may include:

- unit tests;
- integration tests;
- regression tests;
- acceptance-criterion mapping;
- browser/runtime walkthroughs;
- screenshots for affected UI states and breakpoints;
- accessibility checks;
- security checks;
- architecture constraints;
- package/dependency policy;
- coding standards;
- organization-specific engineering rules;
- deployment or runtime checks when explicitly authorized;
- changed-file and commit inventory;
- builder self-description;
- deviations, NOT_RUN items, failures, and unresolved risks.

The contract should be composable from multiple policy layers:

```text
Organization standards
        ↓
Project standards
        ↓
Campaign standards
        ↓
Quest / spec acceptance criteria
        ↓
Build Assignment Verification Contract
```

This allows a project to encode rules such as:

> For user-facing UI changes, launch the application, authenticate if necessary, navigate the affected flow, inspect the result at relevant breakpoints, capture screenshots, and check for obvious layout/interaction regressions before reporting completion.

SpecLoops does not need to hard-code screenshots for every project. It needs to know that **this project requires visual proof for this class of work**.

## Three categories of proof

Build evidence should be evaluated across three distinct proof classes.

### 1. Implementation proof

Answers:

> Did the builder actually make the requested change?

Possible evidence:

- diff;
- commit SHA;
- changed paths;
- configuration changes;
- code inspection.

### 2. Behavioral proof

Answers:

> Does the software actually behave as specified?

Possible evidence:

- unit tests;
- integration tests;
- browser tests;
- API tests;
- runtime checks;
- screenshots / walkthrough evidence.

### 3. Conformance proof

Answers:

> Did the work follow the project and organization rules?

Possible evidence:

- UX standards;
- security rules;
- accessibility requirements;
- architecture constraints;
- package policy;
- coding standards;
- organization-specific engineering controls.

These proof classes should remain separate. A change can be implemented correctly while still failing required conformance checks.

## Build Receipt

A Build Receipt is the returned evidence object paired to a Build Assignment.

It should answer:

- what assignment was executed;
- what actually changed;
- what commit/ref/PR represents the result;
- which acceptance criteria passed, failed, were not run, or were blocked;
- which Verification Contract checks were performed;
- which project/organization rules were proven;
- what evidence supports each claim;
- what changed outside expected scope, if anything;
- what remains unresolved;
- what the builder says it did;
- what trusted external systems independently report.

Illustrative shape:

```text
BUILD RECEIPT
assignment: BA-104
result_head: <sha>

implementation_proof: PASS
behavioral_proof: PASS
conformance_proof: REVIEW_NEEDED

acceptance_criteria:
- AC-1 PASS
- AC-2 PASS
- AC-3 NOT_RUN

verification:
- unit_tests PASS
- integration_tests PASS
- desktop_visual PASS
- mobile_visual FAIL
- accessibility NOT_RUN

changed_paths:
...

external_evidence:
...

builder_self_description:
...

deviations:
...

unresolved:
...
```

The Build Receipt is evidence, not acceptance.

> **Coding completion is not human acceptance.**

A returned receipt should usually place the assignment into Product Room review rather than silently marking the work complete.

## Hybrid receipt assembly

The Build Receipt should not depend entirely on the builder's own claim.

Preferred direction:

- builder returns a minimum self-description and any evidence it generated;
- SpecLoops independently assembles or verifies additional receipt fields from trusted systems where possible;
- Git/repository state, CI results, test artifacts, screenshots, scanners, deployment systems, and other authoritative sources may contribute evidence;
- unsupported claims remain unverified rather than being promoted to PASS.

> **The builder supplies evidence. SpecLoops assembles and reconciles the receipt.**

This keeps the receipt useful even when different builders provide different levels of self-reporting quality.

## SpecLoops' verification role

SpecLoops is not the universal tester.

It should not try to replace unit-test frameworks, Playwright, security scanners, CI/CD, accessibility tools, human QA, or coding agents.

Instead:

> **SpecLoops is the system that defines what proof is required, gathers the returned evidence, and evaluates whether that evidence satisfies the approved specification and project rules.**

The actual proof producers may be:

- coding agent;
- CI pipeline;
- unit/integration test framework;
- browser automation;
- security scanner;
- accessibility checker;
- observability system;
- deployment platform;
- human QA/reviewer;
- another enterprise validation harness.

This creates a clean separation between **proof execution** and **proof governance**.

## Code-inspection boundary

SpecLoops may inspect implementation reality in order to verify the Build Assignment.

That may include:

- reading repository state;
- reading diffs;
- inspecting tests;
- inspecting configuration;
- comparing implementation against approved requirements;
- inspecting screenshots and runtime evidence;
- identifying gaps or out-of-scope changes;
- classifying criterion evidence.

This is different from authoring code.

> **Reading code to verify reality is not the same as writing code to change reality.**

In the Product Room governance role, if verification finds a miss, SpecLoops should return the gap rather than silently repair it.

Example:

```text
Criterion AC-7: FAIL

Expected:
Mobile navigation must not overlap primary CTA.

Observed:
CTA overlaps menu at 390px viewport.

Evidence:
screenshot/mobile-home.png

Next:
Return Build Assignment for correction.
```

Not:

> I fixed it.

## Why a Pull Request is a strong first adapter

A GitHub PR provides a shared, inspectable rendezvous point among:

- the human;
- SpecLoops;
- the coding agent;
- repository maintainers;
- tests/checks;
- implementation commits;
- verification artifacts;
- Build Receipt evidence;
- review discussion.

Instead of:

```text
Product Room → handoff doc → human copy/paste → coding agent
```

SpecLoops could support:

```text
Product Room
    ↓
Approved Spec
    ↓
Build Assignment + Verification Contract
    ↓
Repository / PR
    ↑
Coding Agent / CI / QA
    ↓
Build Receipt
    ↓
SpecLoops reconciliation
    ↓
Product Room Review
```

The user authorizes publication of the Build Assignment. SpecLoops then creates or updates the repository-native handoff artifact. A compatible coding agent can be directed to the assignment rather than requiring the human to manually transport the full context.

## Pull Request adapter concept

For GitHub-native projects, one possible adapter shape is:

```text
branch: specloops/build-assignment-104

handoffs/
  BUILD_ASSIGNMENT.md
  VERIFICATION_CONTRACT.md
  BUILD_RECEIPT.md
  manifest.json
```

The PR might be titled:

> **Build Assignment #104 — Authentication Hardening**

The coding agent can then be instructed:

> Read the approved SpecLoops Build Assignment in PR #104, re-establish live repository reality, implement only the authorized scope, and return the evidence required by the Verification Contract.

The exact file/branch structure is implementation detail and remains subject to Build Agent design. The important product contract is that the assignment is durable, inspectable, bounded, addressable, and paired with explicit verification requirements and a return receipt.

## PR as an authority envelope

The repository-native assignment can also make authority and drift visible.

Candidate fields:

- `authority: APPROVED`;
- approved spec revision/hash;
- expected HEAD;
- assignment/scope hash;
- implementation permission;
- merge permission;
- deploy permission;
- spend/external-action permission where relevant.

If material assignment artifacts change after human approval, SpecLoops should detect that the approved authority envelope no longer matches and require reconciliation rather than silently allowing expanded work.

> **Repository access is not implementation authority. A Build Assignment carries the approved execution boundary.**

## Governed return protocol

The v0.1.9 loop is not complete when the assignment is sent. It is complete when a result comes back with enough evidence to be reviewed against the assignment.

Conceptual return protocol:

```text
APPROVED INTENT
      ↓
BUILD ASSIGNMENT
      ↓
VERIFICATION CONTRACT
      ↓
EXECUTION
      ↓
BUILD RECEIPT
      ↓
SPECLOOPS VERIFICATION / RECONCILIATION
      ↓
ACCEPT | REVISE | RETURN | BLOCK
```

SpecLoops' role between Build Assignment and Build Receipt is to preserve the contract, observe trusted evidence, detect drift, and reconcile the returned result against the original approved intent.

## Relationship to Build Result Reconciliation

The Build Receipt formalizes the return side of Build Result Reconciliation.

Instead of merely detecting that implementation happened, SpecLoops can ask:

- Was this the assigned work?
- Was it built against current reality?
- Did the result stay inside scope?
- Did the acceptance criteria pass?
- Did required project/organization rules pass?
- Is the evidence sufficient?
- What is still NOT_RUN, BLOCKED, or FAILED?
- What Atlas objects should move from intended to implemented/verified/stale?

This turns Build Result Reconciliation from a cursor-correction mechanism into a richer evidence-backed return protocol.

## Delivery Adapters

Do not make GitHub Pull Requests mandatory. Different organizations use different engineering systems and governance practices.

The Build Assignment and Build Receipt should remain vendor-neutral while adapters deliver them into existing workflows.

Candidate adapters:

- GitHub Pull Request;
- GitHub Issue;
- GitLab Merge Request;
- Jira ticket;
- Linear issue;
- agent API/session launch;
- webhook/event;
- CI workflow trigger;
- repository file-only handoff;
- future enterprise/custom adapter.

Some organizations may use trunk-based development, Gerrit, internal change systems, or policies that prohibit bots from creating PRs. SpecLoops should adapt transport without changing assignment/receipt semantics.

> **The transport changes. The execution contract does not.**

## Execution-plane neutrality

SpecLoops should not need to be the coding agent.

A Build Assignment may be consumed by:

- Codex;
- Claude Code;
- Hermes;
- Cursor;
- Devin;
- another coding agent;
- an internal enterprise agent;
- a human development team;
- a CI/CD orchestration system.

Strategic role:

> **SpecLoops is the control plane for intent, authority, evidence, and continuity.**

The execution plane remains pluggable.

This reduces vendor dependence and keeps SpecLoops relevant even as coding agents change.

## CI/CD positioning

SpecLoops should not try to replace GitHub Actions, Jenkins, CircleCI, GitLab CI, Azure DevOps, or other delivery systems.

Instead:

> **SpecLoops injects governed product intent into whatever delivery system you already use, and reads evidence back out.**

Another durable positioning statement:

> **SpecLoops is not your pipeline. It is the intent and governance layer around your pipeline.**

And with the return protocol:

> **SpecLoops governs not just what gets built, but what proof must come back before the work is considered complete enough for review.**

> **The builder does the work. SpecLoops defines the contract and checks the receipt.**

> **SpecLoops turns product intent into an executable contract, then reconciles the returned evidence against that contract.**

Conceptually:

```text
PRODUCT INTENT
      ↓
  SPECLOOPS
      ↓
BUILD ASSIGNMENT
      ↓
CUSTOMER DELIVERY SYSTEM
      ↓
IMPLEMENTATION + TESTING
      ↓
BUILD RECEIPT
      ↓
  SPECLOOPS
      ↓
HUMAN DECISION
```

## Relationship to Project Atlas

Project Atlas answers:

- what should exist;
- what exists;
- what proves it;
- where the gap is;
- what should happen next.

Campaigns answer:

- what outcome are we pursuing now?

Product Room answers:

- what does the human decide?

Build Assignment answers:

- what exactly is now authorized to execute?

Verification Contract answers:

- what proof must come back?

Build Receipt answers:

- what proof actually came back?

This creates a coherent end-to-end product model:

> **Atlas identifies the gap → Campaign prioritizes it → Product Room decides it → Build Assignment authorizes it → Verification Contract defines proof → execution system builds/tests it → Build Receipt returns evidence → SpecLoops reconciles reality → human reviews.**

## Human experience target

The user should not manually carry a giant handoff into another agent or reconstruct QA expectations after the work is done.

Preferred experience:

```text
Quest approved ✓
Build Assignment ready ✓
Verification Contract ready ✓
Repository destination resolved ✓

[ Send to Build ]
```

After authorization:

```text
Build Assignment published
PR #104
Waiting for builder
```

And after implementation:

```text
Build Assignment #104 returned

Implementation proof   PASS
Behavioral proof       PASS
Conformance proof      REVIEW_NEEDED

6 criteria passed
1 criterion not verified
1 mobile visual check failed

[ Review Receipt ]
```

The human authorizes transitions; SpecLoops transports durable intent, verification expectations, and returned evidence.

## Governance boundaries

- Creating a Build Assignment is not implementation.
- Publishing a Build Assignment is not permission to deploy.
- A PR does not itself grant implementation authority unless it carries/binds an approved authority envelope.
- A builder must still run Reality Before Implementation.
- Material scope changes require renewed product authority.
- A Build Receipt is evidence, not acceptance.
- SpecLoops may inspect code and evidence to verify reality without becoming the code author.
- Verification failure should return a gap/correction request, not trigger silent code repair from Product Room.
- Unsupported builder claims remain unverified.
- Evidence can update observed reality, not silently rewrite canonical intent.
- SpecLoops must not assume repository workflow or branch policy.
- SpecLoops should integrate with existing SDLC controls rather than bypass them.

## Open product questions

These remain for future Product Room resolution before implementation is authorized:

1. Is `Build Assignment` the final user-facing name, or should it be internal with a simpler UI label such as `Send to Build`?
2. Is `Build Receipt` the final user-facing name, or should the UI use something like `Build Evidence` / `Verification Receipt`?
3. Should GitHub PR be the default adapter for the first hosted implementation, or should Issue/file-only delivery be supported simultaneously?
4. Should the PR be created from a dedicated assignment branch, or can the assignment exist as a PR/task object without a code branch until a builder starts?
5. How should scope-hash/authority invalidation be surfaced when the assignment changes after approval?
6. How does a coding agent claim an assignment, and how is duplicate execution prevented?
7. Which evidence should be written back into the PR versus stored in Project Atlas/service state?
8. Which evidence fields are mandatory from the builder versus independently assembled by SpecLoops?
9. What is the exact Verification Contract inheritance model across organization/project/campaign/spec?
10. How should screenshots and visual evidence be retained, expired, or re-run after UI drift?
11. How should enterprise policy control allowed adapters, builders, branches, deploy rights, proof requirements, and external actions?
12. What is the minimum interoperable manifest format for third-party agents such as Hermes?

## Product Room boundary

This document captures product and marketing direction only.

No coding, deployment, branch automation, PR automation, CI/CD implementation, testing execution, code modification, or hosted Agent modification is authorized from Product Room by this artifact alone.
