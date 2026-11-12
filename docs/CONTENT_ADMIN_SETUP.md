# Content Admin foundation

## Hosted catalog verification — 2026-11-12

Developer reports applying migration 003; the approved hosted test pass verifies
its objects and policies operationally. Never reapply 001/002/003. Admin's
Catalog publishing panel supports exact saved-draft publication and withdrawal/
restore, with old links/images retained for signed-in readers. The optional
`--catalog` flag extends the explicitly write-gated hosted script with synthetic
publication/version/Article/image/access/withdrawal/restore checks and exact
cleanup. `--write --app --catalog` now passes 62 functional checks, followed by
exact fixture cleanup and absence checks. Real Supabase and isolated built Next
HTTP handlers were exercised. No agent-applied migration, real authored publication,
deployment or writing activation occurred. Actual link expiry, physical phones,
full Reflect acceptance and backup/restore remain open.

2026-11-11, Asia/Bangkok. Repository implementation and the subsequent bounded
hosted setup/verification were explicitly approved in chat. Publication and
deployment remain outside that approval.

## Hosted status

Both `202611110001_content_admin.sql` and the follow-up
`202611110002_content_admin_operations.sql` are applied. Do not reapply either.
Preflight confirmed no existing foundation objects/bucket or Storage object
policies. The follow-up gives the trusted service role explicit bootstrap,
inspection and exact-fixture cleanup permissions; browser requests still use
the verified caller's token. It adds no ordinary-user mutation grants.

Both requested accounts have content grants. The first is verified; the second
has been invited and must verify its email before its grant permits access.
No account addresses/UUIDs or credentials are stored in this record. Invitation
acceptance and the second owner's first sign-in remain manual acceptance steps.

The final hosted run passed 38 functional checks, including actual built Next
HTTP handlers, direct RPC/RLS, private Storage, retries and revocation. Exact
synthetic accounts, drafts, receipts, asset metadata and image objects were
removed, with follow-up absence checks. The first failed attempt's two accounts
were also removed; a final Auth inventory confirmed zero test accounts remain.
See [journey evidence](USER_JOURNEY_TESTING.md#hosted-content-admin-setup---2026-11-11).

The local Next preview on port 3012 was restarted from the final build; its
Admin status endpoint returns the expected 403 without a signed-in token.
Refresh the browser, then use Account -> Admin. No hosted web deployment occurred.
Operational rollback closes the new surface by revoking content grants while
preserving authored rows/assets. Do not drop applied tables or buckets to undo
access, or reapply the non-idempotent migrations. Full backup/restore remains
an operating gap rather than a claim from this additive schema change.

## Prepared implementation

Account mode uses verified Supabase bearer authentication plus a protected
`circle_content_admins` grant, checked on each protected request. The account
menu checks permission when opened. The legacy cookie/password cannot unlock
account mode. Legacy mode retains its existing doorway and separate local drafts.
Content permission does not grant access to personal writing or membership.

Chapters use shared mutable drafts with revision checks and exact operation
receipts. Browser recovery and pending saves are separated by account and tab;
they remain until acknowledged. Conflicts preserve the device text. Duplicate
the draft to work on a separate copy when an edit needs manual reconciliation.
Old browser drafts are neither uploaded nor assigned to a login automatically.

The Media library accepts JPEG/PNG/WebP up to 5 MiB, requires alternative text,
and checks file signatures. Files have immutable UUID paths in a private bucket.
An uncertain upload retry compares stored bytes before accepting metadata.
Five-minute signed previews can be refreshed by reopening Media. Copy image
reference provides a stable asset ID; content placement/rendering is a later slice.
There is no automatic cleanup or asset deletion in this foundation.

Published-version storage has no direct client mutation grants. Publication and
signed-in exact readers now have bounded hosted verification. Drafts remain
Admin-only; verified accounts can read exact published/withdrawn versions and
their referenced images. Explore is separate. Quote reading remains public.
Account Workshop publication and personal run-reset/door actions are blocked.
Editing an existing published chapter now prepares the next version.

## Hosted setup review

1. Confirm the intended project, backup/rollback procedure and verified account
   UUID without committing credentials or private account identifiers.
2. Review and apply `supabase/migrations/202611110001_content_admin.sql` once.
   It adds draft/version/asset tables, protected grant and receipt tables,
   authenticated RPCs and a private Storage bucket/policies. Existing migrations
   must not be reapplied. Apply the operations follow-up once for trusted
   bootstrap/cleanup. Both were already applied to the current project.
3. A trusted database operator inserts the chosen verified UUID into
   `public.circle_content_admins(account_id)`. The app cannot grant this role.
   Recovery uses verified account recovery followed by an operator-reviewed
   replacement grant. Removing the row denies the next protected request.
4. Verify actual admin/ordinary/signed-out sessions, direct REST/RPC and Storage
   denial, save/reload/conflicts, upload/retry and private image access. Use only
   synthetic drafts/images. Do not activate or publish content incidentally.

Local SQL tests model Storage tables; the separate hosted checks exercised the
real Storage service. Actual session revocation (distinct from grant removal),
true lock contention, backup/restore, production offline restart, signed-preview
expiration and physical-phone acceptance are not certified here.

Use `node --env-file=.env.local scripts/check-content-admin-live.mjs --write --app`
only with explicit hosted verification approval. It launches an isolated local
built Next server, creates synthetic accounts/content and removes exact fixtures.
It never prints credentials or signed URLs. A new environment needs its own
configuration and approval; the command is not an unattended health check.

## Boundaries and remaining work

Article drafting and Chapter image placement/captions now have local editor and
compiled-CSS browser evidence, including new-content glass and save/reload.
The existing shared draft schema is reused; no additional hosted migration was
needed. This is not a new hosted Article-save or physical-phone acceptance claim.

Template editors, general asset cleanup/retention, legacy-draft import and
Explore/adoption remain reviewed follow-up slices. No personal store, day rule,
chapter answer, authored reading or writing-sync activation is migrated.
