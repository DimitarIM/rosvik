import Link from "next/link";
import { allMembers } from "../../../data/teamData";
import { MemberParamsProps } from "../../../types/types";
import { slugify } from "../../../utils/utils";

const MemberPage = ({ params }: MemberParamsProps) => {
  const slugname = params.member;
  const member = allMembers.find((person) => person.name ? slugify(person.name) === slugname : null);

  if (!member) {
    return <div className="p-10font-labrada">Member not found</div>;
  }

  return (
    <div className="font-labrada flex flex-col items-center">
      <div className="flex w-full justify-between items-center gap-15">
        {/* First column box */}
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-xl lg:text-[40px]">{member.name}</p>
            <p className="text-xl lg:text-[40px]">{member.title}</p>
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
        <section className="flex flex-col text-color-primary space-y-[50px] pt-[140px]">
          <div className="p-[55px] flex-1 bg-foreground text-[26px] rounded-[10px]">
            <span>{member.quote}</span>
          </div>
          <div className="underline flex justify-start items-center gap-15 text-[26px]">
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
