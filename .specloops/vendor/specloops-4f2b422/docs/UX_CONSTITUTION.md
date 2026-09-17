# SpecLoops Product Vibe & UX Constitution

**Status:** Canonical product-experience design reference  
**Recorded:** September 14, 2026  
**Updated:** September 16, 2026 — Agent prototype walkthrough principles  
**Brand source:** [`../BRAND.md`](../BRAND.md)

This document governs how SpecLoops should **feel to use**. It exists because the underlying system can become sophisticated very quickly: Project Atlas, repository grounding, Question Ledgers, Working Specs, checkpoints, evidence, ROI telemetry, delivery forecasts, Build Assignments, Verification Contracts, Build Receipts, reconstruction reports, specialists, upgrades, and learning loops. The product should not force the user to carry that sophistication in their head.

The core UX principle is:

> **Complexity belongs in the system, not in the user's face.**

Related principles:

> **The product should feel lighter than the machinery underneath it.**

> **Expose the meaning first. Reveal the machinery when it helps.**

SpecLoops is a guide, not a cockpit.

## 1. The emotional job

A user should feel:

- I can do this.
- SpecLoops knows where we are.
- I know what needs me now.
- I can see why this question matters.
- I can make one useful choice and move on.
- I can leave and come back without losing the plot.
- The coding agent is getting a clearer assignment than I could have written myself.
- I can understand what proof came back from a build without becoming the tester or release engineer.
- I remain the final product authority.

The user should **not** feel:

- I need to learn SpecLoops before I can use SpecLoops.
- I have entered an enterprise control room.
- Every internal concept deserves a dashboard panel.
- The product is showing me telemetry because it can.
- I need to understand the protocol vocabulary to move forward.
- I am managing a bureaucracy of AI agents.
- The Agent has mistaken product strategy documentation for an implementation order.

## 2. The questions every primary screen should answer

A primary workflow screen should make these answers obvious:

1. **Where am I?**
2. **What needs me now?**
3. **What does SpecLoops recommend?**
4. **What happens after I answer?**
5. **How do I get Home or back to my current work?**

Everything else is secondary information and should normally live behind progressive disclosure, side panels, tabs, drawers, expandable detail, or dedicated evidence/admin surfaces.

Persistent navigation should make Home, project context, current work, and return paths explicit. The user should not have to discover that a logo is secretly the only Home control.

## 3. One useful decision at a time

The default Product Room interaction should optimize for focused consequential decisions rather than information density.

Preferred rhythm:

> **orient → ask one useful question → recommend → human chooses → capture → advance**

When the next action is a real choice, number it. A user should often be able to answer with `1`, `2`, `3`, etc.

Do not turn genuine open-ended discovery into fake multiple choice merely to make the UI neat.

## 4. Home is the attention and action surface

Home should be welcoming, but it is also the primary command center for the project.

It should make the most useful parts of Project Briefing immediately consumable without requiring the user to navigate to a separate report.

Above the fold, answer:

- **What changed?**
- **What needs my attention?**
- **What does SpecLoops recommend I do next?**

Preserve useful orientation such as current journey, project at a glance, domain overview, and recent changes. The recommended next action should lead directly to the relevant item. When appropriate, use an in-place drawer/slide-out rather than forcing unnecessary navigation.

The full Project Briefing remains available for deeper inspection. Home is its highest-value consumption layer.

## 5. Progressive disclosure

The normal user should not have to stare at the whole operating system at once.

### Primary surface

Keep prominent:

- active project/quest
- current Room/stage in plain language
- current material decision or attention item
- recommendation/options
- concise progress/readiness
- next action
- implementation authority when consequential

### Secondary surfaces

Make available but not dominant:

- Working Spec
- Decision/Question Ledger
- evidence
- repository freshness detail
- persistence states
- continuity details
- Build Assignment internals
- Verification Contract internals
- Build Receipt evidence
- efficiency/ROI
- forecasting
- immutable event ledger
- raw telemetry
- upgrade mechanics
- reconstruction evidence/provenance

Power users and auditors should be able to inspect these deeply. Their existence does not mean every user should see them by default.

## 6. Teach concepts at the point of use

Unfamiliar terms should explain themselves before the user has to open them.

Examples include:

- Decision Ledger
- Gap
- Evidence
- Verification Contract
- Build Assignment
- Build Receipt
- Campaign
- specialist roles
- lifecycle/status concepts

Use small contextual information controls with plain-language explanations. Contextual help must work with mouse, keyboard focus, and touch/tap; do not rely on hover alone.

Provide a user preference to reduce or disable contextual help once the user is comfortable.

Principle:

> **Teach in context. Do not require a SpecLoops glossary before using SpecLoops.**

## 7. The website vibe is a product design input

The current public site established a useful personality:

- human-first
- direct
- playful
- lightly irreverent
- anti-rockstar mythology
- anti-prompt-theater
- serious about shipping useful software
- technically credible without making technical fluency an entrance requirement

