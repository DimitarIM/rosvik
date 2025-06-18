'use client'
import { footerLinks } from "@/data/footerData"
import Image from "next/image"
import Link from "next/link"

const FooterLinks = () => {
    return (
        <div className="flex flex-col gap-3">
        {footerLinks.links.map(link => (
        <div key={link.id} className="">
            {link.logo && (
                <Link href={link.href}>
                <span>
                    <Image src={link.logo} width={100} height={100} alt="" />
                </span>
                </Link>
            )}
            {link.label && (
                <Link  href={link.href}>
                <span className="bg-button-color py-2 rounded-2xl flex flex-col text-center">
                    {link.label}
                </span>
                </Link>
            )}
        </div>
        ))}
    </div>
    )
}

export default FooterLinks