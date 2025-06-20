"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import Image from "next/image";
import svImage from "../../../public/btn/sv-btn.png";
import enMobileImage from "../../../public/btn/lang_btn_mobile.png";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const getNextLocale = (): string => {
    return currentLocale === "en" ? "sv" : "en";
  };

  const handleLocaleChange = () => {
    const nextLocale = getNextLocale();
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const newPath = segments.join("/");
    startTransition(() => {
      router.replace(newPath);
    });
  };

  const nextLocaleToDisplay = getNextLocale();

  const imageSrc = nextLocaleToDisplay === "en" ? enMobileImage : svImage;
  const altText =
    nextLocaleToDisplay === "en"
      ? t("locale", { locale: "en" })
      : t("locale", { locale: "sv" });

  return (
    <div className="flex justify-center items-center p-1 rounded-lg">
      <button
        type="button"
        onClick={handleLocaleChange}
        className={`
          px-3 py-2 rounded-md font-medium text-sm
          relative overflow-hidden flex items-center justify-center cursor-pointer
        `}
      >
        {""}
        <Image
          src={imageSrc}
          alt={altText}
          width={32}
          height={24}
          className="rounded-sm"
        />
      </button>
    </div>
  );
}
