interface ReleaseDescriptionSectionProps {
  contentHtml: string;
}

export default function ReleaseDescriptionSection({ contentHtml }: ReleaseDescriptionSectionProps) {
  if (!contentHtml) {
    return null;
  }

  return (
    <section aria-labelledby="release-description" className="space-y-4">
      <h2 id="release-description" className="text-base font-semibold uppercase tracking-[0.35em] text-red-200">
        Release Notes
      </h2>
      <div
        className="prose prose-invert max-w-none text-sm leading-relaxed tracking-wide
          prose-headings:text-red-200 prose-headings:font-semibold prose-headings:tracking-wide
          prose-strong:text-red-100 prose-a:text-red-300 hover:prose-a:text-red-100
          prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-red-400
          prose-blockquote:border-l-2 prose-blockquote:border-red-500/40 prose-blockquote:text-red-100/80 prose-blockquote:italic
          prose-code:text-red-200 prose-code:bg-red-950/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-red-950/60 prose-pre:border prose-pre:border-red-900/60 prose-pre:p-4
          prose-hr:border-red-900/50"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </section>
  );
}
