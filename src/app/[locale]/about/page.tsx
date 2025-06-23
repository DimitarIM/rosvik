import Inner from "@/components/Layout/Inner";
import FooterLogoSection from "@/components/FooterLogoSection";
import TeamColumn from "../../../components/TeamColumn";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("about");

  return (
    <>
      <Inner>
        <h1 className="relative top-[-8vh] md:hidden text-pageTitle-color text-2xl font-normal text-center ">
          {t("header")}
        </h1>
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 h-full p-10 pt-0">
          <TeamColumn team="management" />
          <TeamColumn team="design" />
          <TeamColumn team="art" />
          <TeamColumn team="programmer" />
          <TeamColumn team="frontend" />
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 h-full p-15 ">
          <TeamColumn team="management" translatedTeamName={t("teams.management")} />
          <TeamColumn team="design" translatedTeamName={t("teams.design")} />
          <TeamColumn team="art" translatedTeamName={t("teams.art")} />
          <TeamColumn team="programmer" translatedTeamName={t("teams.programmer")} />
          <TeamColumn team="frontend" translatedTeamName={t("teams.frontend")} />
>>>>>>> 7f06e7f1d1ab696bd6a4878fd2b51cb5164d5b4d
        </div>

        <div className="relative flex justify-center items-center h-full w-full z-20">
          <FooterLogoSection
            logo="/img/team_fg_img.png"
            description={
              <div className="text-left p-7">
                <p className="flex flex-col">{t("lowerSection")}</p>
              </div>
            }
          />
        </div>
      </Inner>
    </>
  );
};
export default AboutPage;
