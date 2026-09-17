# Project Blueprint and Architecture Synthesis

**Status:** Canonical v0.1.9 product contract  
**Recorded:** September 16, 2026  
**Applies to:** Existing-project onboarding, Project Atlas reconstruction, Product Room, Architect specialist, build-readiness transition

## Product problem

A new user does not install SpecLoops because they want to answer an endless requirements interview or accumulate specification files. They want to move from:

> **This is what I want**

to:

> **This is the system we now understand, this is how it can be built, this is what is still missing, and this is the governed handoff that can turn it into working software.**

SpecLoops must therefore treat first-run discovery as a path toward build readiness, not as an end in itself.

The user should not experience SpecLoops as a long questionnaire.

> **SpecLoops should reconstruct as much of the project as possible, show the user the emerging Project Atlas, ask only for material missing decisions, help synthesize or assess architecture where necessary, produce a coherent Project Blueprint, and continuously move the project toward a high-quality Build Assignment and working software.**

## 1. Existing-project onboarding starts with reconstruction

When SpecLoops encounters an existing repository, it should inspect available project reality and canonical material before asking the human to explain the project again.

Relevant sources may include:

- product requirements;
- original specification documents;
- architecture documents;
- UX and design material;
- security/privacy requirements;
- README and project documentation;
- current implementation;
- tests and acceptance evidence;
- deployment and configuration files;
- decision records;
- roadmap/changelog;
- Build Receipts and prior handoffs where present.

This extends the principles:

> **Reality Before Reconstruction.**

> **Canon Before Inquiry.**

The user-facing result should be:

> **Here is what I already understand. I will not ask you to re-decide what the project already tells me.**

## 2. Bootstrap Project Atlas before interviewing the user

Existing-project onboarding should populate as much of Project Atlas as the evidence responsibly supports.

Examples:

### Product

- intended users;
- problems/outcomes;
- capabilities;
- requirements;
- explicit non-goals;
- open product decisions.

### User Experience

- known journeys;
- screens/surfaces;
- interaction requirements;
- accessibility constraints;
- unresolved UX gaps.

### Architecture

- existing architecture, if documented or observable;
- major services/modules;
- stores/databases;
- integrations;
- hosting/runtime;
- model/AI dependencies;
- unresolved architecture decisions.

### Security and Privacy

- identity/authentication;
- authorization;
- data boundaries;
- privacy constraints;
- material risks;
- existing controls.

### Quality

- acceptance criteria;
- tests;
- evidence;
- known regressions;
- verification gaps.

Atlas objects should retain provenance and state such as:

- canonical;
- observed;
- inferred;
- proposed;
- unknown;
- stale;
- needs review.

The user should begin with a partially reconstructed world, not an empty form.

## 3. Show the missing path to build

After reconstruction, SpecLoops should explain what is sufficiently understood and what still blocks build readiness.

Avoid fake precision when the denominator is uncertain. The experience should communicate categories of readiness instead of manufacturing a misleading overall score.

Example:

> Product scope is substantially defined.  
> Architecture has not yet been approved.  
> Security requirements are partially defined.  
> Three material product decisions remain.  
> Two implementation constraints require confirmation.

The core interaction becomes:

> **Here is what I know → here is what is missing → here is why it matters → here is the next useful decision.**

SpecLoops should ask only questions that close material gaps between the reconstructed project and build readiness.

## 4. Architecture has three distinct states

SpecLoops must distinguish:

### Observed architecture

What currently exists in the repository/runtime.

### Proposed architecture

A recommendation generated from current product requirements, constraints, risks, team context, and existing implementation reality.

### Approved target architecture

The architecture the human has explicitly selected or approved for the project.

These states must not silently collapse into one another.

## 5. Architecture Review when an architecture already exists

If the repository already contains an architecture definition or one can be reliably reconstructed, SpecLoops should map and assess it rather than invent a replacement.

The Architect perspective should be able to produce an assessment such as:

- existing stack and system boundaries;
- what is aligned with current requirements;
- what appears stale;
- missing capabilities;
- contradictions between intent and implementation;
- scale/security/operations concerns;
- recommended modernization or preservation actions.

The result may create Gap Objects, but current implementation does not silently become approved intent.

## 6. Architecture Synthesis when architecture is missing

When product intent is sufficiently defined but architecture is not, SpecLoops should be able to synthesize viable architecture options.

Inputs may include:

- product requirements;
- UX requirements;
- expected scale;
- security/privacy constraints;
- budget/economic constraints;
- team capability;
- existing repository/language choices;
- integrations;
- hosting/operational constraints;
- organization standards.

Architecture Synthesis may propose a recommended option plus alternatives and tradeoffs.

Example structure:

### Recommended option

- application/runtime;
- database/storage;
- authentication/identity;
- hosting/deployment;
- source control/delivery;
- workflow/background processing;
- AI/model providers where relevant;
- observability;
- major third-party services.

Explain why it fits the project's actual requirements and constraints.

### Alternatives

Provide alternatives only when they represent materially different tradeoffs.

