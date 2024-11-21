import Hero from "@/components/hero";
import Accordion from "@/components/accordion";
import MusicProfile from "@/components/MusicProfile";
import Footer from "@/components/footer";
import WhoIsBehind from "@/components/WhoIsBehind";
import CallToAction from "@/components/CallToAction";
import FeaturedTrack from "@/components/FeaturedTrack";
import PickYourGenre from "@/components/PickYourGenre";

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeaturedTrack/>
      <MusicProfile/>
      <Accordion/>
      <CallToAction/>
      <WhoIsBehind/>
      <PickYourGenre/>
      <Footer/>
    </div>
  );
}
