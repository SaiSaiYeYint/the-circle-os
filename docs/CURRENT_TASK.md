# Current task

## Hosted catalog acceptance — 2026-11-12

Approved local implementation is prepared: transactional publication, immutable
versions, signed-in reader/images, withdrawal/restore and durable pending retries.
Developer reports applying migration 003; approved hosted checks now verify it
operationally. Never reapply 001/002/003. Existing work is preserved on main/9f2425f.
11 focused SQL/route tests and 9 Admin browser cases pass. Production webpack build,
production TypeScript, focused lint and chapter compiler (33 sources/0 quests)
pass. Full tsconfig still reports cloudflare:workers. No geometry tokens changed.
Added production-CSS browser checks pass for Article exact reload/image retry,
Chapter preview without evidence, and existing-run reload/original-definition
resolution. The extended hosted runner passes 62 functional checks, covering real
Chapter v1/v2 preservation, Article publication, signed-in reader/image HTTP,
signed-out denial, withdrawal/restore and exact cleanup/absence checks. All test
accounts/content/images/receipts were removed. Full Reflect, real link expiry/
contention, backup/restore and physical phones remain open. No commit/deployment
or real authored publication. Next: developer reviews local Catalog publishing
and chooses the first authored item. Deployment needs separate authorization.

## Previous editor result

## New glass Chapters and Articles — 2026-11-11

Approved follow-up completed: Article editor and reading preview now show cover
image, title, summary, then body. Production build/TypeScript, focused lint and
the compiled-CSS Article save/reload/order browser journey pass. Preview server
was restarted from the final build on port 3012; Admin returns HTTP 200.

Developer reviewed Media and approved the editor/image slice, then specified
glass design for newly created Chapters and Articles only. Existing definitions,
drafts and runs retain their current appearance. Work remains uncommitted on
main/9f2425f alongside the preserved pre-existing Admin work.

Implemented: explicit glass-v1 chapter design marker; new blank/template/copy
defaults; preserved design on existing-version edits; image picking with alt text
and captions; Markdown round trip; Article title/summary/cover and movable
heading/paragraph/image blocks; shared draft save/recovery and reader preview.
Catalog publishing remains a separate reviewed slice.

Verification: Next production build/TypeScript and focused lint pass; 23 focused
model/SQL/route cases pass. Production-CSS Admin suite passes 8/8, tool/legacy
chapter checks 7/7. After the final glass-only anchor fix, the new-content journey
passes again and measures cover text at 24px inside the frame border (25px from
outer edge), frame height 704px in the isolated 390x900 Admin fixture. Existing
reference tools remain 648px with 24px gaps at 360/390px.
See [evidence](USER_JOURNEY_TESTING.md#new-glass-chapters-and-articles---2026-11-11).

No hosted write/upload acceptance, physical-phone acceptance, publication,
deployment or writing-sync activation is claimed for this slice. Existing hosted
migrations must not be reapplied. The second Admin invitation still awaits
verification. Earlier operational gaps remain in [setup](CONTENT_ADMIN_SETUP.md).

Next: developer reviews new Chapter/Article editing and previews, then review
catalog publication, signed-in reader/asset access and withdrawal.
