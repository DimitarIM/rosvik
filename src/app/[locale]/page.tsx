import Inner from "@/components/Layout/Inner";
import MainHeroSection from "../../components/MainHeroSection";
import MediaTrailer from "@/components/MediaTrailer";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <>
      <Inner>
        <MainHeroSection
          firstText={t("main.firstText")}
          secondText={t("main.secondText")}
          thirdText={t("main.thirdText")}
        />
        <MediaTrailer />
      </Inner>
    </>
  );
}