A recommendation remains **PROPOSED** until the human approves it.

> **Recommendation can change without changing the decision. Approval creates the target.**

## 7. Project Blueprint

The primary synthesis artifact should be a **Project Blueprint**: a coherent human-readable rendering of the shared Project Atlas suitable for review, sharing, printing, or build handoff preparation.

It is not a second source of truth. It is a rendered view of governed project state.

A Project Blueprint should normally contain:

1. **Executive summary** — what is being built and for whom.
2. **Product model** — users, problems, outcomes, capabilities, boundaries.
3. **Functional requirements** — what the system must do.
4. **Experience model** — major journeys and user-facing surfaces.
5. **Architecture** — observed/current architecture, proposed architecture when needed, and approved target architecture when available.
6. **Data model** — major entities, relationships, and persistence concerns at the appropriate level.
7. **Security and privacy** — identity, authorization, data boundaries, important controls and unresolved risks.
8. **Integrations** — external systems/services and important contracts.
9. **Quality model** — acceptance criteria, evidence expectations, and verification requirements.
10. **Deployment and operations** — environments, hosting, observability, release assumptions, and operational constraints.
11. **Known gaps and unknowns** — unresolved, deferred, stale, or contradictory areas.
12. **Recommended path to build** — sequencing and dependencies.
13. **Build-readiness summary** — what remains before a bounded Build Assignment can be authorized.

The Blueprint should trace material statements back to Atlas objects/sources rather than inventing unsupported certainty.

## 8. Blueprint is a transition artifact, not a finish line

The desired first-run journey is:

```text
Install / connect project
        ↓
Reality-first reconstruction
        ↓
Canon retrieval / source authority
        ↓
Project Atlas bootstrap
        ↓
Material gaps surfaced
        ↓
Targeted Product Room decisions
        ↓
Architecture Review OR Architecture Synthesis
        ↓
Project Blueprint
        ↓
Human review / approval of target state
        ↓
Build readiness
        ↓
Build Assignment + Verification Contract
        ↓
Execution
        ↓
Build Receipt / evidence
        ↓
Atlas update
```

SpecLoops should continuously move the user toward working software unless the user's chosen campaign explicitly stops at planning/review.

## 9. Relationship to Build Assignment

The Project Blueprint is broader than a Build Assignment.

- **Project Blueprint** explains the understood/approved project and path forward.
- **Build Assignment** authorizes a bounded unit of implementation work.
- **Verification Contract** defines what proof must return for that assignment.

The Blueprint should make Build Assignments better by giving them richer, governed context.

Product-quality bar:

> **A SpecLoops Build Assignment should be better than the handoff a strong product leader would manually write after weeks of project work.**

The assignment should be able to draw from:

- approved requirements;
- architecture;
- decisions;
- gaps;
- evidence;
- acceptance criteria;
- constraints;
- dependencies;
- authority boundaries.

## 10. First-run UX principle

Do not optimize onboarding for number of questions answered.

Optimize for:

> **Time to an accurate project model and the next useful build-enabling decision.**

The user should be able to see the Atlas filling in as SpecLoops learns from the repository and from human decisions.

Manual save prompts should not become the user's mental model for progress. Checkpoints preserve progress; they are not the product outcome.

The desired psychological transition is:

> **AI requirements interviewer → AI product-development operating system.**

## 11. Authority and governance

Architecture recommendations do not create implementation authority.

A Project Blueprint does not automatically authorize a build.

Observed code does not silently redefine approved requirements.

A generated recommendation does not silently become canonical.

Human approval remains explicit for consequential product/architecture decisions and exact build transitions.

## 12. Relationship to v0.1.9

This contract is part of the v0.1.9 product direction and should be used by the hosted Agent validation build.

It composes existing v0.1.8/v0.1.9 primitives rather than introducing a separate operating system:

- Project Atlas;
- Reality-First Reconstruction;
- Canon Before Inquiry;
- Campaign Themes;
- Architect specialist;
- Project Briefing;
- Gap Objects;
- Build readiness;
- Build Assignment;
- Verification Contract;
- Build Receipt.

Portable Core defines the project/authority semantics. The hosted Agent implements the first-run journey and synthesis experience.

## 13. SAGE proving-ground hypothesis

A full disposable copy of the SAGE repository should be used as a proving ground for this behavior.

The test should determine whether SpecLoops can:

1. inspect a realistic full repository and documentation set;
2. reconstruct the Atlas without treating onboarding as a blank questionnaire;
3. honor original requirements as canon unless superseded;
4. distinguish current architecture from target architecture;
5. identify genuinely missing architecture decisions;
6. synthesize architecture recommendations only where needed;
7. produce a coherent Project Blueprint;
8. show what remains before Build Assignment readiness;
9. avoid asking questions already answered in the repository;
10. create a handoff comparable in quality to a strong manually produced architecture/build brief.

The proving-ground project may be called **disposable-sage** and should be explicitly treated as throwaway validation data rather than a production SAGE workspace.
