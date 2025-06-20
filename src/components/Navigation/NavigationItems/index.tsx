"use client";
import Link from "next/link";
import { menuItems } from "@/data/data";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const NavigationItems = () => {
  const pathname = usePathname();
  const t = useTranslations("menu");
  const tMenuItems: { name: string; path: string }[] = [
    { name: t("game"), path: "/game" },
    { name: t("aboutus"), path: "/about" },
    { name: t("demo"), path: "/demo" },
  ];

  return (
    <div className="flex  space-x-6 text-white">
      {tMenuItems.map((item, index) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={index}
            href={item.path}
            className={`bg-[#595959]/60 p-4 rounded-4xl w-30 text text-center  hover:bg-[var(--color-sunny)] transition duration-200} ${
              isActive ? "shadow-[0_0_15px_2px_rgba(255,255,0,0.6)]" : ""
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationItems;
