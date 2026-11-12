import test from 'node:test';
import assert from 'node:assert/strict';
import {createChapterDraft,createFirstUseChapterDraft,createNextVersionDraft,duplicateChapterDraft,chapterDefinitionToDraft,chapterDraftToMarkdown,validateChapterDraft} from '../app/os/admin/chapter-authoring.js';
import {parseChapterMarkdown,validateChapter} from '../scripts/chapter-compiler.mjs';
test('new chapters use glass; opening old definitions or preparing a version preserves their design',()=>{
 const fresh=createChapterDraft(); assert.equal(fresh.chapter.designVersion,'glass-v1');
 const old=structuredClone(fresh.chapter); delete old.designVersion;
 const snapshot=JSON.stringify(old); const existing=chapterDefinitionToDraft(old);
 assert.equal(existing.chapter.designVersion,undefined); assert.equal(createNextVersionDraft(existing).chapter.designVersion,undefined);
 assert.equal(duplicateChapterDraft(existing).chapter.designVersion,'glass-v1');
 assert.equal(createFirstUseChapterDraft('habit').chapter.designVersion,'glass-v1'); assert.equal(JSON.stringify(old),snapshot);
});
test('chapter design and image survive Markdown export and validation',()=>{
 const draft=createChapterDraft();draft.chapter.pages[1].image={assetId:'11111111-2222-4333-8444-555555555555',alt:'A tree',caption:'Morning'};
 const parsed=validateChapter(parseChapterMarkdown(chapterDraftToMarkdown(draft)));
 assert.equal(parsed.designVersion,'glass-v1');assert.deepEqual(parsed.pages[1].image,draft.chapter.pages[1].image);
 draft.chapter.pages[1].image.alt=''; assert.ok(validateChapterDraft(draft).some(error=>error.includes('alternative text')));
});