Durable tonal examples include ideas such as:

- **Win the quest. Ship the software.**
- **You bring the idea. SpecLoops brings the map.**
- **The repo has receipts.**
- **No prompt Olympics.**
- **Understand it. Decide it. Build it. Learn from it.**

Do not mechanically copy marketing slogans into every product screen. Preserve the personality: confident, useful, occasionally witty, never smug.

## 8. Dungeon Master language is seasoning, not the meal

Useful vocabulary:

- quest
- map
- checkpoint
- READY
- save / resume
- Build Room
- evidence
- Session Zero / wizard

Avoid turning the product into a fantasy RPG skin. The metaphor should make the process intuitive, not obscure it.

Design test:

> **Would this still make immediate sense to someone who does not care about games?**

If not, simplify it.

## 9. Plain-English-first

The product may internally reason about:

- provenance
- persistence state
- translation fidelity
- repository drift
- authority classes
- forecast calibration
- event ledgers
- Atlas Objects
- verification classes
- specialist mandates

The user-facing surface should first express the outcome or decision the human actually cares about.

Prefer:

> "Should saved progress follow the user across devices, or stay with this browser?"

over:

> "Choose the persistence scope for cross-device continuity."

Prefer:

> "I found two conflicting rules. Which one should control?"

before presenting an internal contradiction taxonomy.

For Build, lead with a human outcome such as:

> **Prepare work for your coding agent. Review what came back.**

before exposing:

`Build Assignment → Verification Contract → Execution → Build Receipt → Evidence Reconciliation`

Internal protocol shorthand such as **Build Assignment out. Build Receipt back.** may remain useful, but should not be the only explanation presented to a nontechnical user.

## 10. Useful detail, not dashboard maximalism

A metric earns prominent space only if it helps the user make a decision, understand progress, trust the system, or evaluate value.

Do not surface a metric merely because it is measurable.

A deep Efficiency page may expose token economics, human leverage, Context Tax, continuity health, rework, delivery predictability, and event evidence. The everyday Product Room should not look like that page.

The product should distinguish:

- **workflow UX** — lightweight and decision-centered
- **evidence/analytics UX** — detailed, inspectable, methodology-backed
- **admin/setup UX** — explicit but progressively disclosed

## 11. Project Atlas maps must be semantic, not generic

The protocol chain:

> **Decided → Exists → Evidence → Gap → Next**

is a durable reasoning model, but it is **not a substitute for a domain map**.

Each Atlas domain should visualize what SpecLoops currently understands about that domain.

Examples:

- **Product** — vision, users, problems, outcomes, capabilities, requirements, unresolved product questions.
- **User Experience** — personas/users, entry points, journeys, major screens, interactions, friction, desired outcomes.
- **Architecture** — services, data stores, integrations, AI/model services, external dependencies, important system flows.
- **Security** — trust boundaries, authentication/authorization, secrets, privacy, material controls and risks.
- **Quality** — acceptance criteria, tests, evidence, regressions, release-readiness signals.

Other domains should follow the same semantic rule.

Domain views should expose relevant specialist/skill context without forcing the user into a separate conceptual universe.

Design test:

> **Does this map show what SpecLoops understands about this part of my project, or did we merely reuse a generic visualization?**

## 12. Activity must identify what changed

Do not use **Activity** as an unexplained catch-all.

If the product combines different event types, classify them clearly, for example:

- Decision
- Build
- Evidence
- Repository change
- Campaign
- Human action
- Specialist finding

History/activity should help the user understand project evolution, not merely provide chronology.

## 13. Build UX: assignment, verification, receipt

The Build experience should preserve the v0.1.9 separation of duties while explaining it in human language.

The user should understand:

1. SpecLoops prepares the approved work for the coding agent or team.
2. The Verification Contract defines what proof must come back.
3. The execution system performs the work and testing.
4. The Build Receipt returns the evidence.
5. SpecLoops reconciles the evidence against the approved specification.
6. The human retains acceptance authority.

> **The builder does the work. SpecLoops defines the contract and checks the receipt.**

A Verification Contract may require unit/integration tests, browser validation, screenshots, accessibility checks, UX standards, security rules, architecture constraints, or organization-specific engineering rules.

Build Receipt proof should distinguish:

- **Implementation proof** — did the requested implementation actually happen?
- **Behavioral proof** — does the software behave as specified?
- **Conformance proof** — did the work follow project/organization standards?

Returned criteria should use honest states such as `PASS | FAIL | NOT_RUN | BLOCKED`.

> **Coding completion is not human acceptance.**

## 14. Verification may inspect reality without becoming implementation

SpecLoops may inspect repository state, diffs, code, tests, configuration, CI evidence, screenshots, runtime evidence, and returned artifacts in order to establish reality and evaluate whether the specification was satisfied.

Preserve the boundary:

> **Reading code to verify reality is not the same as writing code to change reality.**

