import { allMembers } from "../../../data/teamData";
import { slugify } from "../../../utils/utils";

const MemberPage = ({ params }: { params: { member: string } }) => {
  const slugname = params.member;
  const member = allMembers.find(
    (person) => slugify(person.name.toLowerCase()) === slugname
  );

  if (!member) {
    return (
      <div className="p-10 text-red-500 font-labrada"> Member not found</div>
    );
  }

  return (
    <div className="p-10 space-y-4 font-labrada">
      <h1 className="text-4xl font-bold">{member.name}</h1>
      <p className="text-xl">{member.title}</p>
      <p className="text-sm italic text-muted-foreground">{member.team} Team</p>

      <div className="space-y-2">
        <a
          href={member.linkedin}
          target="_blank"
          className="text-blue-500 underline"
        >
          LinkedIn
        </a>
        <br />
        <a
          href={member.website}
          target="_blank"
          className="text-blue-500 underline"
        >
          Website
        </a>
        <br />
        <a
          href={member.discord}
          target="_blank"
          className="text-blue-500 underline"
        >
          Discord
        </a>
      </div>
    </div>
  );
};

export default MemberPage;
