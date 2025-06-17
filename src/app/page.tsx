import MainHeroSection from "../components/MainHeroSection";
import MediaTrailer from "@/components/MediaTrailer";

export default function Home() {
  return (
    <>
      <MainHeroSection
        firstText="Explore"
        secondText="Avoid"
        thirdText="Survive"
      />
      <MediaTrailer />
    </>
  );
}