import Inner from "@/components/Layout/Inner";

export default function MemberPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Inner>
        <div className="pt-[]">
        {children}
        </div>
      </Inner>
    </>
  );
}
