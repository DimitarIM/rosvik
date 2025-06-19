import Inner from "@/components/Layout/Inner";

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Inner>
      <div className="relative w-full min-h-screen bg-[url(/img/bg_2.png)] bg-cover bg-center pt-[130px] md:pt-[170px]">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        {children}
      </div>
    </Inner>
  )
}
