import Inner from "@/components/Layout/Inner";
import FooterLogoSection from "@/components/FooterLogoSection";
import TeamColumn from "../../../components/TeamColumn";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("about");

  return (
    <>
      <Inner>
        <h1 className="relative top-[-8vh] md:hidden text-pageTitle-color text-[20px] font-normal text-center ">
          {t("header")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 h-full p-10 pt-0">
          <TeamColumn team="management" translatedTeamName={t("teams.management")} />
          <TeamColumn team="design" translatedTeamName={t("teams.design")} />
          <TeamColumn team="art" translatedTeamName={t("teams.art")} />
          <TeamColumn team="programmer" translatedTeamName={t("teams.programmer")} />
          <TeamColumn team="frontend" translatedTeamName={t("teams.frontend")} />
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
