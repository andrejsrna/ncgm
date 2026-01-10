interface ReleaseDescriptionSectionProps {
  contentHtml: string;
}

export default function ReleaseDescriptionSection({ contentHtml }: ReleaseDescriptionSectionProps) {
  if (!contentHtml) {
    return null;
  }

  return (
    <section
      aria-labelledby="release-description"
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
    >
      <h2 id="release-description" className="text-base font-semibold uppercase tracking-[0.3em] text-slate-200">
        Release notes
      </h2>
      <div
        className="prose prose-invert mt-4 max-w-none text-sm leading-relaxed
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-a:text-cyan-200 prose-a:no-underline hover:prose-a:text-cyan-100
          prose-code:text-cyan-200 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-blockquote:border-l-4 prose-blockquote:border-cyan-300/40 prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:px-6
          prose-li:marker:text-cyan-200
          prose-hr:border-white/10"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </section>
  );
}
