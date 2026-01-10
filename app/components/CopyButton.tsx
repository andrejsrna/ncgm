"use client";

export default function CopyButton({ template }: { template: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(template)}
      className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
    >
      Copy template
    </button>
  );
}
