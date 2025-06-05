import Link from "next/link";
import { allMembers } from "../../data/teamData";
import { TeamColumnProps } from "../../types/types";
import { slugify } from "../../utils/utils";

const TeamColumn = ({ team }: TeamColumnProps) => {
  const filteredTeam = allMembers.filter(
    (person) => person.team.toLowerCase() === team.toLowerCase()
  );

  return (
    <div className="flex flex-col w-full h-full font-labrada space-y-1">
      <h1 className="text-[40px] p-2 text-center">
        {team.charAt(0).toUpperCase() + team.slice(1)}
      </h1>
      <div className="flex-1 space-y-8 p-7 bg-foreground rounded-[10px]">
        {filteredTeam.map((member, index) => (
          <div key={index}>
            <p className="text-xl font-bold">{member.title}</p>
            <Link href={`/about/${slugify(member.name)}`}
              className="text-xl underline cursor-pointer hover:text-primary transition"
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
