import SingleMemberInfo from "../../../components/SingleMemberInfo";
import { allMembers } from "../../../data/teamData";
import { slugify } from "../../../utils/utils";

export async function generateStaticParams() {
  return allMembers.map((slug) => ({
    slug: slugify(slug.name),
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
