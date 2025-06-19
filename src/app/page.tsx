import Inner from "@/components/Layout/Inner";
import MainHeroSection from "../components/MainHeroSection";
import MediaTrailer from "@/components/MediaTrailer";

export default function Home() {
  return (
    <>
      <Inner>
        <MainHeroSection
          firstText="Explore"
          secondText="Avoid"
          thirdText="Survive"
        />
        <MediaTrailer />
      </Inner>
    </>
  );
}