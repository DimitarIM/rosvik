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
    <div className="font-labrada flex flex-col items-center">
      <Link href="/about" className="bg-green-800 p-2 rounded-lg">
        Back (delete later)
      </Link>
      <div className="flex w-full lg:w-[60%] justify-between items-center">
        {/* Left box */}
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-xl lg:text-[40px]">{member.name}</p>
            <p className="text-xl lg:text-[40px]">{member.title}</p>
          </div>
          <div className="w-[90px] md:w-[150px] lg:w-[290px] aspect-square overflow-hidden rounded-full">
            <img
              src="/img/profile.png"
              alt="profile picture"
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        {/* Right box */}
        <div>
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
    </div>
  );
};

export default MemberPage;
