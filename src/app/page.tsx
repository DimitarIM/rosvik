import KeyFeatures from "@/components/KeyFeatures";
import { keyfeaturesData } from "@/data/keyfeaturesdata";
import MainHeroSection from "../components/MainHeroSection";
import MediaTrailer from "@/components/MediaTrailer";

export default function Home() {
  return (
    <>
      <MainHeroSection firstText="Explore" secondText="Avoid" thirdText="Survive"/>
          <MediaTrailer/>

      <KeyFeatures keyfeatures={keyfeaturesData} />
    </>
  );
}