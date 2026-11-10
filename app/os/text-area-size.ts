export function sizeTextAreaToContent(editor: HTMLTextAreaElement | null) {
  if (!editor) return;

  // An empty editor measures one line, because scrollHeight ignores the
  // placeholder. Setting that as an explicit height overrode the reserve and
  // clipped every placeholder that wrapped, which is why a caption showed only
  // its first line. With no value, let the stylesheet own the height.
  if (!editor.value) {
    editor.style.removeProperty("height");
    return;
  }

  const previousMinHeight = editor.style.minHeight;
  editor.style.minHeight = "0px";
  editor.style.height = "0px";

  const style = window.getComputedStyle(editor);
  const lineHeight = Number.parseFloat(style.lineHeight);
  // Padded Week rows opt in; existing unpadded editors keep their contract.
  const padding = editor.hasAttribute("data-os-padded-editor")
    ? Number.parseFloat(style.paddingTop) + Number.parseFloat(style.paddingBottom)
    : 0;
  const scrollHeight = editor.scrollHeight;
  const renderedLines = lineHeight
    ? Math.max(1, Math.round((scrollHeight - padding) / lineHeight))
    : 1;

  editor.style.height = lineHeight
    ? `${renderedLines * lineHeight + padding}px`
    : `${scrollHeight}px`;
  editor.style.minHeight = previousMinHeight;
}
