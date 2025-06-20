import TeamColumn from "../../../components/TeamColumn";
import FooterLogoSection from "@/components/FooterLogoSection";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("about");
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 h-full p-10">
        <TeamColumn team="management" />
        <TeamColumn team="design" />
        <TeamColumn team="art" />
        <TeamColumn team="programmer" />
      </div>

      <div className="flex justify-center items-center h-full w-full">
        <FooterLogoSection
          logo="/img/team_fg_img.png"
          description={
            <div className="text-left p-7">
              <p className="flex flex-col">{t("lowerSection")}</p>
            </div>
          }
        />
      </div>
    </>
  );
};
export default AboutPage;