If verification finds a miss, report the failed criterion and route/recommend correction. Product Room must not silently fix implementation while pretending to be a verifier.

## 15. Gaps and Evidence should explain consequence and action

A Gap is useful only if the user can understand why it matters.

Lead with a plain-language purpose such as:

> **These are places where what the project is supposed to do and what SpecLoops can currently prove do not fully match.**

Each Gap should make clear:

- expected
- observed
- evidence
- consequence
- status
- recommended next action

Avoid dense text competing with many actions. Use contextual help where needed.

## 16. Specialists are expertise, not AI bureaucracy

Preserve the canonical bounded specialist model and authority regardless of friendlier presentation names.

The UI may use softer labels than internal role names, but presentation changes must not silently change mandates or authority.

Prefer user-facing concepts such as:

- Overview
- What needs attention
- Supporting proof
- Role and limits

over unnecessarily bureaucratic vocabulary when the underlying meaning is preserved.

Design principle:

> **Specialists should feel like expertise SpecLoops brings into the project when needed, not a team of AI bureaucrats the user must manage.**

## 17. Campaigns need visual priority, not equal-weight cards

Primary/current campaign should visually own the question:

> **What should we do next?**

Secondary campaigns and the campaign library should remain available without competing equally for attention. Use whitespace, hierarchy, and light separators rather than dense card grids.

## 18. Efficiency means human and AI economics

Efficiency should preserve human-outcome measures and add transparent AI usage/spend where real data is available and authorized.

Separate conceptually:

### Your time

Examples:

- active human time
- decisions made
- repeated questions avoided
- orchestration effort
- accepted work

### AI usage & spend

Examples:

- connected provider/model
- input/output/cached tokens
- costs
- totals
- usage by campaign/build/project when useful

The page should help answer:

> **What am I spending on AI to build this software, and what am I getting for it?**

Prototype data must be clearly labeled fictional. Never imply live provider/account/billing connectivity without verified capability.

## 19. Session Zero / onboarding UX

The onboarding wizard should feel like orientation, not an installation manual.

Entry choices may include:

- start a new idea
- connect/resume existing work
- join an invited project

For existing work, the system may perform a sophisticated Project Reconstruction, but the user experience should be:

> **Connect → Survey → Review the important findings → Establish canon → Start working**

During repository survey, show meaningful progress, not every tool call.

After reconstruction, summarize the handful of interpretations that materially affect the project model. The full reconstruction report remains inspectable.

Principle:

> **Ask until grounded, not until exhaustive.**

## 20. Trust should be visible without becoming ceremony

Good trust cues:

- read-only first
- "nothing is published without asking"
- current vs target state labels when relevant
- clear implementation authority
- preview exact changes before repository writes
- explicit observed / derived / estimated labels in evidence/ROI views
- clear reason when something is BLOCKED or UNKNOWN

Bad trust UX:

- repeated confirmation dialogs for harmless actions
- pages of protocol language before simple choices
- implying safety by displaying technical jargon
- hiding uncertainty to keep the experience visually clean

## 21. Product truth is not implementation authority

This is both a governance rule and a UX rule.

The repository may contain:

1. brand/thesis
2. product direction
3. research/hypotheses
4. release plans
5. approved implementation specs
6. observed implementation/evidence

The Agent must not make the interface explode every time a strategy document gains a new idea.

Expected reactions:

- **Brand change** → understand; audit affected surfaces; no automatic feature build.
- **Future product direction** → retain/recommend; no automatic build.
- **Research hypothesis** → retain/measure; no automatic build.
- **Release plan** → candidate scope; no automatic install unless a real release package exists.
- **Approved implementation spec** → Build Room may act within exact authority.
- **Observed implementation change** → Reality Check / evidence / review.

Principle:

> **Understand before reacting. Classify before building.**

## 22. Visual hierarchy and appearance

The current public website is a strong visual reference for the desired character:

- bold typography
- generous whitespace
- high contrast
- restrained palette with purposeful accent colors
- large simple statements
- one strong focal object per section
- editorial rather than generic SaaS-dashboard feeling

The application does not need to copy the website literally. It should inherit its confidence and restraint while feeling warm, intelligent, calm, premium, lightly expressive, spacious, and trustworthy.

Do not solve visual identity merely by adding more accent color. Use typography, hierarchy, spacing, semantic visualization, subtle color, and interaction to create personality.

Use familiar appearance controls such as sun/moon icons rather than unexplained abbreviations like `LT / DK`.

Avoid:

- dense grids of equally weighted cards
- tiny type everywhere
- dashboards where every datum competes for attention
- excessive badges/status pills
- endless side navigation for concepts used rarely
- UI generated directly from the internal data model

## 23. History is a human-readable project story

History should help answer:

> **How did we get here?**

Present meaningful decisions, changes, builds, evidence, approvals, revisions, and significant agent activity. Do not turn History into raw system logs.

## 24. Prototype truth and interaction fidelity

Clickable prototypes may use fictional data and simulated state transitions to test the experience.
