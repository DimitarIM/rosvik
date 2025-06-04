import TeamColumn from "../../components/TeamColumn";

const AboutPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[29px] h-full p-12 ">
        <TeamColumn team="management" />
        <TeamColumn team="design" />
        <TeamColumn team="art" />
        <TeamColumn team="programmer" />
      </div>
     {/* T9 placeholder */}
    </>
  );
};
export default AboutPage;
