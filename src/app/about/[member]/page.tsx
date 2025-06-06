import SingleMemberInfo from "../../../components/SingleMemberInfo";
import { allMembers } from "../../../data/teamData";
import { MemberPageProps } from "../../../types/types";
import { slugify } from "../../../utils/utils";
import { notFound } from 'next/navigation';

const MemberPage = async ({ params }: MemberPageProps) => {
  const { slug } = params;
  const member = allMembers.find((person) => slugify(person.name) === slug);

  if (!member) {
    notFound();
  }

  return <SingleMemberInfo {...member} />;
};

export default MemberPage;

export async function generateStaticParams() {
  return allMembers.map((member) => ({
    slug: slugify(member.name),
  }));
}
