"use client";
import { useEffect,useState } from 'react';
import { useCatalogRequest } from '../request';
import { ContentRequest,PublishedImages } from '../../admin/content-media';
import { ArticlePreview, type ArticleDraft } from '../../admin/article-editor';
import { ChapterPlayer } from '../../chapters/chapter-player';
import { createChapterRun,chapterRunId,storeChapterRun } from '../../chapters/chapter-model.js';
import { useCircleState } from '../../circle-os-shell';
import type { ChapterDefinition,ChapterRun } from '../../chapters/chapter-types';
type Edition={version:number;content:{kind:string;chapter?:ChapterDefinition;article?:ArticleDraft['article']}};
export default function CatalogReader(){
 const {state,updateState,ready}=useCircleState();
 const request=useCatalogRequest(),[edition,setEdition]=useState<Edition|null>(null),[run,setRun]=useState<ChapterRun|null>(null),[message,setMessage]=useState('Opening reading…');
 useEffect(()=>{let active=true;const query=new URLSearchParams(window.location.search);void request(`/os/catalog?id=${encodeURIComponent(query.get('id')||'')}&version=${encodeURIComponent(query.get('version')||'')}`).then(async response=>{if(!response.ok)throw Error('This version is unavailable. Sign in and try again.');const data=await response.json();if(active){setEdition(data);if(data.content.chapter)setRun(createChapterRun(data.content.chapter));}}).catch(e=>{if(active)setMessage(String(e));});return()=>{active=false;};},[request]);
 if(!ready)return <p role="status">Opening local records…</p>;
 const existing=edition?.content.chapter?state.chapters.runs[chapterRunId(edition.content.chapter)]:undefined;
 return <ContentRequest.Provider value={request}><PublishedImages.Provider value={true}><main className="os-admin"><a href="/os">Back to Today</a>{!edition?<p role="status">{message}</p>:edition.content.chapter&&run?<ChapterPlayer definition={edition.content.chapter} run={existing||run} previewMode={!existing} onRunChange={next=>{setRun(next);if(existing&&existing.status!=='completed')updateState(current=>storeChapterRun(current,next,edition.content.chapter!.session));}} label={existing?'Published chapter reading':'Published chapter preview'}/>:edition.content.article?<ArticlePreview draft={{article:edition.content.article} as ArticleDraft}/>:<p>Content unavailable</p>}</main></PublishedImages.Provider></ContentRequest.Provider>;
}
