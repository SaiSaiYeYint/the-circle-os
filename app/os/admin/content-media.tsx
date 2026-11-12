"use client";
import { createContext, useContext, useEffect, useState } from 'react';
export type ContentImage = { assetId: string; alt: string; caption?: string };
type Asset = { id: string; alt: string; preview: string | null };
export const ContentRequest = createContext<typeof fetch | null>(null);
export const PublishedImages = createContext(false);

export function ContentFigure({ image }: { image?: ContentImage }) {
  const request = useContext(ContentRequest);
  const published = useContext(PublishedImages);
  const [source, setSource] = useState<{id:string;url:string|null}>();
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    if (!image || !request) return;
    let active = true;
    const read = () => void request(published ? `/os/catalog/media?id=${encodeURIComponent(image.assetId)}` : '/os/admin/media').then(async response => {
      if (!response.ok) throw new Error();
      const data = await response.json();
      const rows: Asset[] = published ? [{id:image.assetId,alt:image.alt,preview:data.preview}] : data;
      if (active) setSource({id:image.assetId,url:rows.find(row => row.id === image.assetId)?.preview || null});
    }).catch(() => { if (active) setSource({id:image.assetId,url:null}); });
    read(); const timer = setInterval(read, 240000);
    return () => { active = false; clearInterval(timer); };
  }, [image, request, refresh, published]);
  if (!image) return null;
  return <figure className="os-content-figure">
    {/* Private signed previews must bypass shared image caches. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {source?.id === image.assetId && source.url ? <img src={source.url} alt={image.alt} onError={() => setSource({id:image.assetId,url:null})} /> : <div role="img" aria-label={image.alt}>Image unavailable <button type="button" onClick={() => setRefresh(value => value + 1)}>Retry image</button></div>}
    {image.caption ? <figcaption>{image.caption}</figcaption> : null}
  </figure>;
}

export function ContentImagePicker({ value, onChange }: { value?: ContentImage; onChange: (image?: ContentImage) => void }) {
  const request = useContext(ContentRequest);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [message, setMessage] = useState('');
  async function open() {
    if (!request) return;
    try { const response = await request('/os/admin/media'); if (!response.ok) throw new Error(); setAssets(await response.json()); setMessage(''); }
    catch { setMessage('Could not load images. Try again.'); }
  }
  return <section className="os-content-image-picker" aria-label="Content image">
    <button type="button" onClick={() => void open()}>Choose image</button>
    {assets.length ? <label className="os-admin-field">Image<select aria-label="Image" value={value?.assetId || ''} onChange={event => { const asset = assets.find(row => row.id === event.target.value); if (asset) onChange({assetId:asset.id,alt:asset.alt}); }}><option value="">Choose an image</option>{assets.map(asset => <option key={asset.id} value={asset.id}>{asset.alt}</option>)}</select></label> : null}
    {value ? <><ContentFigure image={value} /><label className="os-admin-field">Alternative text<input required value={value.alt} onChange={event => onChange({...value,alt:event.target.value})} /></label><label className="os-admin-field">Caption<input value={value.caption || ''} onChange={event => onChange({...value,caption:event.target.value})} /></label><button type="button" onClick={() => onChange(undefined)}>Remove image</button></> : null}
    <p role="status">{message}</p>
  </section>;
}
