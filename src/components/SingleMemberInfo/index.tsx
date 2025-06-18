import Link from "next/link";
import { SingleMemberProps } from "../../types/types";

const SingleMemberInfo = (member: SingleMemberProps) => {
  const { title, image, name, quote } = member;
  //, linkedin, website, discord
  return (
    <div className="w-full font-labrada flex flex-col items-center p-9 pt-10 lg:p-25 ">
      <div className="w-full flex flex-col lg:flex-row justify-center gap-10 lg:gap-15">
         
        {/* First column box */}
        <div className="w-full flex justify-between items-center lg:justify-start flex-row-reverse lg:flex-col gap-5 lg:gap-10 text-[12px] md:text-[18px] lg:text-[24px]">
          <div className="flex-1 lg:flex-none">
            <p className="text-2xl lg:text-4xl">{name}</p>
            <p>{title}</p>
          </div>
          <div className="relative w-[90px] md:w-[150px] lg:w-[290px] rounded-full">
            <img
              src={image}
              alt={name}
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />
            <Link href="/about"><p className="absolute left-[-10%] top-[-40%] lg:top-[-80%] text-[20px] md:text-[30px] lg:text-[50px] text-[var(--name-color)] hover:text-shadow-[0_0_5px_rgb(182_169_112)]"><span className="pr-2">&#10523;</span>Back</p></Link>
          </div>
        </div>
        {/* Second column box */}
        <section className="flex flex-col-reverse lg:flex-col text-color-primary space-y-[50px] text-[12px] lg:text-[26px]">
          <div className="lg:mt-[170px] p-5 lg:p-[55px] flex-1 bg-foreground rounded-[10px] text-[14px] lg:text-[26px]">
            <span>{quote}</span>
          </div>
          {/* <div className="underline flex justify-start items-center gap-4 lg:gap-15 p-4">
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
          </div> */}
        </section>
      </div>
    </div>
  );
};
export default SingleMemberInfo;
