import TeamColumn from "../../components/TeamColumn";
import FooterLogoSection from "@/components/FooterLogoSection";

const AboutPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 h-full">
        <TeamColumn team="management" />
        <TeamColumn team="design" />
        <TeamColumn team="art" />
        <TeamColumn team="programmer" />
      </div>
      
      <div className="flex justify-center items-center h-full w-full">
      <FooterLogoSection
        logo="/img/team_fg_img.png"
        description={
          <div className="text-left lg:p-10 md:p-4">
          <p className="flex flex-col">Something about the team and/or about GP3
            <br />
            <span className="text-[26px] text-color-primary md:text-left">(...)</span>
          </p>
        </div>
        }
      />
    </div>
    </>
  );
};
export default AboutPage;






  
    