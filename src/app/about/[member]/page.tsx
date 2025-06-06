import SingleMemberInfo from "../../../components/SingleMemberInfo";
import { allMembers } from "../../../data/teamData";
import { slugify } from "../../../utils/utils";

export async function generateStaticParams() {
  return allMembers.map((member) => ({
    member: slugify(member.name),
  }));
}

const MemberPage = ({ params }: { params: { member: string } }) => {
  const slugname = params.member;

  const member = allMembers.find(
    (person) => slugify(person.name) === slugname
  );

  if (!member) {
    return <div className="p-2 font-labrada">Member not found</div>;
  }

  return (
    <>
      <SingleMemberInfo {...member} />
    </>
  );
};

export default MemberPage;
