# Circle OS bugs and verification gaps

Updated: 2026-11-11, Asia/Bangkok. This is the current triage index.
Detailed reproductions, attempts and old conclusions remain in the
[bug archive](docs/archive/2026-11-11-doc-cleanup/bugs.md) and
[journey record](docs/USER_JOURNEY_TESTING.md). No application checks ran during
documentation cleanup; statuses below carry their dated evidence forward.

A report, non-reproduction, local fix and device acceptance are different states.
Replacing a planned flow does not mark its current runtime defects fixed.

## Current gaps

| Area | Status and next check |
| --- | --- |
| Phone writing/caret | Developer reported long Note typing losing the visible caret above the keyboard. Full-page redesign has local checks, not complete physical-phone keyboard acceptance; recheck the affected device. |
| Runtime notices | ResizeObserver notices remain in recent test records. Do not infer resolution from passing journeys. |
| Habit source assertion | Latest focused selection had an unrelated pre-existing Habit source-text mismatch; no broad-suite pass is claimed. |
| Tool lived acceptance | Latest Protocol/shared-control work passes bounded local checks; developer lived review remains outstanding unless separately completed. |
| Hosted writing | Migrations and synthetic hosted/test-store checks passed. Activation off; production-store/device restart/eviction, session expiry/revocation, real lock contention and backup/deletion still need evidence. |
| Auth/device | Mail setup, session renewal/revocation, lost-device/manual lost-email recovery, regional/other-browser coverage remain incomplete. |
| Reflect regression | Older fixture-reference/first-swipe failures remain dated unresolved evidence, alongside earlier passing fixtures and later developer reports. Diagnose current code/fixture before a blanket closure or new release claim. |
| Chapter account chrome | Developer requested menu hiding during Chapters. Safe account/exit behavior needs review; saving the report did not approve a chrome change. |
| Beta | Broader safety, other-domain sync, deletion/recovery, installation/update and real-phone acceptance remain open under Roadmap. |

## Latest locally verified fixes

| Change | Evidence and scope |
| --- | --- |
| Protocol checkbox-only action | Passive words, immediate ✓/press, synchronized Orange liquid text/face, no strike; reload, keyboard undo and reduced motion. Six production cases plus final recheck, 2026-11-11. Both previously open checked/press defects are resolved locally. |
| Checkbox edge seams | All 24 fractional-offset/device-scale endpoint comparisons match hidden/unclipped references, 2026-11-11. |
| Shared tool consistency | 24px anchors, typography and common engines; obsolete Week completion waits removed. 41 distinct compiled-CSS cases across runs/rechecks plus focused checks, 2026-11-11. |
| Week refinements | Current day-filtered shared tasks, corrected action columns/header, folded record/history and archive behavior have bounded local evidence, 2026-11-10/11. Earlier weight/gap/delay trials are superseded. |
| Routine motion/glass | Measured resize and production glass refinements verified locally, 2026-11-09. Separate notices and device acceptance remain open. |
| Account alias/direct entry | Scoped alias greeting/menu and direct entry after completed Day One locally verified, 2026-11-06. No claim that the original midweek trigger was reproduced as a date bug. |
| Protocol history | Read-only past terms and prospective wording locally verified. Work plan records later developer phone review; it does not certify real sync or unrelated defects. |
| Quest setup/history | Shared setup evidence, View/Hide steps, saved-answer readers and stale-pin handling locally verified, 2026-11-05. |

See [latest Protocol checks](docs/USER_JOURNEY_TESTING.md#protocol-checkbox-only-action-and-liquid-words---2026-11-11),
[seam checks](docs/USER_JOURNEY_TESTING.md#checkbox-edge-seam-and-protocol-audit---2026-11-11)
and [shared-tool checks](docs/USER_JOURNEY_TESTING.md#shared-tool-consistency-and-stale-code-cleanup---2026-11-11).
Other exact commands/limits remain in dated journey entries; counts overlap.

## Original numbered reports

Keep these IDs for existing references. These are scoped historical statuses,
not freshly reproduced results against every current mode.

| ID | Report | Status carried forward |
| --- | --- | --- |
| 1–3 | Initial Today flash, Begin flash and onboarding skip | Historical reports/non-reproductions; current paths need risk-based checks until replacement. New onboarding is planned, not a runtime fix. |
| 4 | ResizeObserver overlay | Still observed as notices in later work; unresolved. |
| 5 | Today/Reflect overlap | Historical presentation report; current navigation needs affected-device acceptance. No blanket fix claim. |
| 6 | Placeholder becomes Note text | Account Note fixed/browser-verified 2026-11-02. Legacy editor reproduced it then; no personal-writing migration or all-mode fix claim. |
| 7 | Admin password prompt clipping | Historical report; current affected-browser verification needed. |
| 8 | Thoughts turns back to Note | Legacy idle rotation was policy, not automatically a bug. Opened full-page writing now stays selected; actual focus/draft guards still require affected-path checks. |
| 9 | Habit returns to first Page while idle | Older concern/developer use report; recheck if reproduced. Current policy keeps Routine selected. |
| 10 | First Habit Continue needs two taps | Not reproduced on two specific 2026-10-30 paths; not proof about every Continue. |
| 11 | Habit swipe direction/forward failure | Forward failure not reproduced 2026-10-30; right-swipe-back retained by explicit decision. |
| 12 | Habit outcomes ignore answers | Fixed/verified 2026-10-30, including recovery, missing rows, later-edit protection and repeat reloads. Preserve regression coverage. |
| 13 | Inconsistent Habit/task controls/title | Earlier size fix and later shared-control/type work have bounded local evidence; old concern does not prove all current/device paths accepted. |
| 14 | Nonfunctional Protocol name-field arrow | Not closed by later term-scrollbar changes; original affected control needs confirmation. |
| 15 | Protocol term separation | Later presentation/prospective-wording work delivered for bounded scopes; old grouping report is not a new failure or blanket device closure. |
| 16 | Past phase easy to alter/unclear | Accidental past tick changes fixed locally; later removed correction UI keeps history read only. Historical receipts preserved; presentation/device limits remain. |
| 17 | Repeating Log setup | Fixed/verified 2026-10-30, outcome recording and reload checked. Keep regression coverage. |
| 18 | Time picker gaps/overflow | Historical report; current picker and replacement onboarding need reviewed small-screen/keyboard acceptance. |
| 19 | Continue often needs two taps | Broader report not certified by the two passing paths for bug 10. Reproduce affected current paths if reported again. |

## Archived mobile findings

The original [mobile report](docs/archive/2026-11-11-doc-cleanup/MOBILE_TEST_FINDINGS.md)
also recorded empty Habit cue placeholders and manually completable Week goals.
The current record/display contract omits empty fields. Manual goal completion
is the later approved behavior; linked unfinished tasks/history are preserved.
These directions do not manufacture a device test of the old reports.

Use [WORK_PLAN.md](docs/WORK_PLAN.md) for triage order and
[Roadmap](docs/ROADMAP.md#release-gates) for release requirements.
