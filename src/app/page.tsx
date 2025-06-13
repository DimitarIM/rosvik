import KeyFeatures from "@/components/KeyFeatures";
import { keyfeaturesData } from "@/data/keyfeaturesdata";
import MainHeroSection from "../components/MainHeroSection";

export default function Home() {
  return (
    <>
      <MainHeroSection
        firstText="Explore"
        secondText="Avoid"
        thirdText="Survive"
      />
      <KeyFeatures keyfeatures={keyfeaturesData} />
    </>
  );
}