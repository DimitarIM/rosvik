import SingleMemberInfo from "../../../components/SingleMemberInfo";
import { allMembers } from "../../../data/teamData";
import { slugify } from "../../../utils/utils";

function generateStaticParams() {
  return allMembers.map((member) => ({
    member: slugify(member.name),
  }));
}

const MemberPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const {slug} = await params;

  const member = allMembers.find((person) => slugify(person.name) === slug);

  if (!member) {
    return <div className="p-2 font-labrada">Member not found</div>;
  }

  return <SingleMemberInfo {...member} />;
};

export default MemberPage;
