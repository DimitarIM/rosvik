
import SlideShow from "@/components/SlideShow";
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

  const images = ["/img/slideshow-img_1.png","/img/slideshow-img_2.png","/img/slideshow-img_3.png","/img/slideshow-img_4.png","/img/slideshow-img_5.png","/img/slideshow-img_6.png",]

  return (
    <div>
      <SingleMemberInfo {...selectedMember} />;
      <section className="w-full h-full flex flex-col justify-center items-center">
          <SlideShow imageUrls={images} />
      </section>
    </div>
  )
};

export default MemberPage;
