export default function MemberPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-[url(/img/bg_2.png)] bg-cover bg-center">
      {children}
    </div>
  );
}
