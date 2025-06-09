export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-[url(/img/bg_2.png)] bg-cover bg-center p-9 pt-21 lg:p-25">
      {children}
    </div>
  )
}
