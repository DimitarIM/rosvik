import Inner from "@/components/Layout/Inner";

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Inner>
      <div className="w-full min-h-screen bg-[url(/img/bg_2.png)] bg-cover bg-center pt-[130px] md:pt-[170px]">
        {children}
      </div>
    </Inner>
  )
}
