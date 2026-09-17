# SpecLoops — Source Authority and Canon Retrieval Contract

**Status:** Canonical product direction for v0.1.9-beta  
**Recorded:** September 16, 2026  
**Source:** External-builder feedback from Brian / PRISM proving ground  
**Product Room authority:** Documentation only; no application implementation is authorized by this document.

## Purpose

SpecLoops must not force the human to repeat decisions that are already present in authoritative project materials.

A recurring failure mode in long-running product conversations is that an agent gradually treats original requirements, architecture documents, or product specifications as background guidance while elevating its own conversational reconstruction. That causes duplicate questions, requirement drift, and unnecessary human correction.

v0.1.9 adds a durable source-authority rule:

> **Canon Before Inquiry.**

Before asking a material product question, SpecLoops must first determine whether authoritative project sources already answer it.

Related principle:

> **SpecLoops should ask only for information it cannot responsibly recover from the project itself.**

## Authority is question-dependent

There is no single universal source that wins every question. Authority depends on what is being asked.

### Intended behavior

Question:

> What should the product do?

Prefer:

- approved requirements;
- original product requirements documents where still current;
- approved architecture/UX/security specifications;
- named approved specs;
- explicit human decisions and supersession records.

Do not downgrade these materials into mere suggestions because a later conversation is easier to access.

### Observed behavior

Question:

> What does the product currently do?

Prefer:

- current repository state;
- code/configuration;
- tests;
- Build Receipts;
- CI/runtime evidence;
- verified deployment/observability state.

Documentation of intent is not proof of current implementation.

### Decision provenance

Question:

> Why was this chosen, and what depends on it?

Prefer:

- Decision Graph / Decision Ledger;
- question ledger and named revisions;
- provenance attached to Atlas objects;
- explicit supersession/change records.

## Required pre-question behavior

Before asking a consequential question:

1. identify the decision/domain;
2. resolve relevant authoritative sources and Atlas objects;
3. determine whether the question is already answered, partially answered, contradicted, or genuinely unresolved;
4. only ask the human for the missing judgment.

Conceptual flow:

```text
Material question identified
        ↓
Search authoritative project sources / Atlas
        ↓
Classify
  ┌──────────────┬───────────────┬──────────────┬───────────────┐
  │ ANSWERED     │ PARTIAL       │ CONFLICT     │ UNRESOLVED    │
  ↓              ↓               ↓              ↓
Reuse canon   State canon +   Surface both   Ask human for
             ask missing bit  authorities    new decision
```

## Four required cases

### 1. Canon already answers the question

Do not ask again.

Preferred UX:

> “The original Product Library requirements already specify X. I’m carrying that forward as canonical. The next unresolved decision is Y.”

### 2. Canon partially answers the question

State what is already established and ask only for the missing decision.

Do not make the user restate established context before answering the unresolved part.

### 3. Authoritative sources conflict

Preserve the conflict explicitly.

Do not silently choose the newer, more conversational, or easier-to-read source.

Surface:

- Source A says X;
- Source B says Y;
- which authority applies to the current scope;
- what downstream items may be affected.

If no precedence rule resolves the conflict, request human judgment.

### 4. Reality differs from canonical intent

Do not rewrite intent to match implementation.

Create or update a Gap Object:

- intended state;
- observed state;
- evidence;
- consequence;
- freshness/confidence;
- recommended next action.

This preserves the Project Atlas principle that intent and reality can disagree without either silently winning.

## Source authority index

SpecLoops should maintain or derive a compact authority map for important domains so later conversations do not have to rediscover source precedence from scratch.

Illustrative structure:

```text
Product requirements
→ original/approved PRD + approved named specs

Architecture intent
→ approved architecture document

UX requirements
→ approved UX spec + canonical UX principles

Security requirements
→ approved security/policy materials

Current implementation
→ live repository + tests + current Build Receipts

Current campaign decisions
→ Question Ledger + approved revisions

Build evidence
→ Build Receipt + CI/test evidence
```

This may later become an indexed service capability in the hosted Agent. The portable Core requirement is semantic: preserve source class, authority, provenance, and supersession clearly enough for a fresh agent to recover them.

## Atlas integration

Relevant Atlas objects should retain, where applicable:

- source;
- authority class;
- provenance;
- lifecycle state;
- freshness;
- `INTENDED | OBSERVED | APPROVED | PROPOSED | HISTORICAL | UNKNOWN` classification;
- supersession link when applicable.

When Product Room formulates a question, it should consult the relevant Atlas objects and canonical sources first.

## Continuous Grounding integration

Project Review Jobs / Continuous Grounding should help keep source authority and current reality usable between sessions.

A review may:

- detect newly changed authoritative docs;
- detect implementation drift from canonical requirements;
- identify stale or superseded source mappings;
- propose authority-index updates;
- create findings or Gap Objects.

Default review authority remains:

`READ_ONLY + PROPOSE_FINDINGS + NO_CANONICAL_EDITS`

A scheduled review must not silently supersede a human-approved requirement.

## Product Room UX

The user should see when SpecLoops is relying on existing canon rather than presenting old material as a new recommendation.

Good examples:

> “Already established in the original requirements: Product Library entries retain their source metadata.”

> “Your architecture document already answers most of this. I only need one missing decision: whether X also applies to Y.”

> “I found a conflict: the approved architecture says X, while the current code does Y.”

Avoid:

- asking the same question again in different words;
- treating original requirements as optional guidance without evidence they were superseded;
- inferring that implementation changed the requirement;
- forcing the human to re-upload/re-explain known materials.

## Durable principle family

> **Reality Before Memory.**

> **Reality Before Resume.**

> **Reality Before Reconstruction.**

> **Canon Before Inquiry.**

Together:

- reality establishes what exists;
- durable state establishes where the process was;
- authoritative project sources establish what was already decided;
- the human is asked only for genuinely unresolved judgment.

## Validation scenario — Brian / PRISM regression

Given:

- a repository containing robust original PRISM product/architecture documents;
- an active Product Room discussion that continues into architecture constraints and Product Library;
- requirements already answered in those original materials;
- a fresh or long-running Agent session.

PASS behavior:

- retrieve and honor relevant original requirements before asking a material question;
- treat those requirements as canonical unless superseded;
- ask only unresolved details;
- identify contradictions explicitly;
- preserve implementation reality separately from product intent.

FAIL behavior:

- require Brian to remind SpecLoops to reread original documents;
- treat approved/original requirements as mere suggestions;
- repeat already-answered questions;
- let conversational summaries silently override original requirements;
- let current code silently redefine product intent.

## Product Room boundary

This contract defines product behavior and release semantics only. It does not authorize application code, repository automation, background indexing infrastructure, or hosted Agent implementation from Product Room.
