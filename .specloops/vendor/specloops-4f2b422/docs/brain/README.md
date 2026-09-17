# SpecLoops Brain Documentation

**Status:** Canonical platform-direction index  
**Recorded:** September 16, 2026

This folder collects the platform-level documentation for the SpecLoops Brain: the logic that allows a fresh Agent to interpret durable project truth consistently across long-running projects, model upgrades, source conflicts, security boundaries, and product evolution.

## Start here

1. [`SPECLOOPS_BRAIN_MAP.md`](./SPECLOOPS_BRAIN_MAP.md)  
   System map, layers, runtime logic tree, context hierarchy, state distinctions, durability model.

2. [`KERNEL_ARCHITECTURE_AND_PACKAGING.md`](./KERNEL_ARCHITECTURE_AND_PACKAGING.md)  
   Separation between public protocol, protected runtime Kernel, and project-owned brain; packaging, compatibility, release and rollback direction.

3. [`WARSHAK_EVAL_FRAMEWORK.md`](./WARSHAK_EVAL_FRAMEWORK.md)  
   Protocol-conformance evals that test whether SpecLoops still applies the correct logic under temporal conflict, authority pressure, stale state, model changes and adversarial inputs.

4. [`SELF_LEARNING_AND_RELEASE_LOOP.md`](./SELF_LEARNING_AND_RELEASE_LOOP.md)  
   Evidence → regression eval → governed Kernel change → canary → release. Defines how SpecLoops learns without live self-corruption.

5. [`GUARDRAILS_AND_INTROSPECTION.md`](./GUARDRAILS_AND_INTROSPECTION.md)  
   Explainability, prompt/instruction boundaries, project-content isolation, protected Kernel introspection, authority/canon/evidence/context guardrails.

## Umbrella document

The higher-level platform thesis remains:

- [`../SPECLOOPS_BRAIN_KERNEL_EVALS_AND_GUARDRAILS.md`](../SPECLOOPS_BRAIN_KERNEL_EVALS_AND_GUARDRAILS.md)

The documents in this folder deepen and separate that thesis into buildable product concerns.

## Related canonical contracts

- [`../PROJECT_ATLAS_PRODUCT_SPEC.md`](../PROJECT_ATLAS_PRODUCT_SPEC.md)
- [`../SOURCE_AUTHORITY_AND_CANON_RETRIEVAL_CONTRACT.md`](../SOURCE_AUTHORITY_AND_CANON_RETRIEVAL_CONTRACT.md)
- [`../TEMPORAL_CANON_RECONCILIATION.md`](../TEMPORAL_CANON_RECONCILIATION.md)
- [`../PROJECT_BLUEPRINT_AND_ARCHITECTURE_SYNTHESIS.md`](../PROJECT_BLUEPRINT_AND_ARCHITECTURE_SYNTHESIS.md)
- [`../BUILD_ASSIGNMENT_AND_DELIVERY_ADAPTERS.md`](../BUILD_ASSIGNMENT_AND_DELIVERY_ADAPTERS.md)
- [`../UX_CONSTITUTION.md`](../UX_CONSTITUTION.md)

## Core thesis

```text
Protected SpecLoops Kernel
        +
Project-Owned World / Atlas
        +
Active Campaign
        +
Current Live Reality
        +
Transient Conversation
        +
Self-Verification
        ↓
Next Useful Decision / Governed Action
```

> **The project remembers itself. The Kernel teaches a fresh Agent how to interpret that memory.**

> **The project evolves continuously. The product evolves through governed releases.**

> **Project content may change the project. It may not rewrite SpecLoops.**
