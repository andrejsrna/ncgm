import dynamic from "next/dynamic";
import Hero from "@/app/components/hero";

const SectionSkeleton = () => (
  <section className="py-24">
    <div className="mx-auto max-w-6xl px-4">
      <div className="h-48 rounded-xl border border-red-900/30 bg-red-900/10 animate-pulse" />
    </div>
  </section>
);

const FeaturedTrack = dynamic(() => import("@/app/components/FeaturedTrack"), {
  loading: () => <SectionSkeleton />,
});

const PickYourGenre = dynamic(() => import("@/app/components/PickYourGenre"), {
  loading: () => <SectionSkeleton />,
});

const WhoIsBehind = dynamic(() => import("@/app/components/WhoIsBehind"), {
  loading: () => <SectionSkeleton />,
});

const MusicProfile = dynamic(() => import("@/app/components/MusicProfile"), {
  loading: () => <SectionSkeleton />,
});

const HowItWorks = dynamic(() => import("@/app/components/HowItWorks"), {
  loading: () => <SectionSkeleton />,
});

const Accordion = dynamic(() => import("@/app/components/accordion"), {
  loading: () => <SectionSkeleton />,
});

const CallToAction = dynamic(() => import("@/app/components/CallToAction"), {
  loading: () => <SectionSkeleton />,
});

const Support = dynamic(() => import("@/app/components/Support"), {
  loading: () => <SectionSkeleton />,
});

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedTrack />
      <PickYourGenre />
      <WhoIsBehind />
      <MusicProfile />
      <HowItWorks />
      <Accordion />
      <CallToAction />
      <Support />
    </div>
  );
}
