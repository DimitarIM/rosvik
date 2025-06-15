import SingleMemberInfo from "../../../components/SingleMemberInfo";
import { allMembers } from "../../../data/teamData";
import { slugify } from "../../../utils/utils";

/* Nextjs requires generateStaticParams */
export async function generateStaticParams() {
  return allMembers.map((member) => ({
    member: slugify(member.name),
  }));
}

const MemberPage = async ({
  params,
}: {
  params: Promise<{ member: string }>;
}) => {
  const { member } = await params;
  const selectedMember = allMembers.find(
    (person) => slugify(person.name) === member
  );

  if (!selectedMember) {
    return <div className="p-2 font-labrada">Member not found</div>;
  }

  return (
    <div className="flex flex-col">
      <SingleMemberInfo {...selectedMember} />
    </div>
  )
};

export default MemberPage;
