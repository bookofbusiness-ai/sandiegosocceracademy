# SpecLoops Installation Record

**Installed target:** `v0.1.9-beta` release candidate  
**Candidate package revision:** 1  
**Status:** `RELEASE_CANDIDATE_NOT_RELEASED`  
**Installed:** 2026-09-17  
**Canonical source:** `https://github.com/Book-of-Business/specloops`  
**Canonical source commit:** `4f2b4228f4588e6e0a5856410cd1a07c6a6a7033`

## Composition

- Released portable base: exact `starter-kit/v0.1.8-beta/` tree.
- Candidate overlay: exact `starter-kit/v0.1.9-beta/` tree.
- Required and referenced v0.1.9 canonical documents vendored from the same source commit.
- Project-owned context, state, reconciliation, blueprint, ledger, and evidence initialized at repository root.

The exact canonical source snapshot is stored under `.specloops/vendor/specloops-4f2b422/`.

## Installed release-controlled hashes

| File | SHA-256 |
| --- | --- |
| `.specloops/RELEASE_MANIFEST.md` | `7c1eef7b3794aa39343da06f4136a0d76dda79f8714d0d62e0532127033abede` |
| `.specloops/README.md` | `f72918a5d0a7595333ebdd79dcfde0a0539841befb7902378563740e589ab614` |
| `.specloops/UPGRADE_FROM_v0.1.8.md` | `34053486fb3a24683bfdffd7cb98baf74b660323ebe33b4a901063a6e2db12d2` |
| `V019_OPERATING_MODEL.md` | `135b22f3b5aaa61f599e0ab6bbdfa901f79dffd6af786dfa6718d557a87ef83d` |
| `AGENTS.md` | `15e2515f000cf93ff9e31ba2e393c485681301f53347ab5b36adc2a35de5f011` |
| `ATLAS_OPERATING_MODEL.md` | `01781bd176215e926dd8f7cdd926f395de6eccf829758d7c2c0106763bf8d9a2` |
| `BUILD_RESULT_RECONCILIATION.md` | `98d7f6a634326f292c206e1362bf725e7faa002b2a4493d7b5585c56ddab6449` |

## Boundary

This installation is intentionally a validation target. It must not update release labels from candidate to released, and it must not imply that hosted background jobs, automated delivery adapters, or protected Kernel enforcement are deployed in this repository.
