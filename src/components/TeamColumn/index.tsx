import Link from "next/link";
import { allMembers } from "../../data/teamData";
import { TeamColumnProps } from "../../types/types";
import { slugify } from "../../utils/utils";

const TeamColumn = ({ team }: TeamColumnProps) => {
  const filteredTeam = allMembers.filter(
    (person) => person.team.toLowerCase() === team.toLowerCase()
  );

  return (
    <div className="flex relative flex-col items-center h-full font-labrada space-y-4 w-full md:last:col-span-2 md:last:w-[50%] md:last:left-[50%] md:last:translate-x-[-50%] md:last:text-center lg:last:col-span-4 lg:last:text-center">
      <h2 className="text-[38px] p-2 text-center">
        {team.charAt(0).toUpperCase() + team.slice(1)}
      </h2>
      <div className="flex-1 space-y-8 md:space-y-10 p-7 bg-foreground rounded-[10px] w-full text-[var(--role-color)]">
        {filteredTeam.map((member, index) => (
          <div key={index}>
            <p className="text-[24px] tracking-[1px] pb-2 font-medium">{member.title}</p>
            <Link href={`/about/${slugify(member.name)}`}
              className="text-[22px] text-[var(--name-color)] cursor-pointer transition 
              hover:text-shadow-[0_0_5px_rgb(182_169_112)] "
            >
              {member.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamColumn;
