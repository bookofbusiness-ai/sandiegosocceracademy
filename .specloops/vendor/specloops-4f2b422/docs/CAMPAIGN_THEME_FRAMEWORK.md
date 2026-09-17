# Campaign Theme Framework

**Status:** Canonical product direction  
**Recorded:** September 16, 2026

## Definition

A Campaign Theme is a packaged operating playbook over the Project Atlas. It defines the outcome, relevant Atlas domains, likely quest sequence, decision framework, specialist participation, evidence expectations, exit criteria, and transition behavior.

It is not merely a questionnaire or agent bundle.

> **Atlas = the world model. Campaign Theme = the playbook for changing or understanding that world.**

## Entry paths vs themes

Project entry paths answer the user's relationship to the project: start new, resume existing, or join/invite into existing work.

Campaign Themes answer what the user is trying to accomplish after the project relationship is established.

## Initial themes

### Session Zero / MVP
Guide a net-new project from concept to a buildable first prototype while progressively populating the Atlas.

### Refactor & Modernize
Understand current implementation, compare against desired/modern architecture, identify debt/risk, define target state, and sequence migration/refactor quests.

### Code & Architecture Review
Read-only analysis of repository reality, architecture, quality, security, dependencies and UX with evidence-backed findings/recommendations and no implementation authority.

Future themes may include Security Review, Production Readiness, AI Readiness, UX Redesign, Performance Optimization, Cost Optimization, Migration, Compliance Readiness, and Technical Due Diligence.

## Concurrency

A project may have multiple campaigns, but only one **primary active campaign** owns the main “what's next?” journey. Secondary campaigns are advisory tracks and may create findings, recommendations and governed blockers without hijacking the primary flow.

## Completion

Every theme defines explicit exit criteria. When done enough:

- record outcome;
- preserve unresolved/deferred work;
- update Atlas;
- identify new gaps/stale areas;
- recommend the next campaign;
- never imply the whole project is finished.

> **Campaigns finish. Projects evolve.**

## Theme contract

A campaign template should declare at minimum:

- theme id/name/version;
- intended outcome;
- entry criteria;
- primary Atlas domains;
- likely quest sequence;
- required vs optional decision areas;
- applicable specialists;
- evidence expectations;
- escalation/blocker rules;
- buildability/completion criteria;
- transition recommendations;
- protected non-goals.

## Guidance rule

Themes should narrow the questions SpecLoops asks. Do not ask every project every possible question. The selected campaign determines what matters now.
