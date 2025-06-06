import { SingleMemberProps } from "../../types/types";

const SingleMemberInfo = (member: SingleMemberProps) => {
  const { title, image, name, quote, linkedin, website, discord } = member;

  return (
    <div className="w-full font-labrada flex flex-col items-center">
      <div className="w-full flex flex-col lg:flex-row justify-center gap-0 lg:gap-15">
        {/* First column box */}
        <div className="w-full flex justify-between items-center lg:justify-start flex-row-reverse lg:flex-col gap-5 lg:gap-10 text-[14px] lg:text-[40px]">
          <div className="flex-1 lg:flex-none">
            <p>{name}</p>
            <p>{title}</p>
          </div>
          <div className="w-[90px] md:w-[150px] lg:w-[290px] aspect-square overflow-hidden rounded-full">
            <img
              src={image}
              alt={name}
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        {/* Second column box */}
        <section className="flex flex-col-reverse lg:flex-col text-color-primary space-y-[50px] text-[12px] lg:text-[26px]">
          <div className="lg:mt-[170px] p-5 lg:p-[55px] flex-1 bg-foreground rounded-[10px] text-[14px] lg:text-[26px]">
            <span>{quote}</span>
          </div>
          <div className="underline flex justify-start items-center gap-4 lg:gap-15 p-4">
            <a href={linkedin} target="_blank">
              LinkedIn
            </a>
            <br />
            <a href={website} target="_blank">
              Website
            </a>
            <br />
            <a href={discord} target="_blank">
              Discord
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
export default SingleMemberInfo;
