#!/bin/sh
set -eu

root_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
vendor_dir="$root_dir/.specloops/vendor/specloops-4f2b422"

required_files="
$root_dir/SPECLOOPS.md
$root_dir/V019_OPERATING_MODEL.md
$root_dir/AGENTS.md
$root_dir/ATLAS_OPERATING_MODEL.md
$root_dir/BUILD_RESULT_RECONCILIATION.md
$root_dir/PROJECT_CONTEXT.md
$root_dir/SPECLOOPS_STATE.md
$root_dir/WORKING_SPEC.md
$root_dir/CANON_RECONCILIATION.md
$root_dir/PROJECT_BLUEPRINT.md
$root_dir/questions/SDSA-QUEST-001.md
$root_dir/evidence/BUILD_RECEIPT-SDSA-001.md
$root_dir/.specloops/RELEASE_MANIFEST.md
$root_dir/.specloops/INSTALLATION.md
"

for required_file in $required_files; do
  if [ ! -f "$required_file" ]; then
    echo "Missing SpecLoops artifact: $required_file" >&2
    exit 1
  fi
done

grep -F "RELEASE CANDIDATE" "$root_dir/.specloops/RELEASE_MANIFEST.md" >/dev/null
grep -F "NOT RELEASED" "$root_dir/.specloops/RELEASE_MANIFEST.md" >/dev/null
grep -F "v0.1.8-beta" "$vendor_dir/starter-kit/v0.1.8-beta/RELEASE_MANIFEST.md" >/dev/null
grep -F "Status:** RELEASED" "$vendor_dir/starter-kit/v0.1.8-beta/RELEASE_MANIFEST.md" >/dev/null

cmp "$root_dir/.specloops/RELEASE_MANIFEST.md" "$vendor_dir/starter-kit/v0.1.9-beta/RELEASE_MANIFEST.md"
cmp "$root_dir/.specloops/README.md" "$vendor_dir/starter-kit/v0.1.9-beta/README.md"
cmp "$root_dir/.specloops/UPGRADE_FROM_v0.1.8.md" "$vendor_dir/starter-kit/v0.1.9-beta/UPGRADE_FROM_v0.1.8.md"
cmp "$root_dir/V019_OPERATING_MODEL.md" "$vendor_dir/starter-kit/v0.1.9-beta/V019_OPERATING_MODEL.md"
cmp "$root_dir/AGENTS.md" "$vendor_dir/starter-kit/v0.1.9-beta/AGENTS_SNIPPET.md"
cmp "$root_dir/ATLAS_OPERATING_MODEL.md" "$vendor_dir/starter-kit/v0.1.8-beta/ATLAS_OPERATING_MODEL.md"
cmp "$root_dir/BUILD_RESULT_RECONCILIATION.md" "$vendor_dir/starter-kit/v0.1.8-beta/BUILD_RESULT_RECONCILIATION.md"

echo "SpecLoops v0.1.9-beta RC1 installation verified."
