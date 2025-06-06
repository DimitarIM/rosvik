import SingleMemberInfo from "../../../components/SingleMemberInfo";
import { allMembers } from "../../../data/teamData";
import { SingleMemberProps } from "../../../types/types";
import { slugify } from "../../../utils/utils";

const MemberPage = ({ params }: { params: { member: string } }) => {
  const slugname = params.member;
  
  const member: SingleMemberProps | undefined = allMembers.find(
    (person) => slugify(person.name) === slugname
  );

  if (!member) {
    return <div className="p-2 font-labrada">Member not found</div>;
  }

  return (
    <>
      <SingleMemberInfo {...member} />
      {/* slideshow */}
    </>
  );
};

export default MemberPage;
