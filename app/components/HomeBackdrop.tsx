'use client';

type Props = {
  className?: string;
};

export default function HomeBackdrop({ className }: Props) {
  return (
    <div className={className ?? "pointer-events-none absolute inset-0 overflow-hidden"}>
      <div className="absolute inset-0 bg-slate-950" />

      <div className="absolute inset-0 opacity-80">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse-slow" />
        <div className="absolute left-1/3 top-10 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl animate-pulse-slow" />
        <div className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      <div className="absolute inset-0 bg-noise opacity-25" />
      <div className="absolute inset-0 bg-scanline opacity-[0.08]" />
    </div>
  );
}
