import TeamColumn from "../../../components/TeamColumn";
import FooterLogoSection from "@/components/FooterLogoSection";

const AboutPage = () => {
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
              <p className="flex flex-col">
                A team of ambitious students dedicated to creating challenging,
                complex, or technically ambitious projects. Our work is often
                marked by creativity, resilience, and a passion for pushing the
                limits of interactive entertainment.
              </p>
            </div>
          }
        />
      </div>
    </>
  );
};
export default AboutPage;
