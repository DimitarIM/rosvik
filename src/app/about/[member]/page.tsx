import Link from "next/link";
import { allMembers } from "../../../data/teamData";
import { MemberParamsProps } from "../../../types/types";
import { slugify } from "../../../utils/utils";

const MemberPage = ({ params }: MemberParamsProps) => {
  const slugname = params.member;
  const member = allMembers.find((person) => slugify(person.name) === slugname);

  if (!member) {
    return <div className="p-10font-labrada">Member not found</div>;
  }

  return (
    <div className="w-full font-labrada flex flex-col items-center">
      <div className="w-full flex flex-col lg:flex-row justify-center gap-0 lg:gap-15">
        {/* First column box */}
        <div className="w-full flex justify-between items-center lg:justify-start flex-row-reverse lg:flex-col gap-5 lg:gap-10 text-[14px] lg:text-[40px]">
          <div className="flex-1 lg:flex-none">
            <p>{member.name}</p>
            <p>{member.title}</p>
          </div>
          <div className="w-[90px] md:w-[150px] lg:w-[290px] aspect-square overflow-hidden rounded-full">
            <img
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        {/* Second column box */}
        <section className="flex flex-col-reverse lg:flex-col text-color-primary space-y-[50px] text-[12px] lg:text-[26px]">
          <div className="lg:mt-[170px] p-5 lg:p-[55px] flex-1 bg-foreground rounded-[10px] text-[14px] lg:text-[26px]">
            <span>{member.quote}</span>
          </div>
          <div className="underline flex justify-start items-center gap-4 lg:gap-15 p-4">
            <a href={member.linkedin} target="_blank">
              LinkedIn
            </a>
            <br />
            <a href={member.website} target="_blank">
              Website
            </a>
            <br />
            <a href={member.discord} target="_blank">
              Discord
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MemberPage;
