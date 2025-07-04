"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation"; 
import Image from "next/image";
import svImage from "../../../public/btn/sv-btn.png";
import enMobileImage from "../../../public/btn/lang_btn_mobile.png";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const localeToSwitchTo = currentLocale === "en" ? "sv" : "en";

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const imageSrc = localeToSwitchTo === "en" ? enMobileImage : svImage;
  const altText =
    localeToSwitchTo === "en"
      ? t("locale", { locale: "en" })
      : t("locale", { locale: "sv" });

  return (
    <div className="md:absolute md:right-8 md:top-50% md:translate-y-[50%] flex justify-center items-center pr-2 rounded-lg">
      <button
        type="button"
        onClick={() => handleLocaleChange(localeToSwitchTo)}
        className={`
          rounded-md font-medium text-sm
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
