"use client";
import { useEffect,useState } from 'react';
import type { ChapterDefinition,ChapterRun } from '../chapters/chapter-types';
import { useCatalogRequest } from './request';
import { getPublishedChapter } from '../chapters/registry';
/** Resolve original versions only. Missing content never falls forward. */
export function useCatalogDefinitions(runs:Record<string,ChapterRun>) {
 const request=useCatalogRequest(),[definitions,setDefinitions]=useState<ChapterDefinition[]>([]);
 const keys=JSON.stringify(Object.values(runs).filter(run=>!getPublishedChapter(run.chapterId,run.chapterVersion)).map(run=>[run.chapterId,run.chapterVersion]));
 useEffect(()=>{let active=true;void Promise.all((JSON.parse(keys) as [string,number][]).map(async([id,version])=>{
  try{const response=await request(`/os/catalog?id=${encodeURIComponent(id)}&version=${version}`);if(!response.ok)return null;const value=await response.json();return value?.content?.chapter as ChapterDefinition|undefined;}catch{return null;}
 })).then(values=>{if(active)setDefinitions(values.filter((value):value is ChapterDefinition=>!!value));});return()=>{active=false;};},[keys,request]);
 return definitions;
}
