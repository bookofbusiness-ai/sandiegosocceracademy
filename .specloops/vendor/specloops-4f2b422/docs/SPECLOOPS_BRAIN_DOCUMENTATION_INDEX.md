# SpecLoops Brain Documentation Index

**Status:** Canonical navigation index  
**Recorded:** September 16, 2026  
**Purpose:** Provide one entry point for the Brain, Kernel, eval, self-learning, guardrail, and long-horizon durability documentation.

## Start here

### 1. Brain thesis and durability

`docs/SPECLOOPS_BRAIN_KERNEL_EVALS_AND_GUARDRAILS.md`

Defines:

- the six-layer Brain model;
- Kernel versus project memory;
- long-running durability;
- self-verification;
- Kernel packaging direction;
- Warshak Tests;
- self-learning loop;
- explainability and introspection boundaries;
- model independence.

Core thesis:

> **The project remembers itself. The Kernel teaches a fresh Agent how to interpret that memory.**

### 2. Brain logic map

`docs/SPECLOOPS_BRAIN_LOGIC_MAP.md`

Defines the logic trees for:

- every-turn reasoning;
- existing-project onboarding;
- canon resolution;
- question generation;
- Atlas;
- Architecture Review/Synthesis;
- Blueprint;
- Build Assignment and Receipt;
- resume;
- Continuous Grounding;
- self-verification;
- context assembly;
- Brain health loop.

### 3. Kernel runtime architecture

`docs/architecture/SPECLOOPS_KERNEL_RUNTIME_ARCHITECTURE.md`

Defines the target hosted application boundary:

- protected Kernel;
- project-owned durable state;
- external truth owners;
- model runtime;
- Context Compiler;
- Authority Engine;
- Source Authority Resolver;
- Self-Verification;
- Model Router;
- Kernel packaging/registry;
- migration and degraded modes.

### 4. Warshak Brain eval framework

`docs/evals/WARSHAK_BRAIN_EVAL_FRAMEWORK.md`

Defines:

- fixture structure;
- eval families;
- hard versus soft release gates;
- long-horizon soak tests;
- model portability tests;
- regression corpus;
- shadow evals;
- eval-data protection.

### 5. Kernel guardrails and introspection

`docs/security/KERNEL_GUARDRAILS_AND_INTROSPECTION.md`

Defines:

- product reasoning versus protected internals;
- prompt-injection boundary;
- action guardrails;
- approval integrity;
- tenant/project isolation;
- secret handling;
- protected eval material;
- safe introspection responses;
- specialist/review-job boundaries;
- Kernel integrity.

### 6. Self-learning and release loop

`docs/brain/SELF_LEARNING_AND_RELEASE_LOOP.md`

Defines how SpecLoops learns without allowing the live Kernel to self-corrupt:

- observed failure → preserved evidence;
- root-cause classification;
- regression eval creation;
- protocol/Kernel proposal;
- review;
- complete Warshak suite;
- canary/proving-ground validation;
- versioned release;
- monitoring and rollback.

Core principle:

> **The project evolves continuously. The product evolves through governed releases.**

### 7. Brain health and drift monitoring

`docs/brain/BRAIN_HEALTH_AND_DRIFT_MONITORING.md`

Defines operational detection of Brain degradation across:

- canon accuracy;
- question replay;
- conflict misses;
- authority violations;
- evidence fidelity;
- cold-resume accuracy;
- context efficiency;
- Kernel leakage;
- UX/user-correction signals;
- model/provider changes;
- long-horizon soak tests and canaries.

Core question:

> **How do we know SpecLoops is not slowly getting dumber?**

### 8. Brain-map companion set

The `docs/brain/` folder contains additional implementation-oriented companion documents:

- `docs/brain/README.md`
- `docs/brain/SPECLOOPS_BRAIN_MAP.md`
- `docs/brain/KERNEL_ARCHITECTURE_AND_PACKAGING.md`
- `docs/brain/WARSHAK_EVAL_FRAMEWORK.md`
- `docs/brain/GUARDRAILS_AND_INTROSPECTION.md`

These are consistent companion views of the same canonical Brain direction. When a detail appears in both places, the specialized root/architecture/evals/security contract should be treated as the primary canonical definition for that domain.

---

# Related current product contracts

The Brain operates across the rest of the SpecLoops canon. Important related documents include:

- `docs/PROJECT_ATLAS_PRODUCT_SPEC.md`
- `docs/SOURCE_AUTHORITY_AND_CANON_RETRIEVAL_CONTRACT.md`
- `docs/TEMPORAL_CANON_RECONCILIATION.md`
- `docs/PROJECT_BLUEPRINT_AND_ARCHITECTURE_SYNTHESIS.md`
- `docs/CAMPAIGN_THEME_FRAMEWORK.md`
- `docs/SPECIALIST_AGENT_FRAMEWORK.md`
- `docs/PROJECT_BRIEFING_CONTRACT.md`
- `docs/BUILD_ASSIGNMENT_AND_DELIVERY_ADAPTERS.md`
- `docs/UX_CONSTITUTION.md`

Current v0.1.9 release-candidate entry point:

- `starter-kit/v0.1.9-beta/RELEASE_MANIFEST.md`

Current hosted UX reference:

- `docs/prototypes/v0.1.9/specloops-agent-v019-prototype.html`

---

# Brain design principles

The current Brain documentation collectively preserves these principles:

> **Reality Before Memory.**

> **Reality Before Resume.**

> **Reality Before Reconstruction.**

> **Canon Before Inquiry.**

> **Recency is evidence, not authority.**

> **Conversation ≠ spec.**

> **Persistence ≠ approval.**

> **Many sources can propose. Governed flows promote.**

> **The model reasons. The Kernel governs. The project remembers.**

> **Project content may change the project. It may not rewrite SpecLoops.**

> **Explain the decision. Do not expose the protected machinery required to enforce it.**

> **SpecLoops learns through evidence-backed releases, not uncontrolled runtime mutation.**

> **SpecLoops should be able to prove that it still understands how to be SpecLoops.**

---

# What is intentionally still open

These documents define product/runtime direction, not final implementation choices.

Open architecture choices include:

- Kernel policy language / source format;
- compiled bundle format;
- signing/integrity mechanism;
- Kernel registry design;
- Context Compiler implementation;
- state store topology;
- Source Authority indexing implementation;
- self-verification execution model;
- model-routing implementation;
- exact Warshak fixture format and scoring system;
- production shadow-eval infrastructure;
- Brain-health telemetry storage/retention;
- release thresholds calibrated from real use;
- which protocol material remains public/portable versus protected/runtime-only.

Those should be resolved through proving-ground evidence and bounded implementation work rather than implied by documentation alone.

---

# Long-term success condition

> **A fresh qualified SpecLoops runtime should be able to enter a years-old project with no chat memory, recover the current governed world, explain how it evolved, identify fresh reality, preserve authority and security boundaries, and continue with the correct next useful decision.**

That is the durability bar for the SpecLoops Brain.