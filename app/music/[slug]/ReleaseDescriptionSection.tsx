interface ReleaseDescriptionSectionProps {
  contentHtml: string;
}

export default function ReleaseDescriptionSection({ contentHtml }: ReleaseDescriptionSectionProps) {
  if (!contentHtml) {
    return null;
  }

  return (
    <section aria-labelledby="release-description" className="rounded-3xl border border-border bg-white p-6 shadow-soft">
      <h2 id="release-description" className="text-base font-semibold uppercase tracking-[0.3em] text-slate-500">
        Release notes
      </h2>
      <div
        className="prose prose-slate mt-4 max-w-none text-sm leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </section>
  );
}
