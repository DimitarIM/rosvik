import { allMembers } from "../../data/teamData";
import { TeamColumnProps } from "../../types/types";

const TeamColumn = ({ team }: TeamColumnProps) => {
  const filteredTeam = allMembers.filter(
    (person) => person.team.toLowerCase() === team.toLowerCase()
  );

  return (
    <div className="bg-foreground font-labrada">
      <h1 className="text-4xl">
        {team.charAt(0).toUpperCase() + team.slice(1)}
      </h1>
      {filteredTeam.map((member, index) => (
        <div key={index}>
          <p className="text-xl font-bold">{member.title}</p>
          <p className="text-xl">{member.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamColumn;
