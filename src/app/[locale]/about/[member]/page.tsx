import Carousel from "@/components/Carousel";
import SingleMemberInfo from "@/components/SingleMemberInfo";
import { allMembers } from "@/data/teamData";
import { slugify } from "@/utils/utils";
import Inner from "@/components/Layout/Inner";

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
    <Inner>
      <h1 className="relative flex flex-col z-20">
        <SingleMemberInfo {...selectedMember} />
        <Carousel {...selectedMember} />
      </h1>
    </Inner>
  );
};

export default MemberPage;
