import MediaTrailer from "@/components/MediaTrailer";
import { useTranslations } from "next-intl";
import MainHeroSection from "../../components/MainHeroSection";

export default function Home() {
  const t = useTranslations("home");
  return (
    <>
      <MainHeroSection
        firstText={t("main.firstText")}
        secondText={t("main.secondText")}
        thirdText={t("main.thirdText")}
      />
      <MediaTrailer />
    </>
  );
}
