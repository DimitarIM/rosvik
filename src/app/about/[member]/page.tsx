import Link from "next/link";
import { allMembers } from "../../../data/teamData";
import { MemberParamsProps } from "../../../types/types";
import { slugify } from "../../../utils/utils";

const MemberPage = ({ params }: MemberParamsProps) => {
  const slugname = params.member;
  const member = allMembers.find(
    (person) => slugify(person.name) === slugname
  );

  if (!member) {
    return (
      <div className="p-10font-labrada">Member not found</div>
    );
  }

  return (
    <div className="p-10 space-y-4 font-labrada">
      <Link href="/about" className="bg-green-800 p-2 rounded-lg">Mock back button</Link>
      <p className="text-[40px]">{member.name}</p>
      <p className="text-[40px]">{member.title}</p>
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
