/** Shared visual only. The owning button/input retains its action and state. */
export function CheckboxFace({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`os-checkbox-face ${className}`}><span className="os-checkbox-liquid" /><span className="os-checkbox-mark">✓</span></span>;
}
