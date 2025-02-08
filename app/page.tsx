import Hero from "@/app/components/hero";
import Accordion from "@/app/components/accordion";
import MusicProfile from "@/app/components/MusicProfile";
import WhoIsBehind from "@/app/components/WhoIsBehind";
import CallToAction from "@/app/components/CallToAction";
import FeaturedTrack from "@/app/components/FeaturedTrack";
import PickYourGenre from "@/app/components/PickYourGenre";
import Support from "@/app/components/Support";
import HowItWorks from "@/app/components/HowItWorks";

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeaturedTrack/>
      <PickYourGenre/>
      <WhoIsBehind/>
      <MusicProfile/>
      <HowItWorks/>
      <Accordion/>
      <CallToAction/>
      <Support/>
    </div>
  );
}
