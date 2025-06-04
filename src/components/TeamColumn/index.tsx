import { allMembers } from "../../data/teamData";
import { TeamColumnProps } from "../../types/types";

const TeamColumn = ({ team }: TeamColumnProps) => {
  const filteredTeam = allMembers.filter(
    (person) => person.team.toLowerCase() === team.toLowerCase()
  );

  return (
    <div className="flex flex-col w-full h-full font-labrada space-y-1">
      <h1 className="text-4xl p-2">
        {team.charAt(0).toUpperCase() + team.slice(1)}
      </h1>
      <div className="flex-1 space-y-8 p-7 bg-foreground rounded-[10px]">
        {filteredTeam.map((member, index) => (
          <div key={index}>
            <p className="text-xl font-bold">{member.title}</p>
            <p className="text-xl underline">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamColumn;
