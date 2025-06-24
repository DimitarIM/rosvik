import Carousel from "@/components/Carousel";
import Inner from "@/components/Layout/Inner";
import SingleMemberInfo from "../../../../components/SingleMemberInfo";
import { allMembers } from "../../../../data/teamData";
import { slugify } from "../../../../utils/utils";

// /* Nextjs requires generateStaticParams */
// export async function generateStaticParams() {
//   return allMembers.map((member) => ({
//     member: slugify(member.name),
//   }));
// }

const MemberPage = async ({
  params,
}: {
  params: Promise<{ locale:string, member: string }>;
}) => {
  const { locale, member } = await params;
  const selectedMember = allMembers.find(
    (person) => slugify(person.name) === member
  );

  if (!selectedMember || !locale) {
    return <div className="p-2 font-labrada">Member not found</div>;
  }

  return (
    <Inner>
      <div className="relative flex flex-col z-20">
        <SingleMemberInfo {...selectedMember} />
        <Carousel {...selectedMember} />
      </div>
    </Inner>
  );
};

export default MemberPage;
